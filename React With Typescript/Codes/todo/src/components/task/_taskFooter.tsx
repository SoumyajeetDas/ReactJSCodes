import { Button, FormControlLabel, Stack, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interface/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = ({
  // Keeping default value for both the prop so that TS doesn't throws error even if the value is not passed
  // This step is optional
  id,
  status,
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}): ReactElement => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={<Switch color="warning" onChange={onStatusChange} />}
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Stack>
  );
};

export default TaskFooter;
