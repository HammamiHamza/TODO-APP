import React, { useState, useEffect } from 'react'
export default function ApiComponent() {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect (()=>{

    const fetchData= async ()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                setLoading(false)
                throw new Error('Network error')
            }
            const result = await response.json()
            console.log("data", response)
            setLoading (false)
            setData(result)
        }
        catch (error){
            setError(error)
        }
    }
    fetchData()
},[]
);
if(loading){
    return <div>loading ...</div>
}
if(error){
    return <div>Error:{error}</div>


}
return(
    <div>
        <h1>Liste des posts</h1>
        {data.map((post)=>(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <button>Supprimer</button>
                </div>

        )
        )}
    </div>
)
  
}

 
