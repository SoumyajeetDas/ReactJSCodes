import React, { useEffect, useState } from 'react';
import { CircleUser, Menu, Search, X, Youtube } from 'lucide-react';
import {
  appActions,
  searchActions,
  useAppDispatch,
  useAppSelector,
} from '../utils/store';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((store) => store.appReducer);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  const cachedData = useAppSelector((store) => store.searchReducer);

  useEffect(() => {
    const time = setTimeout(async () => {
      const cache = cachedData[searchInput];

      if (cache?.length > 0 || cache) {
        console.log('Using cached data');
        setSearchResults(cache);
        return;
      }
      const result = await fetch(
        `${import.meta.env.VITE_SEARCH_KEY}`.replace(
          '[YOUR_API_KEY]',
          import.meta.env.VITE_GOOGLE_API_KEY,
        ) + `&q=${searchInput}`,
      );

      const data = await result.json();

      if (data?.items) {
        dispatch(
          searchActions.cacheSearchResults({
            [searchInput]: data?.items?.map(
              (item: any) => item?.snippet?.title,
            ),
          }),
        );
        setSearchResults(data?.items?.map((item: any) => item?.snippet?.title));
      } else {
        setSearchResults([]);
      }
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [searchInput]);

  return (
    <div className="sticky left-0 top-0 z-10 grid w-full grid-flow-col bg-white p-3 opacity-80 shadow-lg">
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
        <div className="relative flex w-full flex-row items-center">
          <input
            className="h-10 w-full rounded-l-full border-2 border-slate-500 px-3"
            type="text"
            onChange={(e) => setSearchInput(e?.target?.value)}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />
          <button className="rounded-r-full bg-slate-500 px-4 py-2 text-white">
            <Search />
          </button>

          {showSearchResults && (
            <div className="absolute top-12 w-full bg-white p-5 shadow-lg">
              <ul className="flex flex-col gap-2 font-bold">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200">
                      {result}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No results found</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-4 flex flex-row items-center justify-center">
        <CircleUser size={35} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default Header;
