import { Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interface/ITaskDescription';

const TaskDescripton: FC<ITaskDescription> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  description = 'Task Description',
}): ReactElement => {
  return (
    <Stack width="100%" justifyContent="space-between">
      <Typography variant="body1">{description}</Typography>
    </Stack>
  );
};

export default TaskDescripton;
