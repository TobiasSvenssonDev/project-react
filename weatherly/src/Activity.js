import React from 'react'
import { useState, useEffect } from "react";

export default function Activity(props) {
    console.log(props.activityCode + "KOD")

    const activities = {
      "goodWeather":[{"id": 01, "text":"Spela fotboll", "search": "fotboll"}, {"id": 02, "text": "Bada", "search": "Bada"}, 
      {"id": 03, "text": "Kasta frisbee", "search": "frisbee"}, {"id": 04, "text": "Spela minigolf", "search": "minigolf"}],

      "badWeather":[{"id": 01, "text": "Spela laserdome", "search": "laserdome"}, {"id": 02, "text": "Kör go-cart", "search": "gocart"},
      {"id": 03, "text": "Dra och bowla", "search": "bowling"}, {"id": 04, "text": "Spela biljard", "search": "biljard"}]
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