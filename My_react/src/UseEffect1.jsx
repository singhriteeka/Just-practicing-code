import {useState, useEffect} from 'react'
import React from 'react'

function UseEffect() {
    const [product,setProduct] = useState([]);

    useEffect(() =>{
        async function Api(){
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();

                    setProduct(data);
            }catch(error){
                console.log("error");
            }
        }
        Api();

},[]);

  return (
    <div>
        {product.map((items) => (
            <div key={items.id}>
                <h2>{items.catgory}</h2>
                <img src={items.image} alt={items.title} width="100px"/>
                <h2>{items.price}</h2>
                <h3>{items.rating.count} ({items.rating.rate})</h3>
                <h3>{items.description}</h3>
                </div>

        ))}
    </div>
  )
}

export default UseEffect