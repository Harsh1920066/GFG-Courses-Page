import React, { useState } from 'react'
import './main.css'
import Validation from "./Validation";
const  SignUp1 = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [errors,setErrors] = useState({});
  const handleSubmit=(e) =>{
     e.preventDefault();
     setErrors(Validation(values)); 
     alert(`Your Data are\n   UserName: ${values.fullname} 
   Email: ${values.email}
   Passwod: ${values.password}`)                                      
  }
  const handleChange =(e)=>{
       setValues({
         ...values,
         [e.target.name]: e.target.value
       })
  }
    return (
    <div>
      <div className='container' >
        <div className='app-wrapper' >
          <div className='title'>
            <h2>
              Create Account
            </h2>
          </div>
          <form className='form-wrapper'>
            <div className='name'>
              <label className='label'>Full Name</label>
              <input className='input' type='text' name='fullname' value={values.fullname}  onChange={handleChange}></input>
              {errors.fullname && <p className='error'>{errors.fullname}</p>}
            </div>
            <div className='email'>
              <label className='label'>Email</label>
              <input className='input' type='email' name='email'  value={values.email} onChange={handleChange}></input>
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
              <label className='label'>Password</label>
              <input className='input' type='password' name='password' value={values.password} onChange={handleChange}></input>
               {errors.password && <p className='error'>{errors.password}</p>}
            </div>
          <div>
            <button className='submit' type='submit' onClick={(e)=>handleSubmit(e)}>Sign Up</button>
          </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export default  SignUp1;