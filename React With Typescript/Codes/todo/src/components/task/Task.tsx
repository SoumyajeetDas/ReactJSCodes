import { Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './_taskHeader';
import TaskDescripton from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interface/ITask';
import { Priority } from '../createTaskForm/enums/Priority';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = ({
  id,
  title,
  description,
  date,
  priority,
  status,
  onStatusChange,
  onClick,
}): ReactElement => {
  return (
    <Stack
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority as Priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescripton description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
        id={id}
        status={status}
      />
    </Stack>
  );
};

export default Task;
