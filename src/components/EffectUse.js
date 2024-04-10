import React , {useState , useEffect } from 'react'

function EffectUse() {

    const[count , setCount] = useState(0);
    const[countde , setCountde] = useState(0);

    const incre= () => {
        setCount(count + 1);
    }

    const decre = () => {
        setCountde(countde - 1);
    }

    // useEffect(() => {
    //     console.log('111');
    // })

    // useEffect(() => {
    //     console.log('222');
    //  }, []);
  
    useEffect(() => {
        console.log('333');
    },[count])


  return (
    <div>
        <h1>increment</h1>
        <h1>{count}</h1>
        <button onClick={incre} >click</button>
        <h1>{countde}</h1>
        <button onClick={decre} >decre click</button>
    </div>
  )
}

export default EffectUse;
