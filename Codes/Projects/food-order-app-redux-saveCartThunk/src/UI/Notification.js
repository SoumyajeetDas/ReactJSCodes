import React from 'react'
import { useSelector } from 'react-redux';

export default function Notification() {

    const status = useSelector(state => state.statusReducer);

    return (
        <div className="container-fluid p-2">
            <div className="row">
                <div className="col-11 m-auto">
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", color: '#7B241C' }}>
                        <h3><b>{status.notification.title}</b></h3>
                        <b>{status.notification.message}</b>
                    </div>
                </div>
            </div>

        </div>
    )
}
