import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input1 from './components/Input1';
import Show1 from './components/Show1';

function App() {
  const[firstnumber,setFirstnumber] = useState('')
  const[secondnumber,setSecondnumber] = useState('')
  const[operation,setOperation] = useState('')
  const[flag,setFlag] = useState(0)
  if(operation==="Save")
  {
    const savedata = async() =>{
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
  }
 savedata();
 setOperation("")
  }

  

  return (
    <div className="App">
      <Input1 setFlag={setFlag} setFirstnumber={setFirstnumber} setSecondnumber={setSecondnumber} setOperation={setOperation} />
      <Show1 firstnumber={firstnumber} secondnumber={secondnumber} operation={operation} />
      
      
    </div>
  );
}

export default App;
