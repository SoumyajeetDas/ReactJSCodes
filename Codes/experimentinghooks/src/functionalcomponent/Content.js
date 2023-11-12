import React, { useState, useEffect} from 'react'

export default function Content() {
    
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let interval = setInterval(() => {
            console.log("hello")
            setTime(new Date());
        }, 1000);

        return () => {
            
            clearInterval(interval);
            console.log("In return of useEffect")
        }
        // eslint-disable-next-line
    }, [])


    return (
        <>

            <h5>{time.toLocaleTimeString()}</h5>
            <img src="CoD-5.jpg" width="500" height="500" alt="Loading..." />
            
        </>
    )
}
