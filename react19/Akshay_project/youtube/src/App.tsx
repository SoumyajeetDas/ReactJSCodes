import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
};

export default App;
