import React from 'react';
import './Pycon_2019_Front2.css'


class Recode extends React.Component{
    render(){
        return(
            <div className="user">
            <div id="gameItem" className={this.props.test.win}>
                <div className="gameInfomation">
                    <p id="gameType">{this.props.test.queue}</p>
                    <p id="gameDate"></p>
                    <p id="gameResult">{this.props.test.win}</p>
                    <p id="gameLength">{this.props.test.gameDuration}</p>
                </div>

                <div id="gameUserInfomation">
                    <div id="flexDiv">
                        <img src={this.props.test.myChampion.championImg} id="championImage"/>
                        <div id="spellDiv">
                            <img src={this.props.test.spell[0]} className="spell"/>
                            <img src={this.props.test.spell[1]} className="spell"/>
                        </div>
                        <div id="runesDiv">
                                <img src={this.props.test.rune[0]} className="runes"/>
                                <img src={this.props.test.rune[1]} className="runes"/>
                        </div>
                    </div>
                    <p id="championName"></p>
                </div>

                <div id="KDADiv">
                    <div>
                        <div id="KDA">
                            <p>
                                <span id="Kill">{this.props.test.kills}</span>
                                <span>/</span>
                                <span id="Death">{this.props.test.deaths}</span>
                                <span>/</span>
                                <span id="Assist">{this.props.test.assists}</span>
                            </p>
                        </div>
                        <div id="RatingDiv">
                            <p>
                                <span id="Rating">{this.props.test.grade}</span>
                                <span>(평점)</span>
                            </p>
                        </div>
                        <div id="MultiKill">
                            <p>{this.props.test.multiKill}</p>
                        </div>
                    </div>
                </div>

                <div id="championInfomation">
                    <span id="championLevel">{this.props.test.level}</span><span>레벨</span><br/>
                    <span id="championCS">{this.props.test.totalMinionsKilled}</span><span>CS</span><br/>
                    <span>킬관여율<br/>{this.props.test.killInvolvementRate}</span><span id="championKillContribute"></span>
                </div>

                <div id="championItems">
                    <div id="championItemsFirstLine">
                        <img src={this.props.test.items[0]} className="championItemImg"/>
                        <img src={this.props.test.items[1]} className="championItemImg"/>
                        <img src={this.props.test.items[2]} className="championItemImg"/>
                        <img src={this.props.test.items[3]} className="championItemImg"/>
                    </div>
                    <div id="championItemsSecondLine">
                        <img src={this.props.test.items[4]} className="championItemImg"/>
                        <img src={this.props.test.items[5]} className="championItemImg"/>
                        <img src={this.props.test.items[6]} className="championItemImg"/>
                        <img src={this.props.test.items[7]} className="championItemImg"/>
                    </div>
                </div>

                <div id="userTeamChampion">
                    <img src={this.props.test.blueTeam[0][1]} className="TeamChampion"/><span className="TeamuserName">{this.props.test.blueTeam[0][0]}</span><br/>
                    <img src={this.props.test.blueTeam[1][1]} className="TeamChampion"/><span className="TeamuserName">{this.props.test.blueTeam[1][0]}</span><br/>
                    <img src={this.props.test.blueTeam[2][1]} className="TeamChampion"/><span className="TeamuserName">{this.props.test.blueTeam[2][0]}</span><br/>
                    <img src={this.props.test.blueTeam[3][1]} className="TeamChampion"/><span className="TeamuserName">{this.props.test.blueTeam[3][0]}</span><br/>
                    <img src={this.props.test.blueTeam[4][1]} className="TeamChampion"/><span className="TeamuserName">{this.props.test.blueTeam[4][0]}</span><br/>
                </div>

                <div id="EnemyTeamChampion">
                    <img src={this.props.test.redTeam[0][1]} className="EnemyChampion"/><span className="EnemyuserName">{this.props.test.redTeam[0][0]}</span><br/>
                    <img src={this.props.test.redTeam[1][1]} className="EnemyChampion"/><span className="EnemyuserName">{this.props.test.redTeam[1][0]}</span><br/>
                    <img src={this.props.test.redTeam[2][1]} className="EnemyChampion"/><span className="EnemyuserName">{this.props.test.redTeam[2][0]}</span><br/>
                    <img src={this.props.test.redTeam[3][1]} className="EnemyChampion"/><span className="EnemyuserName">{this.props.test.redTeam[3][0]}</span><br/>
                    <img src={this.props.test.redTeam[4][1]} className="EnemyChampion"/><span className="EnemyuserName">{this.props.test.redTeam[4][0]}</span><br/>
                </div>
        </div>
        </div>
        )
    }
}
export default Recode;