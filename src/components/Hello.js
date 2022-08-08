import React from "react";

const Hello = () => {
    // return(
    //   <div id='helloID' className='dummyClass'>
    //     <h1>Hello Nigga.</h1>
    //   </div>
    // )
  return React.createElement(
    'div', 
    {id: "helloID", className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Niggas.'))
}

export default Hello;