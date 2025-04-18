import { useUser } from '../hooks/useUser';

const Header = () => {
  const { users, showModal, updateShowModal } = useUser();
  return (
    <>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <h1>Header : {import.meta.env.VITE_MODE}</h1>

        <div
          style={{
            backgroundColor: 'grey',
            padding: '2px 10px',
          }}
          onClick={() => updateShowModal(!showModal)}
        >
          Cart:- &nbsp;
          <span
            style={{
              fontWeight: 'bold',
              backgroundColor: 'red',
              padding: '2px 8px',
              borderRadius: 20,
              margin: 0,
            }}
          >
            {users?.length}
          </span>
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 170,
            backgroundColor: 'wheat',
            padding: 10,
            color: 'black',
          }}
        >
          {users?.length === 0 ? (
            <p>No data tgo show</p>
          ) : (
            users?.map((user) => (
              <>
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 200,
                  }}
                  key={Object.keys(user)[0]}
                >
                  <div>{user[Object.keys(user)[0]].username}</div>
                  {user[Object.keys(user)[0]].count}
                </div>

                <hr />
              </>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Header;
