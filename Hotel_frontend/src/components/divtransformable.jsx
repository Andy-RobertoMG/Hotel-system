import React, { useState } from 'react';
import '../css/styles.css';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interaction from '@fullcalendar/interaction';
const DivTransformable = () => {
  

  const toggleSize = () => {
    const myDiv = document.getElementById("myDiv");
    myDiv.classList.toggle('transformado')
  };

  return ( <>
  
    <FullCalendar plugins={[ dayGridPlugin,timeGridPlugin,interaction]}
        initialView="dayGridMonth"/>   
  
  </>
    // <div
    //   className={`div-transformable ${transformado ? transformado:''}`}
    //   onClick={toggleSize}
    //   id='myDiv'
    // >
    //   Div transformable
    // </div>
  );
};

export default DivTransformable;
