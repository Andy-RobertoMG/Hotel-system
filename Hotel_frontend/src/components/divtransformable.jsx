import React, { useState } from 'react';
import '../css/styles.css';

const DivTransformable = () => {
  

  const toggleSize = () => {
    const myDiv = document.getElementById("myDiv");
    myDiv.classList.toggle('transformado')
  };

  return ( <></>
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
