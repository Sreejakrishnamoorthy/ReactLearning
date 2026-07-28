import React, { useState } from 'react'
import styled from 'styled-components';
const Button= styled.button
`
background-color:blue;
color:white;
width:100px;
height:50px;
`
function CounterApp() {
  // let count=0;
  // const [count,setCount]=useState(0);
  // const [data,setData]=useState("loading");
  // let message;
  // let remainingClick=10-count;
  // if(count <10){
  //   message=(
  //     <div>
  //       <h3>you clicked {count} times</h3>
  //       <p>still {remainingClick} more click to unlock 10% discount💕</p>
  //     </div>
  //   )
  // }
  // else if(count==10){
  //   message=(
  //     <div>
  //       <h3>you clicked {count} times</h3>
  //       <p>u unlocked 10% discount💕</p>
  //     </div>
  //   )
  // }
  // else if(count <20){
  //    message=(
  //     <div>
  //       <h3>you clicked {count} times</h3>
  //       <p>still {remainingClick} more click to unlock 20% discount💕</p>
  //     </div>
  //   )
  // }
  // else{
  //    message=(
  //     <div>
  //       <h3>u are click master</h3>

  //     </div>
  //   )
  // }
// let displayComp=()=>{
//   switch(data){
//     case "loading" : return <LoadingComp/>
//     break;
//     case "success" : return <SuccessCompComp/>
//     break;
//     case "error" : return <ErrorCompComp/>
//     break;
//   }
// }
  // let [sample,setSample]=useState(returnState);
  // function returnState(){
  //   return 100;
  // }



  function handleIncrease(){
    setCount((prevCount)=>prevCount+1);
    // setCount((prevCount)=>prevCount+1);
    // setCount((prevCount)=>prevCount+1);
    // setCount(count+1);
    // count +=1;
    console.log(count);
  }
  // function handleDecrease(){
  //   setCount((prevCount)=>prevCount-1);
  //   // setCount((prevCount)=>prevCount-1);
  //   // setCount((prevCount)=>prevCount-1);
  //   // setCount(count-1);
  //   // count -=1;
  //   // console.log(count);
  // }
  return (
    <div> 
      {/* Counter App-{count}-{sample} */}
      <h1>click to unlock rewards😍 -{count}</h1>
    {/* <button onClick={handleIncrease}>increase</button> */}
    {/* <button onClick={handleDecrease}>decrease</button> */}
    {/* <Button onClick={handleIncrease}>click me!</Button> */}
{/* it is using ternary operator */}
  {/* {
    count>=10 ? <p>you unlocked a 10% discount</p> : <p>
      click 10 times to unlock rewards😍
    </p>
  } */}
  {/* it is using logical operator */}
  {/* {
    count >=20 && <p> u have unlocked 20% discount💕</p>
  } */}
    {/* {message}
    {displayComp()} */}
    </div>
    
  )
}

export default CounterApp


function LoadingComp(){
  return(
    <h5>loading...........</h5>
  )
}
function SuccessComp(){
  return(
    <h5>success❤️</h5>
  )
}
function ErrorComp(){
  return(
    <h5>error😣</h5>
  )
}