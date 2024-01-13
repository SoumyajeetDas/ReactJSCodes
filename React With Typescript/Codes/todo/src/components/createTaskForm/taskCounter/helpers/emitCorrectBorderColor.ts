import { Status } from '../../enums/Status';
import { TaskCounterType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (status: TaskCounterType): string => {
  switch (status) {
    case Status.TODO:
      return 'error.light';
    case Status.IN_PROGRESS:
      return 'warning.light';
    case Status.COMPLETED:
      return 'success.light';
  }
};
