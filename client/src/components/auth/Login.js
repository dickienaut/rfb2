import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext.js'
import AlertContext from '../../context/alert/alertContext.js'

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/')
    }

    if(error === 'Invalid credentials') {
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [error, isAuthenticated, props.history])


  const { email, password } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger')
    } else {
      login({
        email,
        password
      })
    }
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
      <input type='submit' className="btn btn-primary btn-block" value="Log In!" />
    </form>
    </div>
  );
}

export default Login;
