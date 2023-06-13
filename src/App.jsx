import React, { useState } from 'react'

const App = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="app">
            <div className="container">
                <div className="timer__block">
                    <div className="timer__text">FUTURE IS COMING</div>
                    <div className="timer__watch">WATCH</div>
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