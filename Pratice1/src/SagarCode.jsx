import { useState } from "react";
import Sagar2 from "./Sagar2";

function SagarCode() {
    let [data, setData] = useState({
        Firstname: "",
        Lastname: "",
        Gmail: "",
        Number: "",
    });
    const [edit, setEdit] = useState(null);
    let [main, setMain] = useState([]);
    function hanldechange(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    console.log(edit)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit != null) {
            let old = main[edit]
            let { Firstname, Lastname, Gmail, Number } = old
            let newupdate = {
                Firstname: data.Firstname,
                Lastname: data.Lastname,
                Gmail: data.Gmail,
                Number: data.Number
            }
            console.log("hi")
            setData(main[edit] = newupdate);
            setData({
                Firstname: "",
                Lastname: "",
                Gmail: "",
                Number: "",
            })

        } else {
            setMain([...main, data]);
            setData({
                Firstname: "",
                Lastname: "",
                Gmail: "",
                Number: "",
            })
        }
        ;

    };
    function deleteItems(index) {
        setMain((prev) => prev.filter((_, i) => i != index));
    }

    console.log(main)
    function UpdateItem(index) {
        const { Firstname, Lastname, Gmail, Number } = main[index]
        setData({
            Firstname: Firstname,
            Lastname: Lastname,
            Gmail: Gmail,
            Number: Number,
        })
        setEdit(index)
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter name"
                    name="Firstname"
                    value={data.Firstname}
                    onChange={hanldechange}
                />
                <br />
                <label>Enter your last name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter last name"
                    name="Lastname"
                    value={data.Lastname}
                    onChange={hanldechange}
                />
                <br />
                <label>Enter your gmail</label>
                <br />
                <input
                    type="gmail"
                    placeholder="Enter gmail"
                    name="Gmail"
                    value={data.Gmail}
                    onChange={hanldechange}
                />
                <br />
                <label>Phone Number</label>
                <br />
                <input
                    type="number"
                    placeholder="Enter phone number"
                    name="Number"
                    value={data.Number}
                    onChange={hanldechange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>

            <Sagar2 main={main} deleteItems={deleteItems} UpdateItem={UpdateItem}
            />
        </>
    );
}

export default SagarCode;