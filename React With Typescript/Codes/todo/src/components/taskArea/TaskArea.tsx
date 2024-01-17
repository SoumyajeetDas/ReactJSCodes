import { Alert, Box, Grid, LinearProgress } from '@mui/material';
import format from 'date-fns/format';
import React, { FC, ReactElement } from 'react';
import TaskCounter from '../createTaskForm/taskCounter/TaskCounter';
import Task from '../task/Task';
import { useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../../hepers/sendApiRequest';
import { ITaskAPi } from './interfaces/ITaskApi';
import { Priority } from '../createTaskForm/enums/Priority';
import { Status } from '../createTaskForm/enums/Status';

const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ['task'],
    queryFn: async () =>
      sendApiRequest<ITaskAPi[]>('http://localhost:3200/tasks', 'GET'),
    refetchOnWindowFocus: false,
    staleTime: 1800000,
  });

  console.log(data);
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
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          xs={10} //For extra small devices it will occupy 10 columns
          mb={8}
        >
          {error && (
            <Alert severity="error">
              There was an error fetching the tasks
            </Alert>
          )}

          {!error && Array.isArray(data) && data?.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks created yet. Start creating few tasks
            </Alert>
          )}

          {isLoading ? (
            <LinearProgress />
          ) : (
            data?.map((task, index) => (
              <Task
                key={task.status + index}
                id={task.id}
                title={task.title}
                date={new Date(task.date)}
                description={task.description}
                priority={task.priority as Priority}
                status={task.status as Status}
              />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
