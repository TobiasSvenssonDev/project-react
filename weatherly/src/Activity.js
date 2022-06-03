import React, { useEffect, useState } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./activity', '')] = r(item); return images });
  return images;
}

const images = importAll(require.context('./activity', false, /\.(png|jpe?g|svg)$/));


export default function Activity(props) {
  const [usedActivity, setUsedActivity] = useState(getSessionActivities);
  const [randomActivity, setRandomActivity] = useState(null);
  const [activities, setActivities] = useState(getStoredActivities);

  function getSessionActivities() {
    let storedSession = JSON.parse(sessionStorage.getItem("usedActivities"));
    if (storedSession === null) {
      const emptyStorage = []
      sessionStorage.setItem("usedActivities", JSON.stringify(emptyStorage))
      return JSON.parse(sessionStorage.getItem("usedActivities"))
    } else {
      return JSON.parse(sessionStorage.getItem("usedActivities"))
    }
  }

  function getStoredActivities() {
    const activities = {
      "goodWeather": [{ "text": "Spela fotboll", "keyWord": "fotboll" }, { "text": "Bada", "keyWord": "Badplats" },
      { "text": "Kasta frisbee", "keyWord": "frisbee" }, { "text": "Spela minigolf", "keyWord": "minigolf" },
      { "text": "Vandra", "keyWord": "Vandringsled" }, { "text": "Grilla", "keyWord": "Grillplats" }],
      "badWeather": [{ "text": "Spela laserdome", "keyWord": "laserdome" }, { "text": "Kör go-cart", "keyWord": "Gocart" },
      { "text": "Dra och bowla", "keyWord": "bowling" }, { "text": "Spela biljard", "keyWord": "Biljard" },
      { "text": "Dra till gymmet", "keyWord": "Gym" }, { "text": "Åk till gallerian", "keyWord": "shopping" },
      { "text": "spela tv-spel", "keyWord": "Arkad" }]
    }
    let storage = JSON.parse(localStorage.getItem("activities"));
    if (storage === null) {
      localStorage.setItem("activities", JSON.stringify(activities));
      return JSON.parse(localStorage.getItem("activities"))
    } else {
      return storage;
    }
  }

  useEffect(() => {
    function saveToSession(activity) {
      let currentSession = getSessionActivities();
      const now = new Date();
      const current = now.getFullYear() + ':' + ('0' + (now.getMonth() + 1)).slice(-2) + ':' + now.getDate() + ':' + now.getHours() + ':' + now.getMinutes() + ':00';
      const timeStamp = now.getFullYear() + ':' + ('0' + (now.getMonth() + 1)).slice(-2) + ':' + now.getDate() + ':' + now.getHours() + ':' + (now.getMinutes() + 1) + ':00';
      const updateSession = {
        activity: activity,
        expiration: timeStamp
      }
      currentSession.push(updateSession);
      const newSession = []
      currentSession.forEach(item => {
        if (item["expiration"] >= current) {
          console.log(item)
          newSession.push(item)
        }
      });
      sessionStorage.setItem("usedActivities", JSON.stringify(newSession));
    }

    let activity = null;

    while (activity === null) {
      if (props.activityCode <= 5) {
        activity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)]
        if (activity !== usedActivity.map((item) => item.activity.keyWord)) {
          saveToSession(activity);
        }

      } else if (props.activityCode >= 6) {
        activity = activities.badWeather[Math.floor(Math.random() * activities.badWeather.length)];
        if (activity !== usedActivity.map((item) => item.activity.keyWord)) {
          saveToSession(activity);
        }
      }
    }
    setRandomActivity(activity)

  }, [activities, props.activityCode]);

  function getImg(activity){
    const myString = "./" + activity["keyWord"] + ".jpg"
    const myImgSrc = images[myString]
    return myImgSrc
  }

  if (randomActivity) {
    return (<div>
      <h1><u>Activity</u></h1>
      <h2>{randomActivity["text"]}</h2>
      <img src={getImg(randomActivity)} alt={randomActivity["keyWord"]} />
    </div>
    )
  }
}