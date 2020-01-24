import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('reister submit')
  }

  return (
    <div className='form-container'>
    <h1>
      Log <span className="text-primary">In</span>
    </h1>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={email} onChange={onChange}/>
      </div>
      <div className="form-group">
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={password} onChange={onChange}/>
      </div>
      <input className="btn btn-primary btn-block" value="Log In!" />
    </form>
    </div>
  );
}

export default Login;
