import React, { Component, useState } from 'react'
import './components.css'

const Input = ({setFlag}) => {
    const[firstnumber,setFirstnumber] = useState('')
    const[secondnumber,setSecondnumber] = useState('')
    const[operation,setOperation] = useState('')
    const savedata = async(e) =>{
        e.preventDefault()
        const data = {firstnumber,secondnumber,operation}
        const response = await fetch('http://localhost:4013/input',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(response.ok)
        {
            console.log("Input Added")
            setFlag(1)
        }
        setFirstnumber('')
        setSecondnumber('')
        setOperation('')
    }
  return (
    <div className='inputcontainer'>
      <form onSubmit={savedata}>
       <h3>FirstNumber</h3>
       <input type="number" value={firstnumber} onChange={(e) => setFirstnumber(e.target.value)} ></input>
       <h3>SecondNumber</h3>
       <input type="number" value={secondnumber} onChange={(e) => setSecondnumber(e.target.value)} ></input>
       <h3>Operation</h3>
       <input type="text" value={operation} onChange={(e) => setOperation(e.target.value)} ></input>
       <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Input
