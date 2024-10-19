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
      overflowY: 'hidden !important', 
      overflowX: 'hidden !important',
      alignItems: 'center',           
      maxHeight: '100%',
      position: 'fixed',
      width: '100%',
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
          <div style={{
            marginBottom: '20px',
          }}>
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
          <img src={Memoji} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          
          <button className="App-button">My projects</button>
        </div>
      </div>
      <FixedBottom />
    </div>
  );
}

export default App;
