import { createContext } from "react";
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
import ComC from "./components/ComC";
import Usestate from "./components/Usestate";
import Classcompo from "./components/Classcompo";
import Effect from "./components/Useeffect";
import EffectUse from "./components/EffectUse";
import Tablesec from "./components/Tablesec";

const context1 = createContext();


function App() {
  //   const [count, setCount] = useState(0);
  //   const [count2, setCount2] = useState(0);

  // let a = 10 ;

  // const incre =() => {
  //   setCount(count + 10)
  // }

  // const decre =() => {
  //   setCount2(count2 - 10)
  // }

  return (
    <>
      {/* <button onClick={incre}>Increment</button>
      <h1>{count}</h1>

      <button onClick={decre}>Decrement</button>
      <h1>{count2}</h1> */}


      {/* Lec -1 */}
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
      {/* Lec -2  nested cpmponent */}
      <context1.Provider value="abc">
        <ComA />
      </context1.Provider>

      {/* Lec - 3 props/de - structing props  */}
      {/* <Props name = "priyanshi" age = {18} sname = "rabadiya" img = {img} ></Props> */}

      {/* L-4,5 map method / de-strucring */}
      {/* <div className="flex">
      {Data.map((cvalue, ind, arr) => {
        console.log(cvalue, "cvalue");
        return (
          <Props
            key={ind}
            name={cvalue.name}
            disc={cvalue.disc}
            img={cvalue.img}
            course={cvalue.course}
          />
        );
      })}
  </div> */}

      {/* ternary operator watch on tasks  */}
      {/* {(a==1) ? <ComC/> : <Paragrapg/>} */}

      {/* <Usestate/> */}

      {/* Class component */}

      {/* <Classcompo/> */}


      {/* Use effect incre decre */}
      {/* <Effect/> */}


      {/* EffectUSe */}

      {/* <EffectUse/> */}

      {/* Table component */}

      {/* <Table/> */}

      {/* <Tablesec/> */}


    </>
  );
}
export { context1 };
export default App;
