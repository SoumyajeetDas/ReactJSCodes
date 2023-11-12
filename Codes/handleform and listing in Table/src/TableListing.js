import React from 'react'
import Employee from './Employee'

export default function TableListing() {

    const employee = [
        { name: 'Soumyajeet', age: 25, email: 'soumya@gmail.com'},
        { name: 'Sounak', age: 26, email: 'sounak@gmail.com' },
        { name: 'Khokha', age: 27, email: 'khoka@gmail.com' }
    ]
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 m-auto">
                <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((emp, i) =>
                    <Employee obj={emp} key={i}/>
                )}
            </tbody>
        </table>
                </div>
            </div>
        </div>
    )
}
