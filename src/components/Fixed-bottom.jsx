export default function FixedBottom() {
    return (
        <footer style={{
            position: 'fixed',
            bottom: '0',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            zIndex: '100',
            padding: '20px',
            width: '100%',  // Adjusted from 100vw to 100%
            maxWidth: '100%', // Ensure it doesn't overflow
            boxSizing: 'border-box', // Include padding in the width calculation
        }}>
            <div>
                <p style={{
                    textAlign: 'left',
                    marginLeft: '0px',
                    marginTop: '0', 
                    fontSize: '0.75rem',
                    color: 'white',
                }}>
                    Located in the Netherlands
                </p>
            </div>
            <div>
                <p style={{
                    textAlign: 'left',
                    marginLeft: '0px',
                    marginTop: '0', 
                    fontSize: '0.75rem',
                    color: 'white',
                }}>
                    <a style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                    href="https://github.com/KarelGustin" target="blank_">GitHub</a> 
                </p>
                <p style={{
                    textAlign: 'left',
                    marginLeft: '0px',
                    marginTop: '0', 
                    fontSize: '0.75rem',
                    color: 'white',
                }}>
                    <a style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                    href="https://instagram.com/karelgustin" target="blank_">Instagram</a> 
                </p>
            </div>
        </footer>
    );
}
