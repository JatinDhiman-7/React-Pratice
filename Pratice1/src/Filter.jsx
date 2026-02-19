// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
function Filter() {
    const foodItems = [
        // 🍕 Pizza
        { id: 1, name: "Margherita Pizza", category: "Pizza", price: 199, rating: 4.2, veg: true },
        { id: 2, name: "Farmhouse Pizza", category: "Pizza", price: 299, rating: 4.5, veg: true },
        { id: 3, name: "Pepperoni Pizza", category: "Pizza", price: 349, rating: 4.6, veg: false },
        { id: 4, name: "Cheese Burst Pizza", category: "Pizza", price: 399, rating: 4.7, veg: true },
        // 🍔 Burger
        { id: 5, name: "Veg Burger", category: "Burger", price: 99, rating: 4.0, veg: true },
        { id: 6, name: "Chicken Burger", category: "Burger", price: 149, rating: 4.3, veg: false },
        { id: 7, name: "Cheese Burger", category: "Burger", price: 129, rating: 4.1, veg: true },
        { id: 8, name: "Double Patty Burger", category: "Burger", price: 199, rating: 4.4, veg: false },
        // 🥤 Cold Drink
        { id: 9, name: "Coca Cola", category: "Cold Drink", price: 40, rating: 4.2, veg: true },
        { id: 10, name: "Pepsi", category: "Cold Drink", price: 40, rating: 4.1, veg: true },
        { id: 11, name: "Sprite", category: "Cold Drink", price: 40, rating: 4.0, veg: true },
        { id: 12, name: "Fanta", category: "Cold Drink", price: 45, rating: 4.1, veg: true },
        // 🥟 Momos
        { id: 13, name: "Veg Momos", category: "Momos", price: 120, rating: 4.3, veg: true },
        { id: 14, name: "Chicken Momos", category: "Momos", price: 150, rating: 4.5, veg: false },
        { id: 15, name: "Fried Momos", category: "Momos", price: 140, rating: 4.2, veg: true },
        { id: 16, name: "Tandoori Momos", category: "Momos", price: 180, rating: 4.6, veg: false }
    ];

    const [data, setdata] = useState(foodItems);
    const [filter, setfilter] = useState([]);
    useEffect(() => {
        setfilter(data)
    }, [])
    const handlefilter = (e) => {
        if (e.target.value == 'none') {
            setfilter(data)
        } else {
            let filterdata = data.filter((item) => (item.category == e.target.value))
            console.log(filterdata)
            setfilter(filterdata)
        }

    }

    return (
        <>
            <div>
                <label htmlFor="foods" >Choose a car:</label>
                <select name="" id="foods" onChange={(e) => { handlefilter(e) }}>
                    <option value="none">None</option>
                    <option value="Burger">BURGER</option>
                    <option value="Pizza">PIZZA</option>
                    <option value="Cold Drink">COLD DRINK</option>
                    <option value="Momos">MOMOS</option>
                </select>
            </div>
            <div>
                <ul>
                    {filter.map((item) =>
                    (<>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.category}</li>
                        <li>{item.price}</li>
                        <li>{item.rating}</li>
                    </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Filter