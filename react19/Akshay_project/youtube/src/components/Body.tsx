import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../utils/store';
import Sidebar from './Sidebar';

const Body = () => {
  const { isMenuOpen } = useAppSelector((store) => store.appReducer);

  return (
    <div className="grid h-full grid-flow-col">
      {isMenuOpen && (
        <div className="col-span-5 min-w-52">
          <Sidebar />
        </div>
      )}
      <div className={`col-span-${isMenuOpen ? 7 : 12}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
