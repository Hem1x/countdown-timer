import React from 'react'
import s from './TimeIndicator.module.scss'

const TimeIndicator = ({name, count}) => {
  return (
    <div className={s.indicator}>
        <div className={s.indicator__time}>{count}</div>
        <div className={s.indicator__type}>{name}</div>
    </div>
  )
}

export default TimeIndicator