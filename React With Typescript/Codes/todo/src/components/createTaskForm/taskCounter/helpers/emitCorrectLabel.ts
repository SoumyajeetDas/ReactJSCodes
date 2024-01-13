import { Status } from '../../enums/Status';
import { TaskCounterType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (status: TaskCounterType): string => {
  switch (status) {
    case Status.TODO:
      return 'To Do';
    case Status.IN_PROGRESS:
      return 'In Progress';
    case Status.COMPLETED:
      return 'Completed';
  }
};
