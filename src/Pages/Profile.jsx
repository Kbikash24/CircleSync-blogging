import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

const Profile = ({currentUser}) => {
  return (
    <div><ProfileComponent currentUser={currentUser}/></div>
  )
}

export default Profile