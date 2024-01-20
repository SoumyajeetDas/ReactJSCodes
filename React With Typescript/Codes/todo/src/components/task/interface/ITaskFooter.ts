import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskFooter {
  id: number;
  status?: Status;
  onStatusChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onClick: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: number,
  ) => void;
}
