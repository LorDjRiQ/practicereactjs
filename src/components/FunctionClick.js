import React from 'react'

function FunctionClick() {
  function functionClickHandler() {
    console.log("Event Click Triggered in Function.");
  }
  return (
    <div>
      <button onClick={functionClickHandler}>Function Click!</button>
    </div>
  )
}

export default FunctionClick