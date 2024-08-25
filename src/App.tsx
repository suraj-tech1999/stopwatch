import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const[time,setTime]=useState(110)
  const[isStarted,setIsStarted]=useState(false)
  let timeRef:any=useRef(null)

  useEffect(()=>{
    if(isStarted){
      timeRef.current=setInterval(()=>{
        setTime(prevTime=>prevTime+1)
      },1000)
    }else{
      clearInterval(timeRef.current)
    }
  },[isStarted])
  const handleStart=()=>{
    setIsStarted(true)
  }
  const handlePause=()=>{
    setIsStarted(prev=>!prev)
  }

  const handleReset=()=>{
    setTime(0);
    setIsStarted(false)
  }

  const formatTime=(seconds:any)=>{

    let hours=Math.floor(seconds/3600).toString().padStart(2,'0')
    let minutes=Math.floor(seconds/60).toString().padStart(2,'0')
    let sec=Math.floor(seconds%60).toString().padStart(2,'0')
    return `${hours}-${minutes}-${sec}`

  }

  return (
    <>
    <h1>Stop Watch</h1>
    <span>{formatTime(time)}</span>
    <button onClick={handleStart}>Start</button>
    <button onClick={handlePause}>Pause/Resume</button>  
    <button onClick={handleReset}>Reset</button>    
    </>
  );
}

export default App;
