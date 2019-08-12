import React from 'react'
import ReturnRecode from './ReturnRecode'
import UserProfile from './UserProfile'

class user extends React.Component{
    render(){
        return(
            <div>
                <UserProfile/>
                <ReturnRecode/>
            </div>
        )
    }
}

export default user