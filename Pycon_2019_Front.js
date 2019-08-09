axios({
  url : "http://127.0.0.1:5000/user/history",
  method:"post",
  data:{
    summoner:"몽디로 맞아봐",
  }
}).then((e) =>{
  let user = e.data;
  console.log(user);
  return user;
}).then((user)=>{
  user = user[9];
  if(user.win){
    user.win = "승리";
  }
  else{
    user.win = "패배";
  }

  if(user.queue == "5v5 Blind Pick games"){
    user.queue = "일반";
  }
  else if(user.queue == "Co-op vs. AI Intro Bot games"){
    user.queue = "AI전"
  }
  else{
    user.queue = "랭크"
  }
  let data = {
    gameType : user.queue,
    gameResult : user.win,
    gameLength : user.gameDuration,
    championImage : user.myChampion.championImg,
    championName : user.myChampion.champion,
    spell : user.spell,
    runes : user.rune,
    Kill : user.kills,
    Death : user.deaths,
    Assist : user.assists,
    Rating : user.grade,
    // MultiKill : "트리플 킬",
    championLevel : user.level,
    championCS : [user.totalMinionsKilled,user.MinionsPerMinute],
    championKillContribute : user.killInvolvementRate,
    championItems : user.items,
    userTeamChampion : user.blueTeam,
    EnemyTeamChampion : user.redTeam,
  }
  return data;
}).then((data)=>{

  for(i in data){
    if(i == "MultiKill" || i == "championItems" || i == "userTeamChampion" || i == "userTeamChampion" || i == "EnemyTeamChampion" || i == "spell" || i == "runes" || i == "championImage" || i == "championCS"){
      continue;
    }
    else{
      document.getElementById(i).innerHTML = data[i];
    }
  }
  
  for(i in data.spell){
    document.getElementsByClassName("spell")[i].src = data.spell[i];
    document.getElementsByClassName("runes")[i].src = data.runes[i];
  }
  
  for(i in data.championItems){
    document.getElementsByClassName("championItemImg")[i].src = data.championItems[i];
  }
  
  for(i in data.userTeamChampion){
    document.getElementsByClassName("TeamuserName")[i].innerHTML = data.EnemyTeamChampion[i][0];
    document.getElementsByClassName("EnemyuserName")[i].innerHTML = data.userTeamChampion[i][0];
    document.getElementsByClassName("TeamChampion")[i].src = data.userTeamChampion[i][1];
    document.getElementsByClassName("EnemyChampion")[i].src = data.EnemyTeamChampion[i][1];
  }
  
  document.getElementById("championImage").src = data.championImage;
  // document.querySelector("#MultiKill p").innerText = data.MultiKill;
  document.getElementById("gameResult").innerHTML = data.gameResult;
  document.getElementById("championCS").innerHTML = data.championCS[0] +"("+ data.championCS[1] + ")";
})




