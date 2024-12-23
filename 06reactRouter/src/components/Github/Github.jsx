import React, { useEffect, useState } from 'react'
import {useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/mdkawsar-a")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data)
        
    //   })
    // }, [])
    
    
  return (

    <div className='flex flex-row-reverse gap-4 items-center justify-center max-w-7xl mx-auto text-center text-3xl bg-gray-600 m-4 p-4 text-white'>Github Followers: {data.followers} 
    <img className='rounded-full' width={150} src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github

export const githubFecthInfo = async () => {
    const respons = await fetch("https://api.github.com/users/mdkawsar-a")
    return await respons.json()
}
