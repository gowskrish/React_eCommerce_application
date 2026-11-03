import React from 'react'
import {useState, useEffect} from "react";

function Hooks(){
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState();

    

return(
    <div>
        <h1>Cart : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count -1)}>Decrese</button>
    </div>
);

}
export default Hooks;

