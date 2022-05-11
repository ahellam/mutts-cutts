import React from 'react'


function Home() {
  return (
    <div className="p-1 shadow-xl border-2">
        <h1 className="text-3xl text-center bg-slate-600 text-white border-2 ">{`Welcome to Mutts Cutts`}</h1>
        <p className="font-semibold text-center">Groom your dogs the dumb way</p>
        <img className="rounded-md object-cetner p-1" src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2014/June/140609/2D274906069488-140609-dumb-dumber-tease.jpg"></img>
    </div>
  )
}

export default Home