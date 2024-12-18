import React from 'react'

function Card({username, clickme="Visit me"}){
    
    return(
    <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-2">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/23230893/pexels-photo-23230893/free-photo-of-woman-with-camera-in-snowy-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> {username} </div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"> {clickme} </a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>

    </>
    )
}

export default Card
