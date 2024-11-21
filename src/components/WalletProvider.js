// WalletProvider.js
import React, { useState, useEffect, createContext } from 'react';
import Web3 from 'web3';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          // Demande à l'utilisateur de se connecter via MetaMask
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Récupérer l'adresse du compte connecté
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          // Gestion des événements de changement de compte
          window.ethereum.on('accountsChanged', (accounts) => {
            setAccount(accounts[0]);
          });

          // Gestion des événements de changement de réseau
          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });
        } catch (error) {
          console.error('Erreur lors de la connexion au wallet:', error);
        }
      } else {
        alert('Veuillez installer MetaMask pour utiliser cette application.');
      }
    };

    connectWallet();
  }, []);

  return (
    <WalletContext.Provider value={{ account, web3 }}>
      {children}
    </WalletContext.Provider>
  );
};