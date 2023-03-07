import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <div style={{ width: "400px", textAlign: "center", alignItems: "center", margin: "auto", display: "flex" }}>
                <form>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => handleEmail(e)} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => handlePassword(e)} />
                    </div>
                    <center>
                        <button type="button" className="btn btn-primary">Login</button>
                    </center>
                </form>
            </div>
        </div>
    )
}
