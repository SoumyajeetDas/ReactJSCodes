import { Provider } from 'react-redux';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: '/watch',
          element: <WatchVideo />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
