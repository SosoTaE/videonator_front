import logo from './logo.svg';
import './styles/App.css';
import VideoLine from './components/videoline';
import Imageobject from './components/imageobject';
import { useEffect, useState } from 'react';
import Scene from './components/scene';

function useAdd() {
  const [body,setBody] = useState({})

  const change = (callback) => {
    setBody((prevState) => callback)
  }
  
  return [body,change]
}

function App() {
  const [body, setBody] = useState([{}])

  const add = () => {
    setBody([...body, {}])
  }

  console.log(body)

  return (
    <div className="App">
      {
        body.map((each,index) => {
          console.log(index)
          return (
            <Scene data={body} setter={setBody} index={index}/>
          )
        })
      }
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
