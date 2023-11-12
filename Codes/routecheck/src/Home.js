import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="text-center">Home Section</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus voluptate quae recusandae nihil porro numquam blanditiis architecto ullam magni itaque distinctio omnis hic dolores, expedita sequi eos obcaecati doloribus quisquam accusamus unde maiores explicabo? Officia, id. Soluta, dolorum iure magni maxime minus sunt temporibus itaque saepe illum sed voluptates!
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <Link to="/about">About Link</Link>
                </div>
            </div>
        </div>
    )
}
