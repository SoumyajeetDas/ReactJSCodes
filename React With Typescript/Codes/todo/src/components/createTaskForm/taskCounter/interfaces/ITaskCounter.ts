import { Status } from '../../enums/Status';

export type TaskCounterType =
  | Status.TODO
  | Status.IN_PROGRESS
  | Status.COMPLETED;

export interface ITaskCounter {
  status?: TaskCounterType;
  count?: number;
}
