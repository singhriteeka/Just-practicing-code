import React from 'react'
import { useState} from "react";

function App() {
  const[count,setCount] = useState(0);

  function handleonclick(){
    if(count<5){
      setCount(count+1);
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleonclick}>Click me</button>
    </div>
  )
}

export default App
/*
#========================================

import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchApi() {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    setProducts(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);
}

  return (
    <div>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              width="150"
            />
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
*/


