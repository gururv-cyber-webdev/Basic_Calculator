import React, { useEffect, useState } from 'react';
import './components.css'

const Show = ({ flag, setFlag, operation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4013/output');
      const json = await response.json();
      if (response.ok) {
        setData(json);
        setFlag(0); // Reset flag after fetching
      }
    };

    fetchData();   
  }, [flag, setFlag]); // Include setFlag in dependencies

  return (
    <div className='outputcontainer'>
      {data.map((val) => {
        if(val.operation==="Add")
          return  <p>{val.firstnumber} + {val.secondnumber} = { val.firstnumber + val.secondnumber }</p>
        else if(val.operation==="Sub")
          return  <p>{val.firstnumber} - {val.secondnumber} = { val.firstnumber - val.secondnumber }</p>
        else if(val.operation==="Mul")
          return  <p>{val.firstnumber} * {val.secondnumber} = { val.firstnumber * val.secondnumber }</p>
        else if(val.operation==="Div")
          return  <p>{val.firstnumber} / {val.secondnumber} = { val.firstnumber / val.secondnumber }</p>
        else if(val.operation==="Mod")
          return  <p>{val.firstnumber} % {val.secondnumber} = { val.firstnumber % val.secondnumber }</p>

      })}
    </div>
  );
};

export default Show;


//