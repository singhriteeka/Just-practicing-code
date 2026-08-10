import {useEffect, useState} from 'react'

import React from 'react'

function UseEffect() {
    const [product,setProduct] = useState([]);

    async function fetchApi(){
        const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        setProduct(result);
    }

    useEffect(() =>{
        fetchApi();
    },[]);

  return (
    <div>
        {product.map((item) => {
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
  )
}

export default UseEffect
