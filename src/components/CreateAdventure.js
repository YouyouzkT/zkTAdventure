// CreateAdventure.js
import React, { useState, useContext } from 'react';
import { WalletContext } from './WalletProvider';
import contractABI from '../contractABI.json';
import Web3 from 'web3';

function CreateAdventure() {
  const { web3 } = useContext(WalletContext);
  const contractAddress = "0x2Bd681591C62570e4B2940F1B370d28945C14be8";
  const [isCreating, setIsCreating] = useState(false);

  const createAdventure = async () => {
    if (web3) {
      try {
        setIsCreating(true);
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const accounts = await web3.eth.getAccounts();
        await contract.methods.createAdventure().send({
          from: accounts[0],
          gasLimit: '200000', // Modification de la configuration de gas pour les réseaux sans EIP-1559
          gasPrice: await web3.eth.getGasPrice(),
        });
        
        alert('Adventure created successfully!');
      } catch (error) {
        console.error('Error creating adventure:', error);
        alert('Error creating adventure: ' + error.message);
      } finally {
        setIsCreating(false);
      }
    } else {
      alert('Please connect your wallet!');
    }
  };

  return (
    <div className="create-adventure-box">
      <button onClick={createAdventure} disabled={isCreating}>
        {isCreating ? 'Creating Adventure...' : 'Create Adventure'}
      </button>
    </div>
  );
}

export default CreateAdventure;
