import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const route = useRouteError() as any;

  if (route.status === 404) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
      </div>
    );
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-lg">{route.statusText || route.message}</p>
    </div>
  );
};

export default ErrorPage;
