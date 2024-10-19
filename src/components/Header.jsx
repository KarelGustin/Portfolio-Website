
export default function Header() {
  return (
    <header style={{
        background: 'transparent !important',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black',
        width: '100vw',
        overflowY: 'hidden',
    }}>
    <div >
      <h3 style={{
        textAlign: 'left',
        marginBottom: '0px',

      }}>Karel Gustin</h3>
      <p style={{
        textAlign: 'right',
        marginLeft: '0px',
        marginTop: '0', 

      }}>I build cool things online</p>
    </div>
    </header>
  );
}