import React, { useEffect, useState } from 'react';
import './components1.css'

const Show = ({ firstnumber,secondnumber,operation }) => {

        
   const result = ({operation,firstnumber,secondnumber}) => {
    if (operation === "Add")
        return (
          <p>
            {firstnumber} + {secondnumber} = {firstnumber + secondnumber}
          </p>
        );
      else if (operation === "Sub")
        return (
          <p>
            {firstnumber} - {secondnumber} = {firstnumber - secondnumber}
          </p>
        );
      else if (operation === "Mul")
        return (
          <p>
            {firstnumber} * {secondnumber} = {firstnumber * secondnumber}
          </p>
        );
      else if (operation === "Div")
        return (
          <p>
            {firstnumber} / {secondnumber} = {firstnumber / secondnumber}
          </p>
        );
      else if (operation === "Mod")
        return (
          <p>
            {firstnumber} % {secondnumber} = {firstnumber % secondnumber}
          </p>
        );
    }; 


  return (
    <div className='output1container'>
       {result({ operation, firstnumber, secondnumber })}
   </div>
  );
};

export default Show;


