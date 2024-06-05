import './App.css';
import Signup from './components/Signup.jsx';
import {useState} from 'react' 

function App() {

  let [state,setState] = useState(true)

  return (
    <div className="App">

      <Signup/>
    </div>
  );
}

export default App;
