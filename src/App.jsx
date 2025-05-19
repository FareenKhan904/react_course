import { useState } from "react";

export function  app(){

const [count , setcount] = useState(0)

function increment(){
  setcount(count +1)
}

function decrement(){
   if(count > 0)
    {setcount(count -1)}

   else{ 
    alert("Count cannot be less than zero.")
  }
}

function reset(){
  setcount(0)
}


return(
  <>
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>decrement</button>
  <button onClick={reset}>reset</button>
  <p>{count}</p>
  </>
);
}

export default app;