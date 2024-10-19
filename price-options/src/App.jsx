
// import { useEffect, useState } from 'react'
import { useState } from 'react'
import './App.css'
// import DaisyNav from './components/DasiyNav.jsx/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Service from './components/Service/Service'



function App() {

  const [condition, setCondition] = useState(true)
  console.log(condition);


  const handleSection = () =>{
    setCondition(!condition)
  }

  const displayPassFunc = (message) =>{
    setCondition(message);
  }

  const [state, setState] = useState(0);

  const handleState = () => {
    setState(state + 1)
  }

  // useEffect(() => {
  //   console.log('hello from useEffect');
  // }, [state])

  let storageVar = 0
  const handleVariable = () =>{
    storageVar = storageVar + 1
    console.log(storageVar);
  }
  console.log('object');

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl text-center font-bold'>Vite + React</h1>
      <div className='text-center'>
      <button className='btn btn-error ' onClick={handleSection}>Handle State</button>
      {
        condition ? <Products></Products> : <Product></Product>
      }
      </div>
    
  <div className='text-center'>
 
  <h3 className='text-2xl font-semibold'>variable state</h3>
  <button onClick={handleVariable}>Variable count</button> 
  <h3 className='text-2xl font-semibold'>State count ({state})</h3>
   <button className='btn' onClick={handleState}>State count</button> 
 </div> 
  <button className='btn btn-accent' onClick={displayPassFunc}>Service</button>

  <Service displayPassFunc={displayPassFunc}></Service>
   
    </>
  )
}

export default App
