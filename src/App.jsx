import logo from './logo.svg';
import Memoji from './images/memoji.png';
import './App.css';
import FixedBottom from './components/Fixed-bottom';

function App() {
  return (
    <div style={{
      background: '#000000',
      height: '100vh',               // Full height of the viewport
      overflow: 'hidden',            // Disable scrolling
    }}>
      <div className="App">
        <header style={{
          background: 'transparent !important',
          padding: '10px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'row',
          color: 'white',
          width: '100%',
          justifyContent: 'space-between',
        }}>
          <div>
            <h1 style={{
              textAlign: 'left',
              marginBottom: '0px',
              fontSize: '1rem',
            }}>Karel Gustin</h1>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <p style={{
                textAlign: 'left',
                margin: '0px',
                fontSize: '0.75rem',
              }}>I build cool things online</p>
            </div>
          </div>
          <div>
            <p style={{
              margin: '0px',
              fontSize: '0.75rem',
            }}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </p>
          </div>
        </header>

        <div className='hero-available'>
          <img src={Memoji} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
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
        </div>
      </div>
      <FixedBottom />
    </div>
  );
}

export default App;
