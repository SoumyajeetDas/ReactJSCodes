import { Box, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData';

const RQSuperHeroPage = () => {
    const { heroid } = useParams();

    const {isLoading, isError, isFetching, error, data} = useSuperHeroData(heroid);
    console.log(data)
    return (
        <Box>
            <Typography variant='h4'>In RQ Super Hero Page</Typography>
            {(isLoading && isFetching) && <Typography variant = "body1">Loading...</Typography>}
            {isError && <Typography variant = "body1">{error.message}</Typography>}
            {(!isError && data) && <Typography variant = "body1">{data.data.name} --- {data.data.alterEgo}</Typography>}
        </Box>
    )
}

export default RQSuperHeroPage
