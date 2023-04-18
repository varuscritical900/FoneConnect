import React from 'react'
import './home.css'
import ProfileSide from '../components/ProfileSide/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <div className="postSide">Posts</div>
        <div className="RightSide">RightSide</div>
    </div>
  )
}

export default Home