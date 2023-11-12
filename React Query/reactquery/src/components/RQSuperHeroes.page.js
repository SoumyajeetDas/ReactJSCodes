import { Box, Button, Container, FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { green } from '@mui/material/colors';
import { useAddSuperHeroData, useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';




const RQSuperHeroesPages = () => {

    const [formData, setFormData] = useState({
        name: "",
        alterEgo: ""
    });

    const {mutate:addSuperHero, isLoading:loading}  = useAddSuperHeroData();

    const handleChange  = (e)=>{
        setFormData(prev =>{
            return{
                ...prev,
                [e.target.id] : e.target.value
            }
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();

        addSuperHero(formData);
    }
    /** 1st Method **/
    // const {isLoading, data, isError} = useQuery(['super-heroes'], ()=>{

    //     return axios.get('http://localhost:4000/superHeroes');
    // })


    /** 2nd Method **/
    // const {isLoading, data, isError, error} = useQuery(['super-heroes'], fetchSuperHeroes, {staleTime:30000})


    /** 3rd Method **/
    // queryKey: The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your 
    // application.
    // queryFn: A function that returns a promise that: Resolves the data, or Throws an error
    // The stale time will prevent react query from background refetching
    // const { isLoading, data, isError, error } =
    //     useQuery({ queryKey: ['super-heroes'], queryFn: fetchSuperHeroes, staleTime: 30000 });



    // Poling with refetchInterval

    // refetchInterval is by default false
    // const { isLoading, data, isError, error } = 
    // useQuery({ queryKey: ['super-heroes'], queryFn: fetchSuperHeroes, refetchInterval: 2000 }); 


    const onSuccess = (data) => {
        // console.log(data)
    }

    const onError = (error) => {
        // console.log(error)
    }


    // If you are using useQuery on event then initially during the mount the data will be undefined, and need to handle that
    // properly in the code.
    // On event the data will get the required data
    const { isLoading, data, isError, error, refetch, isFetching } = useSuperHeroesData(onSuccess, onError)

    return (


        <Container>
            <Box>
                <Typography variant='h4' color={green[400]} sx={{ textDecoration: "underline" }}>
                    RQ SuperHeroes Name
                </Typography>
                <form onSubmit={handleSubmit}>
                <FormControl variant='standard' fullWidth sx={{margin:"2rem"}}>
                    <FormLabel>
                       <Typography variant='h3'>Add Data</Typography>
                        </FormLabel>
                    <FormGroup row sx={{ justifyContent: "space-around", alignItems: "center" }}>
                        <TextField id="name" label="Name" variant="outlined" sx={{width:"40%"}} onChange={handleChange}/>

                        <TextField id="alterEgo" label="ALter Ego" variant="outlined" sx={{width:"40%"}} onChange={handleChange}/>

                        <Button type="submit" variant='contained'>Send</Button>
                    </FormGroup>
                </FormControl>
                </form>

                {/* Clicking the button to fetch data  */}

                <Box>
                    <Button variant='contained' color='secondary' onClick={refetch}>Click here</Button>
                </Box>


                {/* If you don't give isFetching without clicking button also it will show Loading */}
                {/* loading variable is for the post request */}
                {((isLoading && isFetching) || loading) &&
                    <Typography variant='h6' color="secondary">
                        Loading...
                    </Typography>}


                {/* {isLoading &&
                    <Typography variant='h6' color="secondary">
                        Loading...
                    </Typography>} */}


                {isError && <Typography variant='h6' color="secondary">
                    {error.message}
                </Typography>}

                {/* As the data is undefined on the initial mount so need to handle that properly */}
                {/* {!isError && data ? data.map(ele => <Typography key={ele} variant='h6' color="secondary">
                    {ele}
                </Typography>)
                    :
                    <Typography variant='h6'>
                        {(isFetching) || 'No Data'}
                    </Typography>} */}

                {!isError && data ? data?.data.map(ele => <Typography key={ele.id} variant='h6' color="secondary">
                    <Link to={`/rqsuperhero-page/${ele.id}`}>{ele.name}</Link>

                </Typography>)
                    :
                    <Typography variant='h6'>
                        {(isFetching) || 'No Data'}
                    </Typography>}



            </Box>
        </Container>
    )
}

export default RQSuperHeroesPages
