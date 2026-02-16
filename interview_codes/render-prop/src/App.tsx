import InputHandler from './components/InputHandler';
import ConvertDollar from './components/ConvertDollar';
import ConvertEUR from './components/ConvertEUR';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <InputHandler
          render={(rupee) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  alignItems: 'center',
                  marginTop: '50px',
                }}
              >
                <ConvertDollar rupee={rupee} />
                <ConvertEUR rupee={rupee} />
              </div>
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
