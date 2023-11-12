import React from 'react';
import { PersonProps } from './Types/Person.types';

// type PersonProps = {
//     person: {
//         firstName: string
//         lastName: string
//     }
// }




const Person = (props: PersonProps) => {
    return (
        <div>
            <h2>{props.person.firstName} {props.person.lastName}</h2>
        </div>
    )
}

export default Person
