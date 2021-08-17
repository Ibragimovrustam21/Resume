import '../css/App.css'
import { Profile } from './Profile'
import { UserInfo } from './UserInfo'

export const App = () => {
  return (
    <div className="container">
      <div className='App_dad'>
        <div className='App'>
          <Profile />
          <UserInfo />
        </div>
      </div>
    </div>
  )
}
