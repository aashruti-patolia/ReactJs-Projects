import '../App.css';
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };


  const handleDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className='App'>

      <br /> <br />
      <input
        type="email"
        placeholder='Email'
        onChange={handleEmail}
      /> <br /> <br />

      <input
        type="username"
        placeholder='UserName'
        onChange={handleUser}
      /> <br /> <br />


      <input
        type="password"
        placeholder='Enter password'
        onChange={handlePassword}
      /> <br /> <br /><br />
      <button onClick={handleDetails}>Show Input Details</button>

      <br /><br /><br />
      
      {showDetails && (
        <div>
          Email: {email} <br />

          Username: {user} <br />

          Password: {password} <br />
        </div>
      )}
    </div>
  );
}

export default Signup;
