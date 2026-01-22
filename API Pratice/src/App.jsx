import { useState ,useEffect} from "react";
function TestApi(){
  const [data,setData]=useState('')
  const [loading,setLoading]=useState(true)

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json)
  .then(data=>{
    setData(data)
    setLoading(flase)
  })
},[])

if (loading) return <p>Loading</p>
}