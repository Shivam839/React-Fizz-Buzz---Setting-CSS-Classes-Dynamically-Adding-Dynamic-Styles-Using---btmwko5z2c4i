import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [value,setValue]=useState(1);
  const increment = ()=>{
    let temp=value+1;
    if(temp%3==0 && temp%5==0){
      document.getElementById('para').className='fizzbuzz'
    }
    else if(temp%3==0){
      document.getElementById('para').className='fizz'
    }
    else if(temp%5==0){
      document.getElementById('para').className='buzz'
    }
    else{
      document.getElementById('para').className='normal'
    }
    setValue(temp)
    
  }  
  const decrement = ()=>{
    let temp;
    if (value>1){
    temp=value-1;
  }
  else{
    temp=1
  }
  if(temp%3==0 && temp%5==0){
    document.getElementById('para').className='fizzbuzz'
  }
  else if(temp%3==0){
    document.getElementById('para').className='fizz'
  }
  else if(temp%5==0){
    document.getElementById('para').className='buzz'
  }
  else{
    document.getElementById('para').className='normal'
  }
    setValue(temp)
  } 


  return (
    <div id="main">
      <button onClick={increment}>Increment</button>
      <p id="para" className='normal'>{value}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}


export default App;
