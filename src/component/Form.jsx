import React, {useState} from 'react'

const Form = ({subscribe}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <form className={`timer__form form ${isActive ? 'form--active' : ''}`}
            onFocus={() => setIsActive(true)} 
            onBlur={() => setIsActive(false)}
            onSubmit={(e) => subscribe(e)}
        >
            <label className='form__label'>
                <input className='form__input' type="text" placeholder='Your mail address'/>
                <button className='form_button button' type='submit'>SUBMIT</button>
            </label>
        </form>
    )
}

export default Form