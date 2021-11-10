import React from 'react';
import myFetch from '../components/fetcher';

const RegisterForm = (e) => {
  console.log(e);
  const body = {
    email: e.email,
    password: e.password,
    name: e.name,
  }
  myFetch('POST', 'user/auth/register', null, body)
    .then((data) => {
      console.log('Successfully registered new user');
    })
    .catch((data) => {
      console.log('Not successful in registering new user');
    })
}

const RegisterScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  return (
    <div>
      <h1>Register Form</h1>
      Email<input type="text" onChange={(e) => setEmail(e.target.value)} /><br/>
      Password<input type="text" onChange={(e) => setPassword(e.target.value)} /><br/>
      Name<input type="text" onChange={(e) => setName(e.target.value)} /><br/>
      <button onClick={() => RegisterForm({ email: email, password: password, name: name })}>Submit</button>
    </div>
  );
}

export default RegisterScreen;
