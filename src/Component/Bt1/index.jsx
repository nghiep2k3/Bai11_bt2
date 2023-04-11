import React, { useState, useEffect  }from 'react'

export default function Bt2() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 100)

        return () => {
            clearTimeout(timer);
        };
    },[])
    return(
        <div>
            The current time is: {time.toLocaleTimeString()}
        </div>
    )
}
