import React from 'react'
import Year from '../Year/Year'
import './Calendar.scss'

export default function Calendar() {
  return (
    <div className='calendar'>
      <span>Saiba de tudo sobre a turma em que seu filho(a) estuda!</span>
      <div className="days">
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />


      </div>
    </div>
  )
}
