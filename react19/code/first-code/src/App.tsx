import { Suspense } from 'react';
import User from './children/User';
import Header from './children/Header';
import UserContextProvider from './provider/UserProvider';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <User />
      </Suspense>
    </UserContextProvider>
  );
}

export default App;
