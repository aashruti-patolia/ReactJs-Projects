import '../App.css';
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className='App'>
      <input
        type="email"
        placeholder='Email'
        onChange={handleEmail}
      /> <br />
      <input
        type="password"
        placeholder='Enter password'
        onChange={handlePassword}
      /> <br />
      <button onClick={handleDetails}>Show Input Details</button>
      
      {showDetails && (
        <div>
          Email: {email} <br />
          Password: {password}
        </div>
      )}
    </div>
  );
}

export default Signup;
