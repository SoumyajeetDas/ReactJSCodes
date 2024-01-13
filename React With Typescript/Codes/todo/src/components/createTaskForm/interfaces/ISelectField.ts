import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export interface ISelectFieldOption {
  value: string;
  label: string;
}
export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  items?: ISelectFieldOption[];
  onChange?: (e: SelectChangeEvent) => void;
}
