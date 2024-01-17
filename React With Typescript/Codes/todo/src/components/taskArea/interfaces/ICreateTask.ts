import { Priority } from '../../createTaskForm/enums/Priority';
import { Status } from '../../createTaskForm/enums/Status';

export interface ICreateTask {
  title: string;
  date: string;
  description: string;
  priority: Priority;
  status: Status;
}
