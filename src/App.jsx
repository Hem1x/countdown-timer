import React, { useEffect, useState } from 'react'
import TimeIndicator from './component/TimeIndicator'
import { getTime } from './utils/getTime'
import Form from './component/Form'

// Target date - (01.09.2023 00:00:00)
const TARGET_DATE = new Date(2023, 8, 1, 0, 0, 0)

const App = () => {
    const [isSubscribe, setIsSubscribe] = useState(false)

    const subscribe = (e) => {
        e.preventDefault()
        setIsSubscribe(true)
    }

    const NOW = new Date()
    const left = (TARGET_DATE.getTime() - NOW.getTime())/1000

    const [watchData, setWatchData] = useState(getTime(left))

    useEffect(() => {
        const timerIterval = setInterval(() => {
            const remainingTime = getTime(left)
            setWatchData(remainingTime)
        }, 1000)

        return () => {
            clearInterval(timerIterval)
        }
    }, [watchData])

    return (
        <div className="app">
            <div className="container">
                <div className="timer__block">
                    <div className="timer__text">FUTURE IS COMING</div>
                    <div className="timer__watch">
                        {Object.entries(watchData).map(([key, value]) => (
                            <React.Fragment key={key} >
                                <TimeIndicator name={key.toUpperCase()} count={value}/>
                                <div className='separator'></div>
                            </React.Fragment>
                        ))}
                    </div>
                    {!isSubscribe ? <Form subscribe={subscribe}/> : <div className='subscribed'>Subscribed</div>}

                    <p className='timer__prescription'>*To get latest update about our product, please sign up to our newsletter</p>
                </div>
            </div>
        </div>
    )
}

export default App