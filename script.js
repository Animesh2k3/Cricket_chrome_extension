async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=4768bbcc-1098-4c62-acfc-5c4f721fbc15&offset=0")
    .then(data=>data.json())
    .then(data =>{
        if(data.status!="success")return;

        const matchesList=data.data;

        if(!matchesList) return [];

        const relevantdata=matchesList.filter(match =>match.series_id=="c4173a45-521b-41c7-a1c8-243affd856b0"). map(match => `${match.name},${match.status}`); 

        console.log({relevantdata});

        document.getElementById("matches").innerHTML=relevantdata.map(match=>`<li>${match}</li>`).join('');
        return relevantdata;
          
    })
    .catch(e=> console.log(e));


}
getMatchData();

