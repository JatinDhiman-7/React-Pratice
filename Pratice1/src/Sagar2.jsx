import React from 'react';

function Sagar2({ main, deleteItems, UpdateItem }) {

    return (
        <>
            <div >
                {main.map((item, index) => (
                    <div key={index} className='Card'>
                        {/* {console.log(item)} */}
                        {/* {console.log(index)} */}
                        <p><strong>Firstname:</strong>{item.Firstname}</p>
                        <p><strong>Lastname:</strong>{item.Lastname}</p>
                        <p><strong>Gmail:</strong>{item.Gmail}</p>
                        <p><strong>Number:</strong>{item.Number}</p>
                        <button onClick={() => { deleteItems(index) }}>delete</button>
                        <button onClick={() => { UpdateItem(index) }}>Update</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Sagar2