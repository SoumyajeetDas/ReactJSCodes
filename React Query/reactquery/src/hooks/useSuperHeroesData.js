import { useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import axios from 'axios';


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superHeroes');
}

const addSuperHero = (hero)=>{
    return axios.post('http://localhost:4000/superHeroes', hero)
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes,

        // Disabling the fetching the api on mount using enabled
        // As soon as you do this the data returned will be undefined so need to handle that properly.
        // enabled: false,
        onSuccess,
        onError,
        // Data Transformation
        // select: (data) => {

        //     try {

        //         const superHeroesName = data?.data.map(ele => ele.name);
        //         console.log(superHeroesName)

        //         return superHeroesName
        //     }

        //     catch {
        //         return []
        //     }
        // }
    });
}

export const useAddSuperHeroData = ()=>{

    const queryClient = useQueryClient();
    return useMutation(addSuperHero,{
        onSuccess:(data)=>{

            /** Refetching a query on invalidating the query **/
            // Does not work when enabled:true for that particular query
            // queryClient.invalidateQueries('super-heroes')

            queryClient.setQueriesData('super-heroes', (oldQuerydata)=>{

                return {
                    ...oldQuerydata,
                    data:[...oldQuerydata.data, data.data]
                }

            })
        }
    })
}