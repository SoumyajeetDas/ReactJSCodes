import { Box, Grid } from '@mui/material';
import format from 'date-fns/format';
import React, { FC, ReactElement } from 'react';
import TaskCounter from '../createTaskForm/taskCounter/TaskCounter';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your tasks on &nbsp;
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10} // For medium devices it wiill occupy 10 columns
          xs={12} //For extra small devices it will occupy 12 columns
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          xs={10} //For extra small devices it will occupy 10 columns
          mb={8}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
