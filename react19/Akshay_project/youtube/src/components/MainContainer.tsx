import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="flex h-full flex-col gap-5 p-3">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
