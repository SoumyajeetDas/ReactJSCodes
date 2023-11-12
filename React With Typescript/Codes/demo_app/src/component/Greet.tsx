import React from 'react'

/********************We can use either Type or interface to provide the structure of props************************************/
type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

// interface GreetProps {
//     name: string
//     messageCount?: number,
//     isLoggedIn: boolean
// }

const Greet = (props: GreetProps) => {

    // This basically tells if the messageCout is not present then simply messageCount will be 0
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLoggedIn ?

                <h4>Hi {props.name}. Welcome to typescript !! You have {messageCount} messages</h4>

                :

                <h4>Welcome {props.name}</h4>
            }

        </div>
    )
}

export default Greet
