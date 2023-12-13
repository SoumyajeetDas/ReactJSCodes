import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const fetchData = async () => {
    return axios.get("https://dummyjson.com/carts/1");
}

const useShowCartData = () => {

    return useQuery({ queryKey: "cartData", queryFn: fetchData, refetchOnWindowFocus: false, staleTime: 1800000 });
}

export default useShowCartData;