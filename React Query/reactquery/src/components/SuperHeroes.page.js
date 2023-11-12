import { Box, Container, Typography } from '@mui/material'
import { green } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroesPages = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        (
            async () => {
                setIsloading(true)
                let res = await axios.get('http://localhost:4000/superHeroes');
                if (res.statusText === 'OK') {
                    // console.log(res)
                    setData(res.data)
                }
                else {
                    console.log(res.statusText)
                }

                setIsloading(false)

            }
        )()
    }, [])
    return (
        <Container>
            <Box>

                <Typography variant='h4' color={green[400]} sx={{textDecoration:"underline"}}>
                    SuperHeroes Name
                </Typography>
                {isLoading ?
                    <Typography variant='h6' color="secondary">
                        Loading...
                    </Typography>
                    :
                    data.map(ele => <Typography variant='h6' color="secondary">
                        {ele.name}
                    </Typography>)
                }
            </Box>
        </Container>
    )
}

export default SuperHeroesPages
