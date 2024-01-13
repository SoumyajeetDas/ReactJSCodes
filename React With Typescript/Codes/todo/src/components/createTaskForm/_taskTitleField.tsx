import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

const TitleTaskField: FC<ITextField> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  disabled = false,
  onChange = (e) => console.log(e),
}): ReactElement => {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Enter task title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TitleTaskField;
