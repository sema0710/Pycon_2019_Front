import React from 'react';
import { Route } from 'react-router-dom';
import { user , searchSummoner } from './index'

class Router extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={searchSummoner}/>
                <Route path="/user" component={user}/>
            </div>
        )
    }
}

export default Router