import React from 'react';
import { CircleUser, Menu, Search, X, Youtube } from 'lucide-react';
import { appActions, useAppDispatch, useAppSelector } from '../utils/store';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((store) => store.appReducer);

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="col-span-4">
        <div className="flex flex-row items-center gap-10">
          {/* Toggle Menu Button */}
          {isMenuOpen ? (
            <X
              onClick={() => dispatch(appActions.toggleMenu())}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Menu
              onClick={() => dispatch(appActions.toggleMenu())}
              style={{ cursor: 'pointer' }}
            />
          )}
          <div className="flex flex-row items-center">
            <Youtube size={50} color="red" />
            <p className="text-3xl text-red-500">Youtube</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-row items-center justify-center">
        <div className="flex w-full flex-row items-center">
          <input
            className="h-10 w-full rounded-l-full border-2 border-slate-500"
            type="text"
          />
          <button className="rounded-r-full bg-slate-500 px-4 py-2 text-white">
            <Search />
          </button>
        </div>
      </div>
      <div className="col-span-4 flex flex-row items-center justify-center">
        <CircleUser size={35} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default Header;
