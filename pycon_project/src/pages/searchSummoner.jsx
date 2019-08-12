import React from 'react';
import Img from './imgs/wave1.png'
import './searchSummoner.css'
import { Link } from 'react-router-dom';

class searchSummoner extends React.Component{
    clickButton(){
        let value = document.getElementById("summonerSearchInput").value
        console.log(value);
        localStorage.summoner = value;
    }
    render(){
        return(
            <div>
                <img src={Img} id="backgroundImg" alt=""/>
                <div id="mainDiv">
                    <div id="summonerSearchDiv">
                        <input type="text" id="summonerSearchInput" placeholder="search..."/>
                        <Link to="/user">
                            <img src="https://svgsilh.com/svg/31179.svg" id="summonerSearchButton" onClick={this.clickButton}/>
                        </Link> 
                    </div>
                </div>
            </div>
        )
    }
}

export default searchSummoner