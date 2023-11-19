import { Space, Button, Steps } from 'antd'
import React from 'react'
import { useState } from 'react'

const ButtonndSteps = () => {
    const [state, setState] = useState(0);

    const handleClick = ()=>{
        setState(prev =>{
            if(prev===3) return 0;

            else return prev +1;
        })
    }
    return (
        <div>
            <Space direction="vertical" size="large" style={{display:"flex"}}>

                <Button block type='primary' danger onClick={handleClick}>Primary Button</Button>

                <Steps
                    direction="vertical"
                    current={state}
                    items={[
                        {
                            title: 'Finished',
                        },
                        {
                            title: 'In Progress',
                        },
                        {
                            title: 'Waiting',
                        },
                    ]}
                />
            </Space>
        </div>
    )
}

export default ButtonndSteps
