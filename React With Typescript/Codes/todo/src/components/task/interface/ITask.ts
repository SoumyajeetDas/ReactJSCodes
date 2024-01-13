import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask extends ITaskFooter, ITaskHeader, ITaskDescription {
  id?: string;
  priority?: number;
  status?: string;
}
