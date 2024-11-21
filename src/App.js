// App.js
import './App.css';
import { WalletProvider } from './components/WalletProvider';
import ConnectWallet from './components/ConnectWallet';
import RegisterPlayer from './components/RegisterPlayer';
import MakeChoice from './components/MakeChoice';

function App() {
  return (
    <WalletProvider>
      <div className="App">
        <h1>Aventure sur la blockchain</h1>
        <ConnectWallet />
        <RegisterPlayer />
        <MakeChoice />
      </div>
    </WalletProvider>
  );
}

export default App;