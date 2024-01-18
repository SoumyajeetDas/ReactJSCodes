import { Button, FormControlLabel, Stack, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interface/ITaskFooter';
import { Status } from '../createTaskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  id,
  status,
  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) =>
    console.log(e, id),
  onClick = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => console.log(e, id),
}): ReactElement => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={(e) => onStatusChange(e, id)}
            defaultChecked={status === Status.IN_PROGRESS}
          />
        }
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Stack>
  );
};

export default TaskFooter;
