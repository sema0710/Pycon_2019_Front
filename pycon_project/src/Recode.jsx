import React from 'react';
import './Pycon_2019_Front2.css'


class Recode extends React.Component{
    render(){
        return(
            <div>
            <div id="gameItem">
                <div className="gameInfomation">
                    <p id="gameType">{this.props.key}</p>
                    <p id="gameDate"></p>
                    <div id="bar"></div>
                    <p id="gameResult"></p>
                    <p id="gameLength"></p>
                </div>

                <div id="gameUserInfomation">
                    <div id="flexDiv">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" id="championImage"/>
                        <div id="spellDiv">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="spell"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="spell"/>
                        </div>
                        <div id="runesDiv">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="runes"/>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="runes"/>
                        </div>
                    </div>
                    <p id="championName"></p>
                </div>

                <div id="KDADiv">
                    <div>
                        <div id="KDA">
                            <p>
                                <span id="Kill"></span>
                                <span>/</span>
                                <span id="Death"></span>
                                <span>/</span>
                                <span id="Assist"></span>
                            </p>
                        </div>
                        <div id="RatingDiv">
                            <p>
                                <span id="Rating"></span>
                                <span>(평점)</span>
                            </p>
                        </div>
                        {/* <!-- <div id="MultiKill">
                            <p></p>
                        </div> --> */}
                    </div>
                </div>

                <div id="championInfomation">
                    <span id="championLevel"></span><span>레벨</span><br/>
                    <span id="championCS"></span><span>CS</span><br/>
                    <span>킬관여율 : </span><span id="championKillContribute"></span>
                </div>

                <div id="championItems">
                    <div id="championItemsFirstLine">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                    </div>
                    <div id="championItemsSecondLine">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="championItemImg"/>
                    </div>
                </div>

                <div id="userTeamChampion">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="TeamChampion"/><span className="TeamuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="TeamChampion"/><span className="TeamuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="TeamChampion"/><span className="TeamuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="TeamChampion"/><span className="TeamuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="TeamChampion"/><span className="TeamuserName">몽디로 맞아봐</span><br/>
                </div>

                <div id="EnemyTeamChampion">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="EnemyChampion"/><span className="EnemyuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="EnemyChampion"/><span className="EnemyuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="EnemyChampion"/><span className="EnemyuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="EnemyChampion"/><span className="EnemyuserName">몽디로 맞아봐</span><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw" className="EnemyChampion"/><span className="EnemyuserName">몽디로 맞아봐</span><br/>
                </div>
        </div>
        </div>
        )
    }
}
export default Recode;