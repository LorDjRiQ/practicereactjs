import React from 'react'

// function Greet(){
//     return <h1>Hello World.</h1>
// }

const Greet = props => {
  const {name, ign} = props;
  return (
    <div>
      <h1>Using const {name}! IGN:{ign}.</h1>
      <h1>Using props {props.name}! IGN:{props.ign}.</h1>
      {props.children}
    </div>
  )
}
 
export default Greet