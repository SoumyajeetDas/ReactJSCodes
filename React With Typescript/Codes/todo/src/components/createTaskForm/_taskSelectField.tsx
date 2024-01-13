import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = ({
  disabled = false,
  value = '',
  name = 'selectBox',
  label = 'selectbox',
  items = [{ value: '', label: 'Add Items' }],
  onChange = (e: SelectChangeEvent) => console.log(e),
}): ReactElement => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id`}
        value={value}
        label={label}
        name={name}
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem key={item?.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
