export type UserContextType = {
  users: UserType[] | [];
  updateUsersList: (username: string) => void;
  showModal: boolean;
  updateShowModal: (show: boolean) => void;
};

type UserType = {
  [key: string]: {
    username: string;
    count: number;
  };
};

export default UserType;
