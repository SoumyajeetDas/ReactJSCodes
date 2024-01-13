import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.NORMAL:
      return 'grey.900';
    case Priority.LOW:
      return 'info.light';
    case Priority.HIGH:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
