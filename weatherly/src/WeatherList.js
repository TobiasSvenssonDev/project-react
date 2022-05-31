import { useEffect, useState } from "react";


export default function WeatherList(props) {
  const [activity, setActivity] = useState(null);
  const activityCode = useState(props.activityCode)
  console.log(activityCode + "AKTIVITET")

  useEffect(() => {
    
    const activities = {
      "goodWeather": ["spela fotboll", "bada", "kasta frisbee", "spela volleyboll", "ta en promenad", "spela minigolf", "klipp gräsmattan"],
      "badWeather": ["dra till laserdome", "gå och bowla", "spela tv-spel", "kör lite gokart", "spela biljard", "dra till gymmet", "rulla tummarna och vänta på bättre tider"]
    }
    const determinActivity = function()
    if (activityCode <= 5) {
      const outdoorActivity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)];
      console.log(outdoorActivity + "AKTIVITET");
      setActivity(outdoorActivity)

    } else if (activityCode >= 6) {
      const insideActivity = activities.badWeather[Math.floor(Math.random() * activities.goodWeather.length)];
      console.log(insideActivity + "AKTIVITET");
      setActivity(insideActivity)
    };

  }), [activityCode];



  if (!activity) return null;

  return (
    <div>{activity}</div>
  )

}
