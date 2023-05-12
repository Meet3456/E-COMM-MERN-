import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
      Headers: {
        "Content-type": "application/json",
      },
    });
     
    result = await result.json();
    console.warn(result);
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className='main-input'>
      <h2>SignUp</h2>
      <input
        className='input'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
      />

      <input
        className='input'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
      />

      <input
        className='input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'
      />

      <button onClick={collectData} className='input-button' type='button'>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
