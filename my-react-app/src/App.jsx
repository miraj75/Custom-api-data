
import { useEffect, useState } from 'react';
import './App.css';
import Watch from './assets/Components/Watch/Watch';
function App() {

const [watches, setWatches] = useState([])

useEffect(() => {
  fetch("Watch.json")
    .then((res) => res.json())
    .then((data) => setWatches(data))})

  // const smartWatches = [
  //   {
  //     brand: "Apple",
  //     model: "Apple Watch Series 8",
  //     price: 399,
  //     features: ["GPS", "Heart Rate Monitor", "Water Resistant", "Always-On Display"],
  //     batteryLife: "18 hours"
  //   },
  //   {
  //     brand: "Samsung",
  //     model: "Galaxy Watch 6",
  //     price: 349,
  //     features: ["GPS", "Sleep Tracking", "Water Resistant", "SpO2 Monitoring"],
  //     batteryLife: "40 hours"
  //   },
  //   {
  //     brand: "Fitbit",
  //     model: "Fitbit Versa 4",
  //     price: 229,
  //     features: ["Heart Rate Monitor", "Sleep Tracking", "Built-in GPS", "Music Storage"],
  //     batteryLife: "6 days"
  //   },
  //   {
  //     brand: "Garmin",
  //     model: "Garmin Venu 2",
  //     price: 399,
  //     features: ["GPS", "Pulse Oximeter", "Body Battery Energy Monitor", "Swim Tracking"],
  //     batteryLife: "11 days"
  //   },
  //   {
  //     brand: "Amazfit",
  //     model: "Amazfit GTS 4",
  //     price: 179,
  //     features: ["GPS", "Blood Oxygen Monitoring", "Always-On Display", "Sleep Tracking"],
  //     batteryLife: "7 days"
  //   }
  // ];
  

  return (
    <div>
      
      <h1 className="">
        Custom Data use 
      </h1>
      {
        watches.map(watch=> <Watch watch={watch}></Watch>)
      }
    </div>
  )
}

export default App
