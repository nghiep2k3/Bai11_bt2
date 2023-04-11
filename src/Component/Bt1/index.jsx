import React, { useState, useEffect  }from 'react'

export default function Bt2() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 5000)

        return () => {
            clearTimeout(timer);
        };
    },[])
    return(
        <div>
            Time: {time.toLocaleTimeString()}
        </div>
    )
}
