import React from 'react'

// export default function Props(props){
//   console.log(props,"===");
//   return (
//     <div>
//         <h1>Name : {props.name} <br /> 
//           <img src={props.img} alt="" /><br />
//              name:{props.name} <br />
//                disc : {props.disc} <br /> 
//                 course : {props.course} 
//         </h1>
//     </div>
//   )
// }

// --------------------------------------------------------------------------------------------------------

export default function Props(props){
  return(
    <>
    <div className='h-60  bg-pink-700 text-white w-56 me-6'  >
      <h1>Name:{props.name}</h1>
      <h1>Address is {props.Address} </h1>
      <p>coursse :{props.course}</p>
    </div>
    </>
  )
}

