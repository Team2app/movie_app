import React from 'react';
import '../styles/Home.css'
export default function Signup() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="button" className="btn btn-primary">Sign up</button>
      </form>
    </div>
  )
}