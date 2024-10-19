
export default function Header() {
  return (
    <header style={{
        background: 'transparent !important',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        color: '#FEED18',
        width: '100%',
        justifyContent: 'space-between',
        position: 'fixed',
        boxSizing: 'border-box',
        padding: '20px',
        overflow: 'hidden',
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
            marginRight: '30px',
          }}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </p>
        </div>
      </header>
  );
}