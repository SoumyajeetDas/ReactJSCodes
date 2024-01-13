import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskTitleField from '../createTaskForm/_taskTitleField';
import TaskDescriptionField from '../createTaskForm/_taskDescriptionField';
import TaskDateField from '../createTaskForm/_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={8}
    >
      <Stack spacing={2} width="100%">
        <Typography component="h2" variant="h6" color="text.primary">
          Create Task
        </Typography>
        <TaskTitleField disabled />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack spacing={2} direction="row">
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.TODO, label: Status.TODO },
              { value: Status.IN_PROGRESS, label: Status.IN_PROGRESS },
              { value: Status.COMPLETED, label: Status.COMPLETED },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              { value: Priority.LOW, label: Priority.LOW },
              { value: Priority.NORMAL, label: Priority.NORMAL },
              { value: Priority.HIGH, label: Priority.HIGH },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
