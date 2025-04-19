import Greeting from './components/Greeting';
import Counter from './components/Counter/Counter';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Greeting name={'Pedro'} />
      <Counter />
      <UserProfile userId={4} />
    </div>
  );
}

export default App;
