import React from 'react';
import axios from 'axios';
import Recode from './Recode';
import './Pycon_2019_Front2.css';

class ReturnRecode extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          loading : "loading",
          list : "",
        }
        let list = [];
        let user;
        let i;
        axios({
            url : "http://127.0.0.1:5000/user/history",
            method:"get",
            params:{
                summoner:"몽디로 맞아봐",
            }
        }).then((e)=>{
            user = e.data;
            console.log(user)
        }).then(()=>{
            console.log(user);
            for(i in user){
                list.push(<Recode key={i} user={i}/>)
            }
        }).then(()=>{
            this.setState({
                loading : "done",
            })
            
            this.setState({
                list : list,
            })
        })
    };
render(){
    return <div>{this.state.list}</div>
}
}

export default ReturnRecode;