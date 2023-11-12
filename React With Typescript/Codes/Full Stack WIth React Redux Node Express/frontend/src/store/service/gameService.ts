import { Game } from "../../interface/Game";


const getGameData = async () => {
    let data = await fetch("http://localhost:6001/api/v1/gaming", {
        method: 'GET',
    });

    let response = await data.json();

    return response;
}


const postGameData = async (gameData:Game) => {
    let data = await fetch("http://localhost:6001/api/v1/gaming/addGame", {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(gameData)
    });

    let response = await data.json();

    return response;
}


const gameService = {
    getGameData,
    postGameData
}

export default gameService;