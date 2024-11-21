import './App.css';
import { WalletProvider } from './components/WalletProvider';
import ConnectWallet from './components/ConnectWallet';
import AdventureInteraction from './components/AdventureInteraction';

function App() {
  return (
    <WalletProvider>
      <div className="App">
        <h1>Aventure sur la blockchain</h1>
        <ConnectWallet />
        <AdventureInteraction />
      </div>
    </WalletProvider>
  );
}

export default App;