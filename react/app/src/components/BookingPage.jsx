import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css';
import { getLogindata } from '../toolkit/Slice';
export default function BookingPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation()
    const [theater, setTheater] = useState("");
    const [show, setShow] = useState("");
    console.log(state);
    const [seats, setSeats] = useState([{ id: 1, value: 0, seat: "seat" }, { id: 2, value: true, seat: "seat" }, { id: 3, value: 0, seat: "seat" }, { id: 4, value: 0, seat: "seat" }, { id: 5, value: 0, seat: "seat" }, { id: 6, value: 0, seat: "seat" }, { id: 7, value: 0, seat: "seat" }, { id: 8, value: 0, seat: "seat" }]);
    const [rows, setRows] = useState([{ id: 1, value: "A" }, { id: 2, value: "B" }, { id: 3, value: "C" }, { id: 4, value: "D" }, { id: 5, value: "E" }, { id: 6, value: "F" }, { id: 7, value: "G" }, { id: 8, value: "H" }]);
    //const [state.sold, setstate.sold] = useState(["A3", "B4", "D7", "H8", "F7"])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [date, setDate] = useState("");
    //const [state.price, setstate.price] = useState(1);
    const [c, setC] = useState(0);
    const handleClickA = (val) => {
        if (!val) {
            setCount(selectedSeats.length - c + 1);
            setTotal((selectedSeats.length - c + 1) * state.price);
        }
        else {
            setC(c + 1);
        }
    }
    const handleClickS = (val) => {
        if (!val) {
            setCount(selectedSeats.length - c - 1);
            setTotal((selectedSeats.length - c - 1) * state.price);
        }
        else {
            setC(c - 1);
        }
    }
    const ticketPop = () => {
        console.log("date", date)
        const selected = new Date(date);
        const start = new Date(state.startdate);
        const end = new Date(state.enddate);
        console.log("selcted", selected, "start", start, "end", end);
        if (count !== 0) {
            if (selected >= start && selected <= end) {
                if (theater !== "") {
                    if (show !== "") {
                        alert(selectedSeats + " were booked of worth " + total + " for theater " + theater + " and show timing is " + show);
                        dispatch(getLogindata());
                        navigate("/");
                    }
                    else {
                        alert("Please select a show");
                    }
                }
                else {
                    alert("Please select a theater");
                }
            }
            else {
                alert("select a date in between " + state.startdate + " and " + state.enddate);
            }
        }
        else {
            alert("Please select seats");
        }
    }
    return (
        <div className='body'>
            <div>
                <div className="single-container">
                    <label>Select Date:</label>
                    <input type="date" id="single" name="birthday" onChange={(e) => setDate(e.target.value)} />
                    <label>Select Theater:</label>
                    <select id="single" value={theater} onChange={(e) => setTheater(e.target.value)}>
                        <option value="">Select Theater</option>
                        {
                            state.theaters.map((theater) => {
                                return (
                                    <option key={theater} value={theater}>{theater}</option>
                                )
                            })
                        }
                    </select>
                    <label>Select Show:</label>
                    <select id="single" value={show} onChange={(e) => setShow(e.target.value)}>
                        <option value="">Select Show </option>
                        {
                            state.shows.map((show) => {
                                return (
                                    <option key={show} value={show}>{show}</option>
                                )
                            })
                        }
                    </select>
                </div>
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
            <div className='container-single'>
                <div className='screen-book'></div>
                {
                    rows.map((row) => {
                        return (<div className='row-single' key={row.id}>
                            {seats.map((seat) => {
                                return (<div className={selectedSeats.includes(row.value + seat.id) && !state.sold.includes(row.value + seat.id) ? 'seat selected' : state.sold.includes(row.value + seat.id) ? 'seat sold' : seat.seat} onClick={(e) => { selectedSeats.includes(row.value + seat.id) ? setSelectedSeats(selectedSeats.filter(s => !s.includes(row.value + seat.id))) : setSelectedSeats([...selectedSeats, row.value + seat.id]); selectedSeats.includes(row.value + seat.id) ? handleClickS(state.sold.includes(row.value + seat.id)) : handleClickA(state.sold.includes(row.value + seat.id)) }} key={row.value + seat.id}></div>)
                            })}
                        </div>)
                    })
                }
            </div>
            <p className='text'>
                You have selected <span id="count">{count}</span> seats for a price of Rs. <span id="total">{total}</span>
            </p>
            <center>
                <button className='btn btn-primary' onClick={() => ticketPop()}>Book Ticket</button>
            </center>
        </div>
    )
}