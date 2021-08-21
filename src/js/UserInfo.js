import React from 'react'
import '../css/UserInfo.css'
import { Title } from './Title'
import SchoolIcon from '@material-ui/icons/School'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import { Experience } from './Experience'

export const UserInfo = () => (
  <div className='userInfo'>
    {/* Start */}
    {/* About me */}
    <div className='user-Name'>
      <h1>IBRAGIMOV <strong>RUSTAM</strong></h1>
      <h3>FRONTEND DEVELOPER</h3>
    </div>
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
    {/* End */}
  </div>
)

