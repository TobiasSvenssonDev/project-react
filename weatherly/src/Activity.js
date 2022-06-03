import React, { useEffect, useState } from 'react'
/*
function getStorage(){
  let storage = JSON.parse(localStorage.getItem("suggested"));
  if (storage == null){
    const emptyStorage = []
    localStorage.setItem("suggested", JSON.stringify(emptyStorage));
    storage = JSON.parse(localStorage.getItem("suggested"));
    return storage;
  } else {
    return storage;
  }
}

function saveLocalStorage(activity){
  const now = new Date();
  const timeStamp = now.getFullYear()+':'+('0' + (now.getMonth() + 1)).slice(-2)+':'+now.getDate()+':'+now.getHours()+':'+now.getMinutes()+':00'
  console.log(now + " Date")
  console.log(timeStamp + " Expiration")
  const usedActivities = getStorage()
  console.log(usedActivities + " KOLLAHÄRDÅFÖRFAAAAN")
  console.log(typeof(usedActivities))
  const activityObject = {
    activity: activity,
    timeStamp: timeStamp
  }
  usedActivities.push(activityObject);
  console.log(usedActivities + " SKITAPP")
  
  localStorage.setItem("suggested", JSON.stringify(usedActivities));
}

const activities = {
      "goodWeather":[{"text":"Spela fotboll", "search": "fotboll"}, {"text": "Bada", "search": "Badplats"}, 
      {"text": "Kasta frisbee", "search": "frisbee"}, {"text": "Spela minigolf", "search": "minigolf"}, 
      {"text": "Vandra", "search": "Vandringsled"}, {"text": "Grilla", "search": "Grillplats"}],
      "badWeather":[{"text": "Spela laserdome", "search": "laserdome"}, {"text": "Kör go-cart", "search": "Gocart"},
      {"text": "Dra och bowla", "search": "bowling"}, {"text": "Spela biljard", "search": "Biljard"}, 
      {"text": "Dra till gymmet", "search": "Gym"}, {"text": "Åk till gallerian", "search": "köpcenter"}, {"text": "spela tv-spel", "search":"Arkad"}, {"text": "spela laserdome", "search": "Laserdome"}]
    }

    let activity = null;
    if (props.activityCode <= 5) {
        activity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity["text"] + "UTOMHUSAKTIVITET");

        saveLocalStorage(activity);

      } else if (props.activityCode >= 6) {
        activity = activities.badWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity + "INOMHUSAKTIVITET");

        saveLocalStorage(activity);
      };

*/
export default function Activity(props) {
    const [usedActivity, setUsedActivity] = useState(null);
    const [activities, setActivity] = useState(JSON.parse(localStorage.getItem("activities")));
    const [randomActivity, setRandomActivity] = useState(null);
    //console.log(activities["goodWeather"][0]["text"] + " RANDOM")

    const activity = true;
    useEffect(()=>{
      const activities = {
        "goodWeather":[{"text":"Spela fotboll", "search": "fotboll"}, {"text": "Bada", "search": "Badplats"}, 
        {"text": "Kasta frisbee", "search": "frisbee"}, {"text": "Spela minigolf", "search": "minigolf"}, 
        {"text": "Vandra", "search": "Vandringsled"}, {"text": "Grilla", "search": "Grillplats"}],
        "badWeather":[{"text": "Spela laserdome", "search": "laserdome"}, {"text": "Kör go-cart", "search": "Gocart"},
        {"text": "Dra och bowla", "search": "bowling"}, {"text": "Spela biljard", "search": "Biljard"}, 
        {"text": "Dra till gymmet", "search": "Gym"}, {"text": "Åk till gallerian", "search": "köpcenter"}, {"text": "spela tv-spel", "search":"Arkad"}, {"text": "spela laserdome", "search": "Laserdome"}]
      }
      localStorage.setItem("activities", JSON.stringify(activities));
    }, []);

    useEffect(()=>{
      let activity = null;
      while (activity === null){
      if (props.activityCode <= 5) {
        activity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity["text"] + "UTOMHUSAKTIVITET");
        
      } else if (props.activityCode >= 6) {
        activity = activities.badWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity["text"] + "INOMHUSAKTIVITET");
      }}
      setRandomActivity(activity["text"])

    },[activities]);

    if (activity) {
  return (<div>
    <h1><u>Activity</u></h1>
    <h2>{randomActivity}</h2>
    </div>
  )
}
}