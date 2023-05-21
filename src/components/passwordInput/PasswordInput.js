import React, { useState } from 'react'
import "./passwordinput.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const PasswordInput = ({value, placeholder, onChange, onPaste, name}) => {

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };
    return (
    <div>
           <div  className='input-group-prepend' >
        <div className="input-group mb-2">
          <input
           type={showPassword ? "text" : "password"} 
           placeholder={placeholder}
           className="form-control" 
           name={name}
           value={value}
           onChange={onChange}
           onPaste={onPaste} 
           />
     
 
        <span className='input-group-text bg-transparent border-left-0' onClick={togglePassword}>
           {showPassword ? (<i className="bi bi-eye fs-12 " />) : (<i className="bi bi-eye-slash fs-12" />)}
           </span>
        </div>
           
        </div>
    </div>
  )
}

export default PasswordInput;