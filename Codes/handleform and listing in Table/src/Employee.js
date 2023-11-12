import React from 'react'

export default function Employee(props) {
    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.age}</td>
            <td>{props.obj.email}</td>
        </tr>
    )
}
