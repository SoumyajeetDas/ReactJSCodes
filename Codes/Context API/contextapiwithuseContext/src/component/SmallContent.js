import React, { useContext } from 'react'
import { CommonContext } from '../CommonContext'

const SmallContent = () => {

    const context = useContext(CommonContext);
    return (

        <div style={{ backgroundColor: 'white', display: 'inline', height: '50%', marginTop: '10px', padding: "0 5px", borderRadius: '10px' }}>
            <h4 onClick={() => context.Alerting("Hello Bro!!!")}>{context.state.data1} {context.state.data2}</h4>
        </div>
    )
}

export default SmallContent