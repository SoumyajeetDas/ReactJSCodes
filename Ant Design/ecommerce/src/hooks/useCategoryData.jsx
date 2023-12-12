import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const fetchData = ({ queryKey }) => {
    return axios.get(`https://dummyjson.com/products/category/${queryKey[1]}`);
}

const useCategoryData = (categoryName) => {

    return useQuery({ queryKey: ["productCategories", categoryName], queryFn: fetchData, refetchOnWindowFocus: false, staleTime: 1800000 });
}

export default useCategoryData;