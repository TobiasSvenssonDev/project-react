import React from 'react'


function saveLocalStorage(activity){
  //const dateTimeToString = currentDate.getFullYear() + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getDate() + "T" + currentDate.getHours() + ":00:00Z";
  const now = new Date();
  const timeStamp = now.getFullYear()+':'+('0' + (now.getMonth() + 1)).slice(-2)+':'+now.getDate()+':'+now.getHours()+':'+now.getMinutes()+':00'
  console.log(now + " Date")
  console.log(timeStamp + " Expiration")
  const activityObject = {
    activity: activity,
    timeStamp: timeStamp
  }
  localStorage.setItem("suggested", JSON.stringify(activityObject));
}

export default function Activity(props) {
    console.log(props.activityCode + "KOD")
    

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

    if (activity) {
  return (<div>
    <h1><u>Activity</u></h1>
    <h2>{activity.text}</h2>
    </div>
  )
}
}