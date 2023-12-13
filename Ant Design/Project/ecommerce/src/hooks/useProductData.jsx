import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const fetchData = async () => {
    return axios.get("https://dummyjson.com/products");
}

const useProductData = () => {

    return useQuery({ queryKey: "products", queryFn: fetchData, refetchOnWindowFocus: false, staleTime: 1800000 });
}

export default useProductData;