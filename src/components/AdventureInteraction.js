// AdventureInteraction.js
import React, { useContext } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json';
import { WalletContext } from './WalletProvider';

function AdventureInteraction() {
  const { account, web3 } = useContext(WalletContext);
  const contractAddress = "0x2Bd681591C62570e4B2940F1B370d28945C14be8";

  const interactWithContract = async () => {
    if (web3 && account) {
      try {
        // Création de l'instance du contrat avec web3
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Définir le gas et le prix du gas
        const gas = 3000000; // Par exemple, 3 millions de gas (à ajuster selon les besoins de ton contrat)
        const gasPrice = await web3.eth.getGasPrice(); // Obtient le prix actuel du gas

        // Appeler la fonction du contrat avec l'adresse de l'utilisateur connecté, le gas et le prix du gas
        const response = await contract.methods.createAdventure().send({ 
          from: account,
          gas: gas,
          gasPrice: gasPrice
        });

        console.log('Réponse du contrat :', response);
      } catch (error) {
        console.error('Erreur lors de l\'interaction avec le contrat :', error);
      }
    } else {
      alert('Connectez d\'abord votre wallet!');
    }
  };

  return (
    <div>
      <button onClick={interactWithContract}>Create your AdventureID</button>
    </div>
  );
}

export default AdventureInteraction;
