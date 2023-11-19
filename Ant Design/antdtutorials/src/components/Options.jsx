import { Select } from 'antd'
import React from 'react'

const Options = () => {

    const fruits = ["Mango", "Apple", "Guava", "Strawberry"]
    return (
            <Select style={{width:"100%"}}
                placeholder="Select the fruit"
            >
                {fruits.map((fruit, i) => {
                    return <Select.Option key={fruit} value={fruit}>{fruit}</Select.Option>
                })}
            </Select>
    )
}

export default Options
