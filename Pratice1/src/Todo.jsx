
import { useState } from 'react'
function Todo() {
    const [list, setlist] = useState([]);
    const [edit, setedit] = useState("");

    const handleAdd = () => {

    }
    return (
        <>
            <h1>Todo List</h1>
            <div>
                <input type="text" />
                <button>Add Task</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Make Roti</td>
                        <td>10/1/2004</td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                    <tr>
                        <td>Make Roti</td>
                        <td>10/1/2004</td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Todo;