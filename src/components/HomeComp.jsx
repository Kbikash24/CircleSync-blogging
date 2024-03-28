import React from 'react'
import PostUpdate from './Common/Postupdate/PostUpdate'



function HomeComp({currentUser}) {
  return (
    <div className=''><PostUpdate currentUser={currentUser}/>
    </div>
  )
}

export default HomeComp