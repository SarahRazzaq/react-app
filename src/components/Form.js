import {useState} from 'react';
import React from 'react';

const Form = () => {
  const [input, setInput] = useState({
      name: "",
      email: "",
      message: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput({...input, [name]: value});
  };
  const successMessage = (e) => {
    e.preventDefault();

    setMessage([...message, {
        name: input.name,
        email: input.email,
        message: input.message,
    }]);

    setInput({
        name: "",
        email: "",
        message: "",
    });
  };
  const [message, setMessage] = useState([]);
    return (
        <>
        <div className="container">      
            <div className='form-container'>
                <form onSubmit={successMessage}>
                    <label className='form-label'>Enter your name:</label><br/>
                    <input
                    className="form-inputs" 
                    type="text" 
                    value={input.name} 
                    name="name" 
                    placeholder="Enter your name.." 
                    onChange={handleChange}/><br/>
                    <label className='form-label'>Enter your email:</label><br/>
                    <input
                    className="form-inputs" 
                    type="email"
                    value={input.email}  
                    name="email" 
                    placeholder="Enter your email..." 
                    onChange={handleChange}/><br/>
                    <label className='form-label'>Enter your message:</label><br/>
                    <textarea
                    className="form-inputs" 
                    value={input.message}  
                    name="message" 
                    rows={5}
                    placeholder="Enter your message" 
                    onChange={handleChange}/><br/>
                    <button  className="form-input-btn" type="submit" onClick={successMessage} >Send</button>
                    {message.map((message) => ( 
                    <div className="message-box">
                        <p>Your submitted message:</p>
                        <p>{message.name}</p>
                        <p>{message.email}</p>
                        <p>{message.message}</p>
                    </div>
                    ))}
                </form>
            </div>
        </div>
        
        
        </>
  )
}

export default Form;
