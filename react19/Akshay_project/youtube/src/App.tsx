import { Provider } from 'react-redux';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      // errorElement: <ErrorPage />,
      ErrorBoundary: () => <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
          ErrorBoundary: () => (
            <h1 className="text-3xl font-bold">Video Not Found</h1>
          ),
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
