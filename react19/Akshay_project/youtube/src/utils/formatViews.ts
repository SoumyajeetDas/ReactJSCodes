export const formaViews = (views: number): string => {
  if (views >= 1_00_0000) {
    return `${(views / 1000000)?.toFixed(1)}M`;
  }

  if (views >= 1_00_000) {
    return `${(views / 1000)?.toFixed(1)}L`;
  }

  if (views >= 1_000) {
    return `${(views / 1000)?.toFixed(1)}K`;
  }

  return views?.toString();
};
