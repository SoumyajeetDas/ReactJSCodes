// All the methods tells what to do and passes the data from the view that needs to be gett updated on Redux Store
// based on the type.

export const incCartNumber = (data)=>{
    return{
        type:"ADD_TO_CART",
        payload:data
    }
}

export const decCartNumber = ()=>{
    return{
        type:"REMOVE_FROM_CART",
        
    }
}