import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import TaskArea from '../../components/taskArea/TaskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container spacing={2} height="100%">
      <Sidebar />
      <TaskArea />
    </Grid>
  );
};

export default Dashboard;
