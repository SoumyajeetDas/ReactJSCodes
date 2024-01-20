import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from '@mui/material';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  disabled,
  value,
  onChange = (date: Date | null) => console.log(date),
}): ReactElement => {
  // const [date, setDate] = useState<Date | null>(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date desktop"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputFormat="MM/DD/YYYY"
        value={value}
        disabled={disabled}
        onChange={onChange}
        renderInput={(
          params: JSX.IntrinsicAttributes & {
            variant?: TextFieldVariants | undefined;
          } & Omit<
              | FilledTextFieldProps
              | OutlinedTextFieldProps
              | StandardTextFieldProps,
              'variant'
            >,
        ) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
