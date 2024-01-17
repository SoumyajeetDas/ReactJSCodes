import { Priority } from '../../createTaskForm/enums/Priority';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask extends ITaskFooter, ITaskHeader, ITaskDescription {
  priority?: Priority;
}
