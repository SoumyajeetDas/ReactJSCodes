/* eslint-disable @typescript-eslint/no-explicit-any */
const fetchData = async (): Promise<any[]> => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
  const data = await response.json();
  return data as Promise<any[]>;
};

export default fetchData;
