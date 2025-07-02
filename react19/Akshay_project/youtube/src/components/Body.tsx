import { useAppSelector } from '../utils/store';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

const Body = () => {
  const { isMenuOpen } = useAppSelector((store) => store.appReducer);

  return (
    <div className="grid h-full grid-flow-col">
      {isMenuOpen && (
        <div className="col-span-2">
          <Sidebar />
        </div>
      )}
      <div className={`col-span-${isMenuOpen ? 10 : 12}`}>
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
