import logo from './logo.svg';
import './App.css';
// import './style.css'
import Head from './components/Head';
import Paragrapg,{Para2,Para3,Para4} from './components/Para';
import Img  from './components/Image';
import Ulli,{ Olli } from './components/Ulli';
import Mynew from './components/Mynew';
import Spara from './components/Spara';
import Rendaring from './components/Rendaring';

    function App(){
      return(
        <div className="App">
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
          <Rendaring/>
          <Img/>
        </div>
    );
}
export default App;
