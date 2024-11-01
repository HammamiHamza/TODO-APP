import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Counter() {
    const [counter,setCounter]=useState(0)
    const handleCount=()=>{
        setCounter(counter+1)
    }
    const disCount=()=>{
        setCounter(counter-1)
    }

    const navigate=useNavigate()

    const goToApi=()=>{
        navigate("/api")
    }
    const goBack=()=>{
        navigate(-1)
    }
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Count:{counter}</h1>
      <br/>
      <button onClick={handleCount} className=''>add</button>
      <br/>
      <button onClick={disCount} className=''>Minus</button>

      <br/>
      
      <button onClick={goToApi} className=''>go to api</button>
      
      <br/>
      <button onClick={goBack} className=''>go back</button>

    </div>
  )
}
