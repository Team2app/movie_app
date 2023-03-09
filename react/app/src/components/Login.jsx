import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getLogindata, getUserAction } from '../toolkit/Slice';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.movie.users);
    console.log(user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        const newuser = user.filter((use)=> use.email === email);
        console.log("user is",newuser)
        if(newuser){
            if(newuser[0].password === password){
                dispatch(getLogindata());
                navigate("/");
            }
            else{
                setError("Wrong Password");
                setTimeout(()=>{
                    setError("");
                },2000)
            }
        }
        else{
            setError("Wrong Email");
            setTimeout(()=>{
                setError("");
            },2000)
        }
    }
    useEffect(() => {
        dispatch(getUserAction());
        console.log('called')
    },[])
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
                        <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Login</button>
                    </center>
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">Don't have an account ?</label>
                        <Link to='/sign' >Sign up</Link>
                    </div>
                    {/* <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">forgot password ?</label>
                        <Link to='/forgot'  >Forgot password</Link>
                    </div> */}
                    <div>
                        {error && <div className='alert alert-danger'>{error}</div>}
                    </div>
                </form>
            </div>
        </div>
    )
}
