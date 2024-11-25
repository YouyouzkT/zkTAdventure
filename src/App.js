// App.js
import './App.css';
import { WalletProvider } from './components/WalletProvider';
import ConnectWallet from './components/ConnectWallet';
import RegisterPlayer from './components/RegisterPlayer';
import MakeChoice from './components/MakeChoice';
import Footer from './components/Footer';
import PlayerStats from './components/PlayerStats';
import SetupAdventure from './components/SetupAdventure'; // Crée ce composant pour la nouvelle page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="App">
          <h1 className="title-border">zkT Adventure 3.0 Onchain</h1>
          <ConnectWallet />
          <nav className="link-navigation">
            <Link to="/" className="styled-link">PLAY</Link> | <Link to="/setup" className="styled-link">Set Up a New Adventure</Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <RegisterPlayer />
                <MakeChoice />
                <PlayerStats />
              </>
            } />
            <Route path="/setup" element={<SetupAdventure />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
