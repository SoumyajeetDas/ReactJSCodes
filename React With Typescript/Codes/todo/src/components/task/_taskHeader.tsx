import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interface/ITaskHeader';
import format from 'date-fns/format';

const TaskHeader: FC<ITaskHeader> = ({
  title = 'Title',
  date = new Date(),
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

export default TaskHeader;
