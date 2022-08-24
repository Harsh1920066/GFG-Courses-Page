
import React ,{useState} from 'react'
import './SignUp.css';
export default function Login() {

const [state,setState] = useState({
    eamil:'',
    password: ''
})
const handeSubmit =(e)=>{


    e.preventDefault();
}


    return (
        <div className='container1'>
            <form onSubmit={(e)=>handeSubmit(e)} action=' ' method='post'>            <div className='wrapper1'>
                <div className='main-wrapper'>
                    <div className='child wrapper'>
                    <div className='input'>
                        <label htmlFor='username'>Email:</label>

                        <input id='uname'  className='input-inner'  onChange={(e)=>setState(e.target.value)}  value={state.email} placeholder='username@gmail.com' type='email' name='username' />
                    </div>
                    <div className='input'>
                        <label htmlFor='Passsword'>Password:</label>
                        <input id='password' className='input-inner' onChange={(e)=>setState(e.target.value)} value={state.password}  placeholder='password' type='password' name='password' /><br />
                    </div>
                    <div className='type'>
                        <a href='#' id='forgot'>Forgot ?</a>
                        <a href='#' id='sign-up'>Sign Up</a>
                    </div>
                     <div className='btn'>
                   <input type="submit" id='type' value='Log In'/>
                    </div>
                </div>
            </div>
            </div>
            </form>
        </div>
       
    );
}
