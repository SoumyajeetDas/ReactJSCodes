import fetchData from '../lib/lib';
import useQuery from '../lib/cachePromise';
import { useUser } from '../hooks/useUser';

const User = () => {
  const users = useQuery({ key: 'users', fn: () => fetchData() });

  const { updateUsersList, updateShowModal } = useUser();

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

      {users.map((user) => (
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
    </div>
  );
};

export default User;
