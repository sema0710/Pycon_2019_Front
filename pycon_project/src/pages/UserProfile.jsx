import React from 'react';
import axios from 'axios';
import './opgg.css'
import wave2 from './imgs/wave2.png'

class UserProfile extends React.Component{
    constructor(props) {
        super(props)
        let userInfo = "";
        let userTear = "";

        this.state = {
            InfoLoading : "no",
            TearLoading : "no",
            champion : "",
            solo:false,
            flex:false,
        }
        let cors = {
            "Access-Control-Allow-Origin" : "*",
        }
        axios({
            url : "http://127.0.0.1:5000/user/rank",
            method : "post",
            data:{
                summoner:localStorage.summoner,
            },
            headers: cors,
            
        })
        .then((e)=>{
            userTear = e.data;
            this.setState({
                TearLoading : userTear,
            });
        });

        axios({
            url : "http://127.0.0.1:5000/user/inform",
            method : "post",
            data:{
                summoner:localStorage.summoner,
            },
            headers: cors,
        })
        .then((e)=>{
            userInfo = e.data;
            if(userInfo.rank_constant === "" && userInfo.rank_percentage === ""){
                userInfo.rank_constant = "no ranking"
                userInfo.rank_percentage = "0"
            }
            this.setState({
                InfoLoading : userInfo,
            })
        })
    }
    render(){
        if(this.state.InfoLoading !== "no" && this.state.TearLoading !== "no"){
            return(
                <div id="HeaderDiv">
                    <img src={wave2}/>
                    <div class="header">
                        <div class="headerInner">
                            <div class="headerPastRank">
                            </div>
                            <div class="headerMain">
                                <div class="face">
                                    <img src={this.state.InfoLoading.profile_img} alt="player_icon" style={{"backgroundImage":this.state.InfoLoading.profile_img_border}}/>
                                    <span class="level">{this.state.InfoLoading.level}</span>
                                </div>
                                <div class="profile">
                                    <div class="name">{this.state.InfoLoading.name}</div>
                                    <div class="ladderRanking">
                                        <a>래더 랭킹 <span>{this.state.InfoLoading.rank_constant}위</span> (상위  {this.state.InfoLoading.rank_percentage}%)</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="sideContent">
                            <div class="soloRank">
                                <div class="medal"><img src={this.state.TearLoading.RANKED_SOLO_5x5.rank_img} alt="soloRank"/>
                            </div>
                            <div class="soloRankWrap">
                                <div class="rankType">솔로랭크</div>
                                <div class="tierRank">{this.state.TearLoading.RANKED_SOLO_5x5.tire} {this.state.TearLoading.RANKED_SOLO_5x5.rank}</div>
                                <div className="SubTierInfo">
                                    <span class="leaguePoints">{this.state.TearLoading.RANKED_SOLO_5x5.lP}LP</span>
                                    /
                                    <span class="winLose">
                                        <span class="subWins">{this.state.TearLoading.RANKED_SOLO_5x5.wins}승</span>
                                        <span class="subLosses">{this.state.TearLoading.RANKED_SOLO_5x5.losses}패</span>
                                        <br/>
                                        <span class="subWinratio">승률{this.state.TearLoading.RANKED_SOLO_5x5.rate}%</span>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div class="freeRank">
                                <img src={this.state.TearLoading.RANKED_FLEX_SR.rank_img} alt="freeRank"/>
                                <div class="freeRankWrap">
                                    <div class="subRankType">자유 5:5 랭크</div>
                                    <div class="subTierRank">{this.state.TearLoading.RANKED_FLEX_SR.tire} {this.state.TearLoading.RANKED_FLEX_SR.rank}</div>
                                    <div className="subTierInfo">
                                        <span class="subleaguePoints">
                                            {this.state.TearLoading.RANKED_FLEX_SR.lP}LP
                                        </span>
                                        /
                                        <span class="subWinLose">
                                            <span class="subWins">{this.state.TearLoading.RANKED_FLEX_SR.wins}승</span>
                                            <span class="subLosses">{this.state.TearLoading.RANKED_FLEX_SR.losses}패</span>
                                            <br/>
                                            <span class="subWinratio">승률 {this.state.TearLoading.RANKED_FLEX_SR.rate}%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        


                    </div>


            )

        }
        else{
            return(
                <div>
                    loading plz wait....
                </div>
            )
        }
    }
}

export default UserProfile
