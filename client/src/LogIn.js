import React, { useState } from "react";
// import Auth from './Auth'    dont know if this is the right path... copying from lecture...

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState([])

  function handleSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }

      fetch(`http://localhost:3000/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => {
          console.log(json)
          if(json.errors) setErrors(json.errors)
      })
  }

  return (
    <>
      <h1 className="text-4xl">Welcome to Mutts Cutts</h1>
      <h1 className="text-3xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="font-bold px-1">Username:&nbsp;
        <input
          className="border-2 rounded-md"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </label>

        <label className="font-bold px-1">Password:&nbsp;
        <input
          className="border-2 rounded-md"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        <LogInButton></LogInButton>
      </form>
      {errors?<div>{errors}</div>:null}
      {/* <Auth setUser={setUser} setIsAuthenticated={setUser}/> */}
      
    </>
  );
}

function LogInButton(props){
    return (
      <input className="
      bg-slate-600
      text-white 
      
      px-3
      py-1
      rounded
      hover:bg-blue-600
      " type="submit" value="Login">{props.children}</input>
    )
  }

export default LogIn;
