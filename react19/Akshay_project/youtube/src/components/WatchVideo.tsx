import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { appActions } from '../utils/store';

const WatchVideo = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.closeMenu()); // Close the sidebar when navigating to watch video
  }, []);
  return (
    <iframe
      width="1200"
      height="550"
      src={`https://www.youtube.com/embed/${searchParams?.get('v')}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default WatchVideo;
