import { formatUploadedTime } from '../utils/formatUploadedTime';
import { formaViews } from '../utils/formatViews';

const Video: React.FC<{
  title: string;
  viewCount: string;
  publishedAt: string;
  imageUrl?: string;
}> = ({ title, viewCount, publishedAt, imageUrl }) => {
  return (
    <div className="flex flex-col gap-2 rounded-t-xl shadow">
      <img
        src={imageUrl}
        alt="Video Thumbnail"
        className="h-100 w-full rounded-t-xl"
      />
      <div></div>
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex flex-row items-center gap-1">
          <p className="text-base text-gray-400">
            {formaViews(Number(viewCount)) ?? 0} Views
          </p>
          <sup className="text-base text-gray-400">.</sup>
          <p className="text-base text-gray-400">
            {formatUploadedTime(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
