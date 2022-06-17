import React from 'react'
import { useState, useEffect,useCallback} from 'react'
import './tripList.css'

const TripList = () => {
   const [trips,setTrips]=useState([]);
   const [url,setUrl]=useState("http://localhost:3000/trips")

   



  const fetchTrips= useCallback( async ()=>{
    const respone= await fetch(url)
    const json= await respone.json()
    setTrips(json)
  },[url])



useEffect(()=>{
 fetchTrips()
},[fetchTrips])




   console.log(trips)
  return (
    <div>
 <h1>Trip List</h1>
   {trips.map((trip,index)=>{
     return(
      <center key={index}>
        <div className='box'>
            <h1> {trip.title}</h1>
            <h2>{trip.price}</h2>
        </div>
        </center>
     )
   })}

   <button onClick={()=>setUrl("http://localhost:3000/trips")} >All Trips</button>
   <button onClick={()=>setUrl("http://localhost:3000/trips?loc=Punjab")}>Punjab Trips</button>
   <button onClick={()=>setUrl("http://localhost:3000/trips?loc=KpK")}>KpK Trpis</button>
    </div>
  )
}

export default TripList