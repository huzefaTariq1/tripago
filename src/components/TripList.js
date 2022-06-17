import React from 'react'
import { useState} from 'react'
import './tripList.css'
import { useFetch } from '../hooks/useFetch'

const TripList = () => {
   const [url,setUrl]=useState("http://localhost:3000/trips")
   const {data:trips}=useFetch(url)
   
  return (
    <div>
 <h1>Trip List</h1>
 
  {/* using and operator bcz in usefetch data initlize with null and map can't run on null  */}
   {trips && trips.map((trip,index)=>{
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