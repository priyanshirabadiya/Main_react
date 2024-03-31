import logo from "./logo.svg";
import "./App.css";
// import './style.css'
import Head from "./components/Head";
import Paragrapg, { Para2, Para3, Para4 } from "./components/Para";
import Img from "./components/Image";
import Ulli, { Olli } from "./components/Ulli";
import Mynew from "./components/Mynew";
import Spara from "./components/Spara";
import Rendaring from "./components/Rendaring";
import ComA from "./components/ComA";
import Props from "./components/Props";
import img from "./assets/logo192.png";
import Data from "./components/Data";

function App() {
  return (
    <>
      {/* <Paranthtensisi></Paranthtensisi> */}
      {/* <Head/>
          <Paragrapg></Paragrapg>
          <div className="blue">
          <Para2></Para2>
          </div>  
          <Para3></Para3>
          <Para4></Para4>
          <Img></Img>
          <Ulli></Ulli>
          <Olli></Olli> 
          <Mynew></Mynew>
          <Spara/> */}
      {/* <Rendaring/>
          <Img/> */}
      {/* <ComA></ComA> */}
      {/* <Props name = "priyanshi" age = {18} sname = "rabadiya" img = {img} ></Props> */}

      {/* {Data.map((cvalue,ind,arr)=>{
            console.log(cvalue,"cvalue");
            return (<Props key={ind} name={cvalue.name}  disc={cvalue.disc} img={img} course={cvalue.course}  />);
          })} */}

      {/* not work */}
      {/* {
            Data.forEach((value,ind) => {
              return( <Props key={ind} name={value.name} ></Props> )
            } )
          } */}

      {/* ---------------------------------------Practice---------------------------------------------------------- */}

      {/* <div className='flex' >
          <Props name= "priyanshi" ></Props>
          <Props name= "priyanshi" ></Props>
          <Props name= "priyanshi" course= "Graphics design" ></Props>
          </div> */}

      {/* <div className="flex" style={{display:"flex"}} >
          {
            Data.map((value, index) => {
              console.log(value, "value");
              return (
                // <div key={value.name}>  -->  Each child in a list should have a unique "key" prop.  -> so any value of data is unique like name in this array than you cantake it as unique key or else index is always unique for each element  
                <div key={index}> 
                  <Props name={value.name} Address={value.Address} course = {value.course} ></Props>
                </div>
              );
            })
          }
          </div> */}
    </>
  );
}
export default App;
