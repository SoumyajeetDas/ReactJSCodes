import { Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interface/ITaskDescription';

const TaskDescripton: FC<ITaskDescription> = ({
  description = 'Task Description',
}): ReactElement => {
  return (
    <Stack width="100%" justifyContent="space-between">
      <Typography variant="body1">{description}</Typography>
    </Stack>
  );
};

export default TaskDescripton;
