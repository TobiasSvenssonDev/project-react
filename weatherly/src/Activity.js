import React from 'react'

export default function Activity(props) {
    console.log(props.activityCode + "KOD")

    const activities = {
        "goodWeather": ["spela fotboll", "bada", "kasta frisbee", "spela volleyboll", "ta en promenad", "spela minigolf", "klipp gräsmattan"],
        "badWeather": ["dra till laserdome", "gå och bowla", "spela tv-spel", "kör lite gokart", "spela biljard", "dra till gymmet", "rulla tummarna och vänta på bättre tider"]
      }

    let activity = null;
    if (props.activityCode <= 5) {
        activity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity + "UTOMHUSAKTIVITET");

  
      } else if (props.activityCode >= 6) {
        activity = activities.badWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity + "INOMHUSAKTIVITET");
        
      };
    if (activity) {
  return (<div>
    <div>Activity</div>
    <p>{activity}</p>
    </div>
  )
}
}