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
        <h1 className="title-border">zkT Adventure 3.0 Onchain</h1>
        <ConnectWallet />
        <RegisterPlayer />
        <MakeChoice />
      </div>
    </WalletProvider>
  );
}

export default App;