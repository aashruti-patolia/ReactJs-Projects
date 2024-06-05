import './App.css';
// import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import {useState} from 'react' 

function App() {

  let [state,setState] = useState(true)

  return (
    <div className="App">
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
