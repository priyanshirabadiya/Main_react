import React, { useEffect, useState } from 'react'

function Aaa() {
    const [incre, setIncre] = useState(0)
    const [decre, setDecre] = useState(10)
    // useEffect(()=>{
    //       console.log("1111")
    // },[])  // 1

    // useEffect(()=>{
    //     console.log("2222")
    //  })  // 2

    // useEffect(()=>{
    //     console.log("2222")
    //  },[decre])  // 3

     useEffect(()=>{
        document.title = "demo"
    },[])  // change title

     const increment = () => {
        setIncre(incre+10)
     }

     const decrement = () => {
        setDecre(decre - 1)
     }
  return (
    <div>
        {incre}
          <button onClick={increment}>Click me</button>
         <h1>my name is...</h1>
         {decre}
          <button onClick={decrement}>Click me</button>
    </div>
  )
}

export default Aaa
