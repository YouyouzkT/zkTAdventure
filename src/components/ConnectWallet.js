// ConnectWallet.js
import React, { useContext } from 'react';
import Web3 from 'web3';
import { WalletContext } from './WalletProvider';

function ConnectWallet() {
  const { account, web3 } = useContext(WalletContext);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Demande à l'utilisateur de se connecter via MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        
        // Récupère les comptes
        const accounts = await web3Instance.eth.getAccounts();

        if (accounts.length > 0) {
          console.log(`Connected: ${accounts[0]}`);
          alert(`Wallet connected : ${accounts[0]}`);
        }
      } catch (error) {
        console.error('Erreur lors de la connexion à MetaMask :', error);
      }
    } else {
      alert('Veuillez installer MetaMask pour utiliser cette fonctionnalité.');
    }
  };

  return (
    <div className="connect-wallet">
  <button onClick={connectWallet}>
    {account ? `Connected: ${account}` : 'Please connect your EVM wallet'}
  </button>
</div>
  );
}

export default ConnectWallet;
