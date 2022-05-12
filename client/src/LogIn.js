import React, { useState } from "react";
// import Auth from './Auth' 

function Login({setUser, setIsAuthenticated}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState([])

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
      .then(res => {
        if(res.ok){
          res.json()
          .then(user =>{
            setUser(user)
            setIsAuthenticated(true)
          })

        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }

  return (
    <div className="scale-95 container p-4 grid gap-4">
    <div className="shadow-md p-1 grid grid-cols-2 grid-rows-2 border-2">
      <h1 className="text-4xl p-1 font-bold underline underline-offset-4">Mutts Cutts</h1>
      
      <form className=" self-center"onSubmit={handleSubmit}>
        <label className="font-bold px-1">Username:&nbsp;
        <input
          className="border-2 rounded-md"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        </label>

        <label className="font-bold px-1">Password:&nbsp;
        <input
          className="border-2 rounded-md"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </label>
        {/* <LogInButton></LogInButton> */}
        <input className="
      bg-slate-600
      text-white 
      
      px-3
      py-1
      rounded
      hover:bg-blue-600
      " type="submit" value="Login"></input>
      </form>
      {error?<div>{error}</div>:null}

    </div>

    <div className="p-1 shadow-xl border-2">
        <h1 className="text-3xl text-center bg-slate-600 text-white border-2 ">Mutts Cutts</h1>
        <p className="font-semibold text-center">Groom your dogs the dumb way</p>
        <img id="logged out picture" className="rounded-md object-cetner p-1" src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2014/June/140609/2D274906069488-140609-dumb-dumber-tease.jpg"></img>
    </div>

    </div>

    
  );
}
/* <Auth setUser={setUser} setIsAuthenticated={setUser}/>  maybe try this later     */  
// function LogInButton(props){
//     return (
//       <input className="
//       bg-slate-600
//       text-white 
      
//       px-3
//       py-1
//       rounded
//       hover:bg-blue-600
//       " type="submit" value="Login">{props.children}</input>
//     )
//   }
// function LogInButton(props){
//     return (
//       <input className="
//       bg-slate-600
//       text-white 
      
//       px-3
//       py-1
//       rounded
//       hover:bg-blue-600
//       " type="submit" value="Login">{props.children}</input>
//     )
//   }

export default Login;
