import React, { useState } from 'react';
import { UserContextType } from '../types/type';
import { UserContext } from '../context/UserContext';

const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserContextType['users']>([]);
  const [showModal, setShowModal] = useState(false);

  const updateShowModal = (show: boolean) => {
    setShowModal(show);
  };

  const updateUsersList = (username: string) => {
    let key = '';
    if (username.split(' ').length === 1) {
      key = username?.toLowerCase();
    } else {
      key =
        username?.split(' ')[0].toLowerCase() +
        '-' +
        username?.split(' ')[1].toLowerCase();
    }

    const user = users.find((user) => user[key]);
    if (user) {
      const userData = {
        ...user,
        [key]: {
          username: username,
          count: user[key].count + 1,
        },
      };
      setUsers((prev) => [...prev.filter((u) => !u[key]), userData]);
    } else {
      const newUser = {
        [key]: {
          username: username,
          count: 1,
        },
      };
      setUsers((prev) => [...prev, newUser]);
    }
  };

  return (
    <UserContext value={{ updateUsersList, users, showModal, updateShowModal }}>
      {children}
    </UserContext>
  );
};

export default UserContextProvider;
