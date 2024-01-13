import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = ({
  disabled,
  onChange,
}): ReactElement => {
  return (
    <TextField
      id="description"
      label="Task Description"
      placeholder="Enter task description"
      variant="outlined"
      size="small"
      multiline
      name="description"
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default TaskDescriptionField;
