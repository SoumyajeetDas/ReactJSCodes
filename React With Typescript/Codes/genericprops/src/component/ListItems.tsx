import React from 'react'

type Props<T> = {
    items: T[]
}
const ListItems = <T extends { name: string, age: number }>(props: Props<T>) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {props.items.map((x) => {
                    return (
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                        </tr>

                    )
                })}
            </table>

        </div>
    )
}

export default ListItems
