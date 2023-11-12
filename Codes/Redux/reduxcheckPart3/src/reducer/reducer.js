const initialState = {
    counter:0,
    showCounter:true
}

const counterReducer = (state = initialState,action)=>{
    if(action.type==="INCREEMENT"){
        return {
            ...state,
            counter:state.counter+action.payload
        }
    }
    else if(action.type==="DECREEMENT"){

        // Decreement should be till 0
        if(state.counter>0){
            return{
                ...state,
                counter:state.counter-1
            }
        }
        
    }

    else if(action.type==="TOGGLE"){
        return {
            ...state,
            showCounter:!state.showCounter
        }
    }
    return state
}

export default counterReducer;