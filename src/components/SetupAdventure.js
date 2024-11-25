// SetupAdventure.js
import React from 'react';
import CreateAdventure from './CreateAdventure';
import SetStepCount from './SetStepCount';
import ConfigStep from './ConfigStep';
import StartAdventure from './StartAdventure';
import ResolveStep from './ResolveStep';
import Web3 from 'web3';

function SetupAdventure() {
  return (
    <div className="setup-adventure-box stats-box">
      <h2 className="title-border-h2">Set Up a New Adventure</h2>
      <CreateAdventure />
      <div className="spacing"></div>
      <SetStepCount />
      <div className="spacing"></div>
      <ConfigStep />
      <div className="spacing"></div>
      <StartAdventure />
      <div className="spacing"></div>
      <div className="setup-adventure-box stats-box">
      <h2 className="title-border-h2">Resolve an Adventure Step</h2>
      <ResolveStep />
      </div>
    </div>
  );
}

export default SetupAdventure;
