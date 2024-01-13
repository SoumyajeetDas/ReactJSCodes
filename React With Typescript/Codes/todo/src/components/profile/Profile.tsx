import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

interface IProfile {
  name: string;
}
const Profile: FC<IProfile> = ({ name }): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: 96,
          height: 96,
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name[0]}
        </Typography>
      </Avatar>
      <Typography variant="h5" color="text.primary">
        Welcome {name}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

export default Profile;
