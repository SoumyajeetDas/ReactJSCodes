import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchSuperHero = ({queryKey})=>{
    const heroId = queryKey[1];

    return axios.get(`http://localhost:4000/superHeroes/${heroId}`)
}

export const useSuperHeroData = (heroId)=>{
    // console.log(heroId);
    return useQuery({queryKey:['super-heroes',heroId],queryFn:fetchSuperHero})
}