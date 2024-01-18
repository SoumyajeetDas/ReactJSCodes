import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskFooter {
  id: number;
  status?: Status;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
