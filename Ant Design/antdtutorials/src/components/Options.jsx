import { Select } from 'antd'
import React from 'react'

const Options = () => {

    const fruits = ["Mango", "Apple", "Guava", "Strawberry"]
    return (
            <Select style={{width:"100%"}}
                placeholder="Select the fruit"
                options={fruits.map((value)=>{
                    return{
                        key:value,
                        label: value,
                        value
                    }
                })}
            />

    )
}

export default Options
