import { useState } from "react"

function App() {
  // let info = [{ name: "Jatin Dhiman", phoneNumber: "8171958099" }]
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [users, setUsers] = useState([])

  // Handle input change
  const handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  //Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //Add formData to users array;
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };


  const handleAdd = () => {

  }
  const handleDelete = () => {

  }
  const handleUpdate = () => {

  }
  return (
    <>
      <div>
        <ul>
          {
            users.map((item, index) => (
              <div key={index}>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.age}</li>
              </div>
            ))
          }
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
          <br />
          <button type="submit">Add</button>
          <button>Delete</button>
          <button>Update</button>
        </form>
      </div>
    </>
  )
}
export default App