import { useEffect, useState } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const data = await fetch(
        `${import.meta.env.VITE_YOUTUBE_URL}`.replace(
          '[YOUR_API_KEY]',
          import.meta.env.VITE_GOOGLE_API_KEY,
        ),
      );
      const response = await data.json();
      console.log(response?.items);

      setVideos(response?.items);
    })();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {videos?.map((video: any) => (
        <Link to={`/watch?v=${video?.id}`} key={video.id}>
          <Video
            imageUrl={video.snippet.thumbnails?.medium?.url}
            title={video.snippet.title}
            viewCount={video.statistics.viewCount}
            publishedAt={video.snippet.publishedAt}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
