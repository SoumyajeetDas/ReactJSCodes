import React, { FC, ReactElement, useState } from 'react';
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
  disabled,
  value = new Date(),
  onChange = (date: Date | null) => console.log(date),
}): ReactElement => {
  const [date, setDate] = useState<Date | null>(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date desktop"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputFormat="MM/DD/YYYY"
        value={date}
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
