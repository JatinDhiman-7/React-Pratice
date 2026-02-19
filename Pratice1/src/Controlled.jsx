import { useState } from "react"
function Controlled() {
    const [name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [data, setdata] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !Email) return ;
        setdata(prev=>[...prev, { name, Email }]);
        setName("")
        setEmail("")
    }
    console.log(data)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                <button type="submit" >Submit</button>
            </form>
            {data && (
                <div><h3>Submitted Data:</h3>
                    {data.map((item) => (<>
                        <p>Name:{item.name}</p>
                        <p>Email:{item.Email}</p></>))}
                </div>)}
        </>
    )
}
export default Controlled;