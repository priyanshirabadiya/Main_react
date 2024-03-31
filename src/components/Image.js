import React from "react";
import Img1 from "../assets/download.jpg"

export default function Img(){
let arr = ["anjj","jjj","uuu"];

    return (<>
    {/* <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" height={500}/> */}
       <br />
       {/* <img src={Img1} alt="image"/> */}
    {/* list */}

      {/* {arr.map((cvalue, ind , arr)=>{
         return <>
                  <h1>{cvalue}{ind}{arr}</h1>
               </>
      })} */}

   {/* {arr.map((value , index) => {
      return <> 
         <h1>{value}{index}</h1>
      </>
   } )} */}
   
       {/* expretion */}
       <p>Lorem, ipsum dolor.{5*2}</p>
       <h1>hello ma'am : good morning</h1>
    </> )

}

// export default Img;

//  file path 
// 1. absulate path  - full url
// 2. ralative path  - folder related