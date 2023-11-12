import React from 'react'

// type personListProps = {

//     personList: {
//         firstName: string,
//         lastName: string
//     }[]
// }

interface personListProps {

    personList: {
        firstName: string,
        lastName: string
    }[]
}


const PersonList = (props: personListProps) => {
    return (
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {props.personList.map(value => {

                    return (
                        <tr>
                            <td>{value.firstName}</td>
                            <td>{value.lastName}</td>
                        </tr>
                    )

                })}
            </table>
        </div>



    )
}

export default PersonList
