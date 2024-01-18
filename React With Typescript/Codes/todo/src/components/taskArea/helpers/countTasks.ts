import { TaskCounterType } from '../../createTaskForm/taskCounter/interfaces/ITaskCounter';
import { ITaskAPi } from '../interfaces/ITaskApi';

export const countTasks = (
  tasks: ITaskAPi[],
  status: TaskCounterType,
): number => {
  if (!Array.isArray(tasks)) return 0;

  return tasks.filter((task) => task.status === status).length;
};
