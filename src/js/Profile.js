import React from 'react'
import '../css/Profile.css'
import '../css/UserInfo.css'
import Tooltip from '@material-ui/core/Tooltip'
import { Title } from './Title'
import img from '../photo/photo_2021-10-18_06-26-59.jpg'
import { Experience } from './Experience'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import SchoolIcon from '@material-ui/icons/School'

export const Profile = () => (
  <div className='profile'>
    {/* User photo */}
    <div className='user-img-div'>
      <div className='user-img'>
        <img src={img} alt='' />
      </div>
    </div>
    <div className='user-Name-sm user-Name'>
      <h1>Ибрагимов <strong>Рустам</strong></h1>
      <h3>Фронтенд разработчик</h3>
    </div>
    {/* About me */}
    <Title title={'PROFILE'} />
    <div className='about_me_div'>
      <p className='about_me'>
        Hi, my name is Rustam, I am 21 years old, I am a student.
        I chose this direction because of my interest in programming, my goal is to improve my skills when working on large projects.
      </p>
    </div>
    <div className='address'>
      <div className='address-item'>
        <h4>Address:</h4>
        <p>
          Navoiy region Zarafshon city
        </p>
      </div>
      <div className='address-item'>
        <h4>Phone:</h4>
        <p>
          +998 93 434-21-10
        </p>
      </div>
      <div className='address-item'>
        <h4>Email:</h4>
        <Tooltip title='Email'>
          <p>
            <a href='https://mail.ru/ibrag1movrustam'>
              ibrag1movrustam@mail.ru
            </a>
          </p>
        </Tooltip>
      </div>
    </div>
    {/* Skills */}
    <Title title={'SKILLS'} />
    <div className='skills'>
      <div>
        <h4>HTML</h4>
        <h4>CSS / SASS</h4>
        <h4>Bootstrap</h4>
        <h4>Material UI</h4>
        <h4>Ant Design</h4>
      </div>
      <div>
        <h4>Javascript ( ES6+ )</h4>
        <h4>React js ( Redux, Xook )</h4>
        <h4>Next js ( Basic )</h4>
        <h4>Git</h4>
      </div>
    </div>
    {/* Language */}
    <Title title={'LANGUAGE'} />
    <div className='skills'>
      <div>
        <h4>English ( A2+ )</h4>
      </div>
      <div>
        <h4>Russian ( C1 )</h4>
      </div>
    </div>
    {/* sm-display start */}
    <div className='sm-display'>
      {/* Education */}
      <Title title='EDUCATION' />
      <div className='education'>
        <div>
          <LaptopMacIcon />
          <h3>PDP IT Academy</h3>
          <p>2020 y</p>
        </div>
        <div>
          <SchoolIcon />
          <h3>Tashkent Institute of Railway Engineers</h3>
          <p>2019-2023 y</p>
        </div>
      </div>
      {/* Experience */}
      {/* <Title title='EXPERIENCE' /> */}
      <div className='Experience'>
        <Experience />
      </div>
    </div>
    {/* sm-display end */}
  </div>
)
