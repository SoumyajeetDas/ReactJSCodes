/**************************Action Creators**************************/

// Action Creators are functions which will return actions / ation objects
// Action / Action Objects are objects which look like --> {type:"", payload:""}

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