import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Game } from '../../interface/Game';
import { addGame } from '../../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';


type GameValidity = {
    name: boolean,
    address: boolean,
    numberOfPeople: boolean,
    date: boolean,
    time: boolean,
    fieldNumber: boolean
}

const isEmpty = (value: string | number | null | Date | undefined) => {

    // console.log(value, typeof value);
    if (typeof value === 'string') return value.trim() === '';

    else if (typeof value === 'number') {
        if (value >= 0) return false;

        else return true;
    }
    else
        return true;

}


const AddGamePage = () => {

    const dispatch = useAppDispatch();

    const { loading } = useAppSelector(state => state.gamesReducer);



    const [gameData, setGameData] = useState<Game>({
        name: '',
        address: '',
        numberOfPeople: null,
        date: null,
        time: '',
        fieldNumber: null
    });

    const [gameDataValidity, setgameDataValidity] = useState<GameValidity>({
        name: true,
        address: true,
        numberOfPeople: true,
        date: true,
        time: true,
        fieldNumber: true

    });


    const handleGameData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setGameData((prevState) => {

            return {
                ...prevState,

                [e.target.id]: e.target.value
            }
        })
    }


    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        let isNameValid = !isEmpty(gameData.name);
        let isAddressValid = !isEmpty(gameData.address);
        let isNumberOfPeopleValid = !isEmpty(gameData.numberOfPeople ? gameData.numberOfPeople * 1 : gameData.numberOfPeople);
        let isDateValid = !isEmpty(gameData.date);
        let isTimeValid = !isEmpty(gameData.time);
        let isFieldNumberValid = !isEmpty(gameData.fieldNumber ? gameData.fieldNumber * 1 : gameData.fieldNumber);


        setgameDataValidity({
            name: isNameValid,
            address: isAddressValid,
            numberOfPeople: isNumberOfPeopleValid,
            date: isDateValid,
            time: isTimeValid,
            fieldNumber: isFieldNumberValid
        });


        const isFormValid = isNameValid && isAddressValid && isNumberOfPeopleValid && isDateValid && isTimeValid && isFieldNumberValid;


        if (!isFormValid) return;

        let dated = gameData.date as string
        gameData.date = new Date(dated);


        dispatch(addGame(gameData));


    }


    // useEffect(() => {
    //     if (error) alert(error);
    // }, [error])



    return (
        <Container fixed sx={{ mt: 10 }}>

            {loading ? <h3>Loading...</h3> :
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                error={!gameDataValidity.name}
                                fullWidth
                                id="name"
                                label="Name"
                                variant="outlined"
                                value={gameData.name}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!gameDataValidity.address}
                                fullWidth
                                id="address"
                                label="Address"
                                variant="outlined"
                                value={gameData.address}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!gameDataValidity.numberOfPeople}
                                fullWidth
                                type="number"
                                id="numberOfPeople"
                                label="Number of People"
                                variant="outlined"
                                value={gameData.numberOfPeople || ''}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                type={'date'}
                                error={!gameDataValidity.date}
                                fullWidth
                                id="date"
                                label="Date"
                                variant="outlined"
                                value={gameData.date || ''}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!gameDataValidity.time}
                                fullWidth
                                id="time"
                                label="Time"
                                variant="outlined"
                                value={gameData.time}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!gameDataValidity.fieldNumber}
                                fullWidth
                                type="number"
                                id="fieldNumber"
                                label="Field Number"
                                variant="outlined"
                                value={gameData.fieldNumber || ''}
                                onChange={(e) => handleGameData(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' fullWidth variant="contained">Add</Button>
                        </Grid>

                    </Grid>

                </form>
            }


        </Container >
    )
}

export default AddGamePage
