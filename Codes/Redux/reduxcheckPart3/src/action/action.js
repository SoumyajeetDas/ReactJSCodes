/***************************Action Creators*******************************************/

// Action Craetors are one which will return action / action objects.
// Action / Action objects are objects which looks like --> {type:"", payload:""}
export const increment = (num) => {
    return {
        type: "INCREEMENT",
        payload: num
    }
}

export const decrement = () => {
    return {
        type: "DECREEMENT"
    }
}

export const toggle = () => {
    return {
        type: "TOGGLE"
    }
}