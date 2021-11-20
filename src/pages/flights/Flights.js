import React, { useEffect, useState} from 'react'
import axios from 'axios';


const Flights = () => {

    useEffect(() => {
        fetchData()
       }, [])
     
     
       const fetchData = () => {
         axios.get('https://react-dj-flight-app.herokuapp.com/api/flights/')
           .then(({data}) => console.log(data))
     
       }
     
          
    return (
        <div>
            Flights
        </div>
    )
}

export default Flights
