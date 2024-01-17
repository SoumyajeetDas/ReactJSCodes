import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import TaskTitleField from '../createTaskForm/_taskTitleField';
import TaskDescriptionField from '../createTaskForm/_taskDescriptionField';
import TaskDateField from '../createTaskForm/_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { ITask } from '../task/interface/ITask';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendApiRequest } from '../../hepers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';

// Pick is a built in type.
type FormState = Pick<
  ITask,
  'title' | 'date' | 'description' | 'priority' | 'status'
>;

const CreateTaskForm: FC = (): ReactElement => {
  const [formState, setFormState] = useState<FormState>({
    title: '',
    date: new Date(),
    description: '',
    priority: Priority.LOW,
    status: Status.TODO,
  });

  const [success, setSuccess] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const createTaskMutation = useMutation({
    mutationKey: ['task'],
    mutationFn: (data: ICreateTask) =>
      sendApiRequest<ITask>('http://localhost:3200/tasks', 'POST', data),

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['task'] }),
  });

  const createTaskHandler = () => {
    if (!formState.title || !formState.date || !formState.description) {
      return;
    }

    const task: ICreateTask = {
      title: formState.title as string,
      description: formState.description as string,
      priority: formState.priority as Priority,
      status: formState.status as Status,
      date: formState.date.toString() as string,
    };

    createTaskMutation.mutate(task);
  };

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setSuccess(true);
    }

    const timeout = setTimeout(() => {
      setSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [createTaskMutation.isSuccess]);
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
        {success && (
          <Alert>
            <AlertTitle>Success</AlertTitle>
            The Task hase been created successfully
          </Alert>
        )}

        <Typography component="h2" variant="h6" color="text.primary">
          Create Task
        </Typography>
        <TaskTitleField
          disabled={createTaskMutation.isPending || createTaskMutation.isPaused}
          onChange={(e) =>
            setFormState((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <TaskDescriptionField
          disabled={createTaskMutation.isPending || createTaskMutation.isPaused}
          onChange={(e) =>
            setFormState((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
        />
        <TaskDateField
          disabled={createTaskMutation.isPending || createTaskMutation.isPaused}
          value={formState.date}
          onChange={(date) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setFormState((prev) => {
              return {
                ...prev,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                date: date,
              };
            })
          }
        />
        <Stack spacing={2} direction="row">
          <TaskSelectField
            disabled={
              createTaskMutation.isPending || createTaskMutation.isPaused
            }
            label="Status"
            name="status"
            value={formState.status}
            onChange={(e) =>
              setFormState((prev) => {
                return {
                  ...prev,
                  status: e.target.value as Status,
                };
              })
            }
            items={[
              { value: Status.TODO, label: Status.TODO },
              { value: Status.IN_PROGRESS, label: Status.IN_PROGRESS },
              { value: Status.COMPLETED, label: Status.COMPLETED },
            ]}
          />
          <TaskSelectField
            disabled={
              createTaskMutation.isPending || createTaskMutation.isPaused
            }
            label="Priority"
            name="priority"
            value={formState.priority}
            onChange={(e) =>
              setFormState((prev) => {
                return {
                  ...prev,
                  priority: e.target.value as Priority,
                };
              })
            }
            items={[
              { value: Priority.LOW, label: Priority.LOW },
              { value: Priority.NORMAL, label: Priority.NORMAL },
              { value: Priority.HIGH, label: Priority.HIGH },
            ]}
          />
        </Stack>
        {createTaskMutation.isPending && <LinearProgress />}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
          disabled={
            !formState.title ||
            !formState.date ||
            !formState.description ||
            createTaskMutation.isPending ||
            createTaskMutation.isPaused
          }
        >
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
