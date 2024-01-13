import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
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
