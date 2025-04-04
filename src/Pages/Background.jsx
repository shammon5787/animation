import React, { useEffect, useState } from 'react'
import Animation from '../Components/Animation'
import Hero from '../Components/Hero'

const Background = () => {
    const herodata = [
        { text1: 'BMW', text2: 'This is new BMW' },
        { text1: 'VItz', text2: 'This is new Vits' },
        { text1: 'Pious', text2: 'This is new Pious' },
    ]
    const [playstatus, setplayStatus] = useState(true)
    const [hercount, setherocount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setherocount((prev) => (prev + 1) % herodata.length); // Loop through indexes
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div>
            <Animation playstatus={playstatus} hercount={hercount} />
            <Hero playstatus={playstatus} hercount={hercount} herodata={herodata[hercount]} setherocount={setherocount} setplayStatus={setplayStatus} />
        </div>
    )
}

export default Background