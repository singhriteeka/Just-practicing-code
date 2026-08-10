/*import {useState} from 'react'

function UseState() {
    const [count,setCount] = useState(0);

    function handleone(){
        setCount(count + 1);
    }
  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={handleone}>Increase</button>
    </div>
  )
}

export default UseState
*/

import {useState} from 'react'
import Index from './Index'
import App from './App'
//import React from 'react'

function UseState() {

  const [show,setShow] = useState(false);

  function handleone(){
    setShow(true)
  }
/*
  let containers;
  if(show){
    containers=<Index />
  }else{
    containers=<App />
  }

  return (
    <div>
       {containers}
      <button onClick={handleone}>Next</button>
      
    </div>
  )
}

export default UseState
*//*
return (
    <div>
       {show ? <Index/> : <App/>}
      <button onClick={handleone}>Next</button>
      
    </div>
  )
}

export default UseState
*/
return (
    <div>
       {show && <Index/>}
       {!show && <App/>}
      <button onClick={handleone}>Next</button>
      
    </div>
  )
}

export default UseState





