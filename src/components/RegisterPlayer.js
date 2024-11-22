// RegisterPlayer.js
import React, { useContext, useState } from 'react';
import { WalletContext } from './WalletProvider';
import contractABI from '../contractABI.json';
import Web3 from 'web3';

function RegisterPlayer() {
  const { account, web3 } = useContext(WalletContext);
  const [pseudo, setPseudo] = useState('');
  const [adventureID, setAdventureID] = useState('');
  const contractAddress = "0x2Bd681591C62570e4B2940F1B370d28945C14be8";

  const register = async () => {
    if (web3 && account) {
      try {
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        await contract.methods.register(adventureID, pseudo).send({
          from: account,
          gasLimit: '200000', // Modification de la configuration de gas pour les réseaux sans EIP-1559
          gasPrice: await web3.eth.getGasPrice()
        });
        alert('Welcome adventurer 3.0!');
      } catch (error) {
        console.error('Registering error :', error);
      }
    } else {
      alert('Please connect your wallet!');
    }
  };

  return (
    <div>
      <h3 className="title-border-h3">Register yourself to a zkT Adventure!</h3>
      <input
        type="text"
        placeholder="Adventure ID"
        value={adventureID}
        onChange={(e) => setAdventureID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default RegisterPlayer;
