import React,{useState,useEffect} from 'react'
// import Form from './Form';
// import 

const Header = ()=>  {
   const [state,setState] = useState(0);
   const [input,setInput] = useState("");
    useEffect(()=>{
     const starter= setTimeout(()=> {<h1>Hii</h1>},2000);
      return () => clearTimeout(starter);
      }, []);
    return (
        <>
        <header className='main'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='main-bg1'>
                        <div className='main-bg-items'>
                            <div className='logo'>
                                <h1><b><b><i><span>G</span></i>et</b> <span>I</span>nfo</b></h1>
                            </div>
                                <div className='nav'><a href='#'>HOME</a></div>
                                <div className='nav'><a href='#'>Services</a></div>
                                <div className='nav'><a href='#'>GAllery</a></div>
                                <div className='nav'><a href='#'>About Us</a></div>

                        </div>
                     </div>
                        <div className='main-bg2'>
                            <div className='search'>
                                <div className='search-input'>
                                    <input type="text" name="input" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='search...'></input>
                                </div>
                                <div className='search-btn'>
                                    <button type="button">SEARCH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        
     
        <div><h1 onClick={()=>setState(1)}></h1></div>
        </header>
        </>
    )
}

export default Header;
                            
