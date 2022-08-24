
import React, { useState } from 'react'
import './SignUp.css';
export default function SignUp() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [checkbox, setCheckBox] = useState(false);

    const handeSubmit = (e) => {


        e.preventDefault();
        alert(`Your state values: \n 
                UserName: ${name} \n
                Password: ${password} \n
                Confirm: ${confirm} \n
                Email: ${email} \n 
              
                
                You can replace this alert with your process`);

    }


    return (
        <div className='container1'>
            <form onSubmit={(e) => handeSubmit(e)} action=' ' method='get'>
                <div className='wrapper1'>
                    <div className='main-wrapper'>
                        <div className='child wrapper'>
                            <div className='input'>
                                <label htmlFor='username'>Username:</label>
                                <input id='password' className='input-inner' onChange={(e) => setName(e.target.value)} value={name} placeholder='username' type='text' name='username' /><br />
                            </div>
                            <div className='input'>
                                <label htmlFor='email'>Email:</label>

                                <input id='uname' className='input-inner' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='username@gmail.com' type='email' name='email' required />
                            </div>
                            <div className='input'>
                                <label htmlFor='password'>Password:</label>
                                <input id='password' className='input-inner' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' type='password' name='password' /><br />
                            </div>
                            <div className='input'>
                                <label htmlFor='ConPassword'>Confirm:</label>
                                <input id='password' className='input-inner' onChange={(e) => setConfirm(e.target.value)} value={confirm} placeholder='password' type='password' name='ConPassword' /><br />
                            </div>

                            <div className='input'>
                                <div className='inner-child'>
                                    <label htmlFor='checkbox'></label>
                                    <input id='checkbox' className='input-inner' onChange={(e) => setConfirm(e.target.value)} value={checkbox} type='checkbox' name='checkbox' />Remember Me<br />
                                </div></div>
                            <div className='type'>
                                <a href='#' id='forgot'>Forgot ?</a>
                                <a href='#' id='sign-up'>Sign Up</a>
                            </div>
                            <div className='btn'>
                                <input type="submit" id='type' value='Sign Up' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}
