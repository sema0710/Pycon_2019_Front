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
            count : 0,
            key : 0,
            solo:false,
            flex:false, 
        }
        let cors = {
            "Access-Control-Allow-Origin" : "*",
        }
        var list = [];
        var i;
        axios({
            url : "http://127.0.0.1:5000/user/history",
            method:"get",
            params:{
                summoner:localStorage.summoner,
            },
            headers:cors,
        }).then((e)=>{
            let user;
            user = e.data;
            return user;
        }).then((user)=>{

            for(i in user){
                if(user[i].queue === "5v5 Blind Pick games"){
                    user[i].queue = "일반";
                }
                
                else if(user[i].queue === "Co-op vs. AI Intermediate Bot games" || user[i].queue === "Co-op vs. AI Intro Bot games"){
                    user[i].queue = "AI";
                }
                else if(user[i].queue === "5v5 Ranked Solo games"){
                    user[i].queue = "솔랭"
                }
                else{
                    user[i].queue = "자랭"
                }
                
                if(user[i].win){
                    user[i].win = "승리";
                }
                else{
                    user[i].win = "패배";
                }
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");

                list.push(<Recode key={this.state.key} test={user[i]}/>)
                this.setState({
                    key : this.state.key+1,
                })
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

componentDidMount() {
    // 스크롤링 이벤트 추가
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    let i;
    let list = this.state.list;
    if (scrollHeight - innerHeight - scrollTop < 50) {
        this.componentWillUnmount()
        this.setState({
            count : this.state.count+1,
        })
        axios({
            url : "http://127.0.0.1:5000/user/history",
            method:"get",
            params:{
                summoner:localStorage.summoner,
                page:this.state.count,
            }
        }).then((e)=>{
            let user;
            user = e.data;
            return user;
        })
        .then((user)=>{
            for(i in user){
                if(user[i].queue === "5v5 Blind Pick games"){
                    user[i].queue = "일반";
                }
                
                else if(user[i].queue === "Co-op vs. AI Intermediate Bot games" || user[i].queue === "Co-op vs. AI Intro Bot games"){
                    user[i].queue = "AI";
                }
                else if(user[i].queue === "5v5 Ranked Solo games"){
                    user[i].queue = "솔랭"
                }
                else{
                    user[i].queue = "자랭"
                }
                
                if(user[i].win){
                    user[i].win = "승리";
                }
                else{
                    user[i].win = "패배";
                }
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");
                user[i].items.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqXQcnjmEi1RrQz0mOKSzk2oCKjqSlZUZkIUUfaeVOoSJFYw");

                list.push(<Recode key={this.state.key} test={user[i]}/>)
                this.setState({
                    key : this.state.key+1,
                })
            }
        })
        .then(()=>{
            this.setState({
                list:list,
            })
        })
        .then(()=>{
            this.componentDidMount();
        })
    }
  };

  render(){
      let RenderList = [];
      if(this.state.solo){
          for(let i in this.state.list){
              if(this.state.list[i].props.test.queue === "솔랭"){
                  RenderList.push(this.state.list[i]);
                  console.log(this.state.list[i].props.test.queue)
            }
          }
            if(RenderList.length != 0){
            return (
                <div>
                    <div class="item">
                        <div className="realContent">
                            <div class="realHeader">
                                <ul class="realHeaderUl">
                                    <li onClick={
                                          ()=>{
                                                this.setState({
                                                    solo:false,
                                                    flex:false,
                                                })
                                          }
                                      }>전체</li>
                                    <li onClick={
                                        ()=>{
                                            this.setState({
                                                solo:true,
                                                flex:false,
                                            })
                                        }
                                    }>솔로랭크</li>
                                    <li onClick={
                                        ()=>{
                                            this.setState({
                                                flex : true,
                                                solo:false,
                                            })
                                        }
                                    }>자유랭크</li>
                                </ul>
                                <div class="realHeaderSearch">
                                    <div class="inputBox">
                                        <input type="text" placeholder="챔피언 검색"/>
                                    </div>
                                    <div class="searchImage">
                                        <i class="search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="RecodeDiv">{
                        RenderList
                    }</div>
                </div>
                )
            }
            else{
                return(
                    <div>
                    <div class="item">
                        <div className="realContent">
                            <div class="realHeader">
                                <ul class="realHeaderUl">
                                    <li onClick={
                                            ()=>{
                                                    this.setState({
                                                        solo:false,
                                                        flex:false,
                                                    })
                                            }
                                        }>전체</li>
                                    <li onClick={
                                        ()=>{
                                            this.setState({
                                                solo:true,
                                                flex:false,
                                            })
                                        }
                                    }>솔로랭크</li>
                                    <li onClick={
                                        ()=>{
                                            this.setState({
                                                flex : true,
                                                solo:false,
                                            })
                                        }
                                    }>자유랭크</li>
                                </ul>
                                <div class="realHeaderSearch">
                                    <div class="inputBox">
                                        <input type="text" placeholder="챔피언 검색"/>
                                    </div>
                                    <div class="searchImage">
                                        <i class="search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div>404 not found</div>
                  </div>
                )
            }
        }

        else if(this.state.flex){
            for(let i in this.state.list){
                if(this.state.list[i].props.test.queue === "자랭"){
                    RenderList.push(this.state.list[i]);
              }
            }
            if(RenderList.length != 0){
              return (
                  <div>
                      <div class="item">
                          <div className="realContent">
                              <div class="realHeader">
                                  <ul class="realHeaderUl">
                                      <li onClick={
                                          ()=>{
                                                this.setState({
                                                    solo:false,
                                                    flex:false,
                                                })
                                          }
                                      }>전체</li>
                                      <li onClick={
                                          ()=>{
                                              this.setState({
                                                  solo:true,
                                                  flex:false,
                                              })
                                          }
                                      }>솔로랭크</li>
                                      <li onClick={
                                          ()=>{
                                              this.setState({
                                                  flex : true,
                                                  solo:false,
                                              })
                                          }
                                      }>자유랭크</li>
                                  </ul>
                                  <div class="realHeaderSearch">
                                      <div class="inputBox">
                                          <input type="text" placeholder="챔피언 검색"/>
                                      </div>
                                      <div class="searchImage">
                                          <i class="search"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="RecodeDiv">{
                          RenderList
                      }</div>
                  </div>
                  )
              }
              else{
                  return(
                    <div>
                        <div class="item">
                            <div className="realContent">
                                <div class="realHeader">
                                    <ul class="realHeaderUl">
                                        <li onClick={
                                                ()=>{
                                                    this.setState({
                                                        solo:false,
                                                        flex:false,
                                                    })
                                                }
                                            }>전체</li>
                                        <li onClick={
                                            ()=>{
                                                this.setState({
                                                    solo:true,
                                                    flex:false,
                                                })
                                            }
                                        }>솔로랭크</li>
                                        <li onClick={
                                            ()=>{
                                                this.setState({
                                                    solo: false,
                                                    flex : true,
                                                })
                                            }
                                        }>자유랭크</li>
                                    </ul>
                                    <div class="realHeaderSearch">
                                        <div class="inputBox">
                                            <input type="text" placeholder="챔피언 검색"/>
                                        </div>
                                        <div class="searchImage">
                                            <i class="search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      <div>404 not found</div>
                      </div>
                  )
              }
        }
    
        else{
            return (
            <div>
                <div class="item">
                    <div className="realContent">
                        <div class="realHeader">
                            <ul class="realHeaderUl">
                                <li onClick={
                                          ()=>{
                                                this.setState({
                                                    solo:false,
                                                    flex:false,
                                                })
                                          }
                                      }>전체</li>
                                <li onClick={
                                    ()=>{
                                        this.setState({
                                            solo:true,
                                            flex:false,
                                        })
                                    }
                                }>솔로랭크</li>
                                <li onClick={
                                    ()=>{
                                        this.setState({
                                            flex : true,
                                            solo:false,
                                        })
                                    }
                                }>자유랭크</li>
                            </ul>
                            <div class="realHeaderSearch">
                                <div class="inputBox">
                                    <input type="text" placeholder="챔피언 검색"/>
                                </div>
                                <div class="searchImage">
                                    <i class="search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="RecodeDiv">{
                    this.state.list
                }</div>
            </div>
            )
        }
    }
}

export default ReturnRecode;