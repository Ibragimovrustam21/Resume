import React from 'react'
import '../css/Profile.css'
import '../css/UserInfo.css'
import Tooltip from '@material-ui/core/Tooltip'
import { Title } from './Title'
import { Skills } from './Skills'
import img from '../photo/photo_2021-10-18_06-26-59.jpg'
import { Experience } from './Experience'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import SchoolIcon from '@material-ui/icons/School'

export const Profile = () => (
  <div className='profile'>
    {/* Start */}
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
      <Skills value='100' title='HTML5' />
      <Skills value='90' title='CSS3 & SASS' />
      <Skills value='90' title='Bootstrap' />
      <Skills value='80' title='Material UI' />
      <Skills value='90' title='Adaptive lay.' />
      <Skills value='65' title='Java script' />
      <Skills value='65' title='Jquery' />
      <Skills value='65' title='React (Redux)' />
      <Skills value='40' title='Next js' />
      <Skills value='70' title='Git' />

    </div>
    {/* Language */}
    <Title title={'LANGUAGE'} />
    <div className='skills'>
      <Skills value='80' title='Russian' />
      <Skills value='40' title='English' />
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

    {/* Social */}
    <Title title={'SOCIAL'} />
    <div className='Link'>
      <Tooltip title="Instagram">
        <div className='messenger'>
          <a href='https://www.instagram.com/ibrag1movrustam/'>
            <img alt='' src='https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png' />
          </a>
        </div>
      </Tooltip>
      <Tooltip title='Telegram'>
        <div className='messenger'>
          <a href='http://t.me/Ibrag1movrustam'>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/480px-Telegram_Messenger.png' />
          </a>
        </div>
      </Tooltip>
      <Tooltip title='Github'>
        <div className='messenger'>
          <a href="https://github.com/Ibragimovrustam21/Portfolio/tree/'portfolio'">
            <img alt='' src='data:image/png;base64,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' />
          </a>
        </div>
      </Tooltip>
    </div>
    {/* End */}
  </div>
)
