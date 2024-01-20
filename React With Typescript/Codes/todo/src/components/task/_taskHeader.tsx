import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interface/ITaskHeader';
import format from 'date-fns/format';

const TaskHeader: FC<ITaskHeader> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  title,
  date,
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date ?? new Date(), 'PPP')} />
      </Box>
    </Box>
  );
};

export default TaskHeader;
