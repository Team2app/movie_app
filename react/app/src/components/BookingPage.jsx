import React, { useState } from 'react';
import '../styles/BookingPage.css';
export default function BookingPage() {
    const [seats,setSeats] = useState([{id:1, value:0, seat:"seat"},{id:2, value:true, seat:"seat"},{id:3, value:0, seat:"seat"},{id:4, value:0, seat:"seat"},{id:5, value:0, seat:"seat"},{id:6, value:0, seat:"seat"},{id:7, value:0, seat:"seat"},{id:8, value:0, seat:"seat"}]);
    const [rows,setRows] = useState([{id:1, value:"A"},{id:2, value:"B"},{id:3, value:"C"},{id:4, value:"D"},{id:5, value:"E"},{id:6, value:"F"},{id:7, value:"G"},{id:8, value:"H"}]);
    const [selseats, setSelseats] = useState(["A3", "B4", "D7", "H8", "F7"])
    const [selectedSeats,setSelectedSeats] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState(1);
    const handleClickA = () =>{
        setCount(selectedSeats.length + 1);
        setTotal((selectedSeats.length + 1)*price);
    }
    const handleClickS = () =>{
        setCount(selectedSeats.length - 1);
        setTotal((selectedSeats.length - 1)*price);
    }
    return (
        <div className='body'>
            <div className="single-container">
                <label>Select a movie:</label>
                <select id="single" onClick={(e)=>{ setPrice(e.target.value) }}>
                    <option value="0" >Select Movie</option>
                    <option value="220" >Godzilla vs Kong</option>
                    <option value="330" >Radhe</option>
                    <option value="440" >RRR</option>
                    <option value="110" >F9</option>
                </select>
            </div>
            <ul className='showcase'>
                <li>
                    <div className='seat'></div>
                    <h4>Available</h4>
                </li>
                <li>
                    <div className='seat selected'></div>
                    <h4>Selected</h4>
                </li>
                <li>
                    <div className='seat sold'></div>
                    <h4>Sold</h4>
                </li>
            </ul>
            <div className='container'>
                <div className='screen'></div>
                {
                    rows.map((row)=>{
                        return (<div className='row' key={row.id}>
                            {seats.map((seat)=>{
                                return (<div className={selectedSeats.includes(row.value+seat.id) && !selseats.includes(row.value+seat.id) ?'seat selected' : selseats.includes(row.value+seat.id) ? 'seat sold' : seat.seat} onClick={(e)=>{ selectedSeats.includes(row.value+seat.id) ?setSelectedSeats(selectedSeats.filter(s=>!s.includes(row.value+seat.id))) :setSelectedSeats([...selectedSeats,row.value+seat.id]); selectedSeats.includes(row.value+seat.id) ? handleClickS() : handleClickA(); console.log(e)}} key={row.value + seat.id}></div>)
                            })}
                        </div>)
                    })
                }
            </div>
            <p className='text'>
                You have selected <span id="count">{count}</span> seats for a price of Rs. <span id="total">{total}</span>
            </p>
        </div>
    )
}