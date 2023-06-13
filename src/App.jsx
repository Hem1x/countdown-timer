import React, { useState } from 'react'
import TimeIndicator from './component/TimeIndicator'

const App = () => {
    const [isActive, setIsActive] = useState(false)

    const [watchData, setWatchData] = useState([
        {id: 1, type: 'DAYS', count: '23'},
        {id: 2, type: 'HOURS', count: '01'},
        {id: 3, type: 'MINUTES', count: '35'},
        {id: 4, type: 'SECONDS', count: '20'},
    ])

    return (
        <div className="app">
            <div className="container">
                <div className="timer__block">
                    <div className="timer__text">FUTURE IS COMING</div>
                    <div className="timer__watch">
                        {watchData.map(data => (
                            <>
                                <TimeIndicator name={data.type} count={data.count}/>
                                <div className='separator'></div>
                            </>
                        ))}
                    </div>
                    <form className={`timer__form form ${isActive ? 'form--active' : ''}`}
                        onFocus={() => setIsActive(true)} 
                        onBlur={() => setIsActive(false)}
                    >
                        <label className='form__label'>
                            <input className='form__input' type="text" placeholder='Your mail address'/>
                            <button className='form_button button'>SUBMIT</button>
                        </label>
                    </form>
                    <p className='timer__prescription'>*To get latest update about our product, please sign up to our newsletter</p>
                </div>
            </div>
        </div>
    )
}

export default App