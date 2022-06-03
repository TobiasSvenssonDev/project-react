import React from 'react'
import { useState, useEffect } from "react";

export default function Activity(props) {
    console.log(props.activityCode + "KOD")

    const activities = {
      "goodWeather":[{"text":"Spela fotboll", "search": "fotboll"}, {"text": "Bada", "search": "Bada"}, 
      {"text": "Kasta frisbee", "search": "frisbee"}, {"text": "Spela minigolf", "search": "minigolf"}],

      "badWeather":[{"text": "Spela laserdome", "search": "laserdome"}, {"text": "Kör go-cart", "search": "gocart"},
      {"text": "Dra och bowla", "search": "bowling"}, {"text": "Spela biljard", "search": "biljard"}],
    }

    let activity = null;
    if (props.activityCode <= 5) {
        activity = activities.goodWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity + "UTOMHUSAKTIVITET");

        localStorage.setItem("suggested", JSON.stringify(activity));

      } else if (props.activityCode >= 6) {
        activity = activities.badWeather[Math.floor(Math.random() * activities.goodWeather.length)];
        console.log(activity + "INOMHUSAKTIVITET");

        localStorage.setItem("suggested", JSON.stringify(activity));
      };

    if (activity) {
  return (<div>
    <h1><u>Activity</u></h1>
    <h2>{activity.text}</h2>
    </div>
  )
}
}