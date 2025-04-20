import axios from 'axios';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const UserProfile: React.FC<
  Readonly<PropsWithChildren<{ userId: number }>>
> = ({ userId }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  const [error, setError] = useState<string>('No error');

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //   .then((res) => res.json())
    //   .then((data) => setUser(data));

    (async () => {
      try {
        setError('No error');
        const response = await axios(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const data = await response.data;
        setUser(data);
      } catch (error) {
        setError('Error loading data');
      }
    })();
  }, [userId]);

  error === 'Error loading data' && <p>Error loading user data</p>;

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default UserProfile;
