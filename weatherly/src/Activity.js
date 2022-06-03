import React from 'react'

export default function Activity(props) {
    console.log(props.activityCode + "KOD")

    const activities = {
        "goodWeather": ["Spela fotboll", "Bada", "Kasta frisbee", "Spela volleyboll", "Ta en promenad", "Spela minigolf", "Klipp gräsmattan", "Sola", "Spring hinderbana"],
        "badWeather": ["Dra till laserdome", "Gå och bowla", "Spela tv-spel", "Kör lite gokart", "Spela biljard", "Dra till gymmet", "Rulla tummarna och vänta på bättre tider"]
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
    <h1>Activity</h1>
    <h2>{activity}</h2>
    </div>
  )
}
}