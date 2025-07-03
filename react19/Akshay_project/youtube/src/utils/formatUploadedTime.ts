export const formatUploadedTime = (date: string) => {
  const timeDiffInMs = new Date().getTime() - new Date(date).getTime();

  const timeDiffInSeconds = Math.floor(timeDiffInMs / 1000);
  const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
  const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
  const timeDiffInDays = Math.floor(timeDiffInHours / 24);
  const timeDiffInMonths = Math.floor(timeDiffInDays / 30);
  const timeDiffInYears = Math.floor(timeDiffInDays / 365);

  if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} second${timeDiffInSeconds === 1 ? '' : 's'} ago`;
  }
  if (timeDiffInMinutes < 60) {
    return `${timeDiffInMinutes} minute${timeDiffInMinutes === 1 ? '' : 's'} ago`;
  }
  if (timeDiffInHours < 24) {
    return `${timeDiffInHours} hour${timeDiffInHours === 1 ? '' : 's'}  ago`;
  }
  if (timeDiffInDays < 30) {
    return `${timeDiffInDays} day${timeDiffInDays === 1 ? '' : 's'} ago`;
  }
  if (timeDiffInMonths < 12) {
    return `${timeDiffInMonths} month${timeDiffInMonths === 1 ? '' : 's'} ago`;
  }
  return `${timeDiffInYears === 1 ? '' : 's'} years ago`;
};
