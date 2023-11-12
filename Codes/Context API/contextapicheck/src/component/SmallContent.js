import React from 'react'
import { CommonContext } from '../CommonContext'

const SmallContent = ()=> {
    return (

        <CommonContext.Consumer>
            {
                (data) => (   // data = { state, Alerting }
                    <div style={{ backgroundColor: 'white', display: 'inline', height: '50%', marginTop: '10px', padding: "0 5px", borderRadius: '10px' }}>
                        <h4 onClick={()=>data.Alerting("Hello Bro!!!")}>{data.state.data1} {data.state.data2}</h4>
                    </div>
                )
            }
        </CommonContext.Consumer>

    )
}

export default SmallContent