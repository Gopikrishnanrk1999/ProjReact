import React from 'react'
import {useState,useEffect}from 'react'
function Next() {

    const [restaurants,EditRestaurants]= useState([])

    async function DataInput(){
        await fetch('./restaurants.json')
        .then((data)=> data.json())
        .then((resp)=> EditRestaurants(resp.restaurants))
    }

    useEffect(() => {
        DataInput()
    }, [])
    
  return (
    <div>
        {restaurants.map(item=>(
            <p>
                {item.address}
            </p>
        ))}
    </div>
  )
}

export default Next