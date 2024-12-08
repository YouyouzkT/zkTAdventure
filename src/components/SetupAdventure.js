// SetupAdventure.js
import React, { useState } from 'react';
import CreateAdventure from './CreateAdventure';
import SetStepCount from './SetStepCount';
import ConfigStep from './ConfigStep';
import StartAdventure from './StartAdventure';
import ResolveStep from './ResolveStep';
import Web3 from 'web3';


function SetupAdventure() {
  const [adventureID, setAdventureID] = useState(''); // État partagé pour Adventure ID
  console.log('Current Adventure ID in SetupAdventure:', adventureID); // Vérifie si l'état est mis à jour
  return (
    <div className="setup-adventure-box stats-box">
      <h2 className="title-border-h2">Set Up a New Adventure</h2>
      {/* Passer setAdventureID à CreateAdventure */}
      <CreateAdventure setAdventureID={setAdventureID} />
      <hr /> {/* Ligne de séparation */}
      <div className="spacing"></div>
      {/* Passer adventureID et setAdventureID à SetStepCount */}
      <SetStepCount adventureID={adventureID} setAdventureID={setAdventureID} />
      <hr /> {/* Ligne de séparation */}
      <div className="spacing"></div>
      <ConfigStep />
      <hr /> {/* Ligne de séparation */}
      <div className="spacing"></div>
      <StartAdventure />
      <hr /> {/* Ligne de séparation */}
      <div className="spacing"></div>
      <div className="setup-adventure-box stats-box">
        <h2 className="title-border-h2">Resolve an Adventure Step</h2>
        <ResolveStep />
      </div>
    </div>
  );
}

export default SetupAdventure;

