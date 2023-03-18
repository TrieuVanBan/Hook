import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

const useEffectt = (props: Props) => {

  const tabs = ["posts", "todos", "albums"]
  const [users, setUsers] = useState([])
  const [type, setType] = useState("posts")

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => setUsers(response.data.slice(0, 10)));
  }, [type]);
  console.log(1);
  

  return (
    <>
      <div>useEffect</div>
      {tabs.map((tab) => (
        <button key={tab} style={type === tab ? {background:"blue", color:"while"} : {}} onClick={() => setType(tab)}>{tab}</button>
      ))}
      <ul>
        {users.map((item:any, index) => (
          <li key={index} style={{color: "yellow"}}>{item.title}</li>
        ))}
      </ul>
    </>

  )
}

export default useEffectt