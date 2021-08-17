import React from 'react';
import '../css/Title.css'

export const Title = ({ title }) => {
  return (
    <div className='title_div' >
      <hr className='hr_left' />
      <h3>{title}</h3>
      <hr className='hr_right' />
    </div>
  )
}
