import fetchData from '../lib/lib';
import useQuery from '../lib/cachePromise';
import { useUser } from '../hooks/useUser';
import { useRef, useState } from 'react';
import InputComponent from './InputComponent';

const User = () => {
  const users = useQuery({ key: 'users', fn: () => fetchData() });

  const [userData, setUserData] = useState(users);

  const { updateUsersList, updateShowModal } = useUser();

  const ref = useRef<HTMLInputElement>(null);

  const handleAddUser = () => {
    const newUser = ref.current?.value;

    setUserData((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, name: newUser },
    ]);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h3>Users</h3>

      {userData.map((user) => (
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          key={user.id}
        >
          <div style={{ width: 500, backgroundColor: 'grey' }}>{user.name}</div>
          <button
            onClick={() => {
              updateShowModal(false);
              updateUsersList(user?.name as string);
            }}
          >
            Add
          </button>
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <InputComponent ref={ref} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default User;
