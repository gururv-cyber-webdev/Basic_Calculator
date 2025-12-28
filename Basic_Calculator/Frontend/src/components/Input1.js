import React, { useState } from "react";
import "./components.css";

const Input = ({ setFirstnumber, setSecondnumber, setOperation }) => {
  const[flag,setFlag] = useState(true)
  const[current,setCurrent] = useState("")

 
  const handleClick = (val, type) => {

    const newval = current + val

    setCurrent(newval)
   
      if(flag===true)
      {
        setFirstnumber(Number(newval))
      }
      else{
        setSecondnumber(Number(newval))
      }

  };

  const toggle2=() => {
    setFlag(!flag)
    setCurrent("")
  }



  return (
    <div className="input1container">
      {/* <img
        src="https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/01/calculator-coloring-page.png"
        alt="Calculator"
      /> */}
      <button
        className="z"
        onClick={() => handleClick(0, "single")}
        onDoubleClick={() => handleClick(0, "double")}
      >
        0
      </button>
      <button
        className="o"
        onClick={() => handleClick(1, "single")}
        onDoubleClick={() => handleClick(1, "double")}
      >
        1
      </button>
      <button
        className="to"
        onClick={() => handleClick(2, "single")}
        onDoubleClick={() => handleClick(2, "double")}
      >
        2
      </button>
      <button
        className="th"
        onClick={() => handleClick(3, "single")}
        onDoubleClick={() => handleClick(3, "double")}
      >
        3
      </button>
      <button
        className="fo"
        onClick={() => handleClick(4, "single")}
        onDoubleClick={() => handleClick(4, "double")}
      >
        4
      </button>
      <button
        className="fi"
        onClick={() => handleClick(5, "single")}
        onDoubleClick={() => handleClick(5, "double")}
      >
        5
      </button>
      <button
        className="si"
        onClick={() => handleClick(6, "single")}
        onDoubleClick={() => handleClick(6, "double")}
      >
        6
      </button>
      <button
        className="se"
        onClick={() => handleClick(7, "single")}
        onDoubleClick={() => handleClick(7, "double")}
      >
        7
      </button>
      <button
        className="ei"
        onClick={() => handleClick(8, "single")}
        onDoubleClick={() => handleClick(8, "double")}
      >
        8
      </button>
      <button
        className="ni"
        onClick={() => handleClick(9, "single")}
        onDoubleClick={() => handleClick(9, "double")}
      >
        9
      </button>
      <button className="add" onClick={() => setOperation("Add")}>
        Add
      </button>
      <button className="sub" onClick={() => setOperation("Sub")}>
        Sub
      </button>
      <button className="mul" onClick={() => setOperation("Mul")}>
        Mul
      </button>
      <button className="div" onClick={() => setOperation("Div")}>
        Div
      </button>
      <button className="mod" onClick={() => setOperation("Mod")}>
        Mod
      </button>
      <button className="save" onClick={() => setOperation("Save")}>
        Save
      </button>
      <button className="toggle" onClick={toggle2}>toggle</button>
    </div>
  );
};

export default Input;
