import logo from './logo.svg';
import Memoji from './images/memoji.png';
import './App.css';
import FixedBottom from './components/Fixed-bottom';
import { FaLocationDot } from "react-icons/fa6";
import Header from './components/Header';

function App() {
  return (
    <div style={{
      background: '#000000',
      height: '100vh',               
      overflow: 'hidden', 
      alignItems: 'center',           
      maxHeight: '100%',
    }}>
      <div className="App">
        <Header />

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
            maxHeight: '100%',
            paddingTop: 'auto',

          }}>
          <img src={Memoji} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <div >
            <i className="pulse green" style={{ marginRight: '15px' }}></i>
            <a
              className="App-link"
              href="mailto:karelgustin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Available for hire
            </a>
          </div>
        </div>
      </div>
      <FixedBottom />
    </div>
  );
}

export default App;
