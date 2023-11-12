// When you create a slice we need to have a interface for the state.
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../interface/Game";
import gameService from "./service/gameService";


interface GameState {
    games: Game[] | null,
    loading: Boolean,
    singleGame: Game | null,
    error:string | null
}



const initialGameState: GameState = {
    games: [],
    singleGame: null,
    loading: false,
    error:null
}


// createAsyncThunk<Game[]> is basically telling nothing will be passed into this reducer as paramter but will return data of Game[] type
export const getGame = createAsyncThunk<Game[]>('game/getGameData', async (_, thunkAPI) => {

    try {
        let response = await gameService.getGameData();

        if (response.status === "200 OK") return thunkAPI.fulfillWithValue(response.data.games);

        else if (response.status === "500 Internal Server Error") return thunkAPI.rejectWithValue(response.error)

        else return thunkAPI.rejectWithValue(response.message)
    }

    catch (err) {
        return thunkAPI.rejectWithValue(err)
    }

});


// createAsyncThunk<Game[],Game> is basically it is expecting a Gameobject to be passed as paramter and Game[] will be returned back.
// Keep in mind the Game[] will be returned back when the condition will be fulfilled. When the condition will not be fulfilled it's 
// return type will be AsyncThunkConfig 
export const addGame = createAsyncThunk<Game[],Game>('game/addGame', async (gameData, thunkAPI) => {
    try {
        let response = await gameService.postGameData(gameData);

        if (response.status === "201 Created") return thunkAPI.fulfillWithValue(response.data.game);

        else if (response.status === "500 Internal Server Error") return thunkAPI.rejectWithValue(response.error);

        else return thunkAPI.rejectWithValue(response.message)
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})



const gameSlice = createSlice({
    name: "game",
    initialState: initialGameState,
    reducers: {
        setGames: (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getGame.pending, (state) => {
            state.loading = true;
            state.error = null
        });

        builder.addCase(getGame.fulfilled, (state, action) => {
            state.games = action.payload;
            state.loading = false;
            state.error = null;
        })


        builder.addCase(getGame.rejected, (state, action) => {
            state.loading = false;
            state.error = <string>action.payload
        })


        builder.addCase(addGame.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(addGame.fulfilled, (state, action)=>{
            state.loading = false;
        })

        builder.addCase(addGame.rejected, (state, action)=>{
            state.loading = false;
            state.error = <string>action.payload
        })
    },
});


export default gameSlice;