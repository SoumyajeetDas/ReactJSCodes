import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';

const TaskCounter: FC<ITaskCounter> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  status = Status.COMPLETED,
  count = 0,
}): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${emitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="white" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography color="white" fontWeight="bold" fontSize="20px" variant="h5">
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

export default TaskCounter;
