import React from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';


const Login = () => {
const [login, setLogin] = React.useState({
  username:'',
  password:'',
});

const changeHandler = (e) =>  {
setLogin({
  ...login,
  [e.target.name]:e.target.value
})
}
const history = useHistory()
const submit = (e) => {
  e.preventDefault();
  axios
  .post('http://localhost:5000/api/login', login)
  .then(res => {
    console.log(res.data.payload);
window.localStorage.setItem('token', res.data.payload)
  })
  history.push('/bubbles')
}

  return (

<div>
  <form onSubmit ={submit}>
    <input type="text"
           placeholder="Username"
           name="username"
           value={login.username}
           onChange={changeHandler}/>
    <input type="password"
           placeholder="Password"
           name="password"
           value={login.password}
           onChange={changeHandler}/>
    <button>Login</button>
  </form>
</div>

  );
};

export default Login;
