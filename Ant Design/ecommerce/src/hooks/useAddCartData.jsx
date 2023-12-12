import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"

const addCartData = (data) => {
    return axios.post("https://dummyjson.com/carts/add", data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}

const useAddCartData = (data) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: "addCart",
        mutationFn: addCartData,
        retry: 3,
        onSuccess: (data) => {
            // If not given there will be no get call or refetching after update and thus cache will not get upated and we will not see 
            // upto date data in the UI
            queryClient.invalidateQueries("addCart");
        },
    });
}

export default useAddCartData;