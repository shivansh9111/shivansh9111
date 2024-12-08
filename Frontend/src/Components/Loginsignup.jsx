import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const [loginInfo,setloginInfo]= useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
   const {name,value}=e.target;
   console.log(name,value)
   const copyLogininfo ={...loginInfo}
   copyLogininfo[name]=value;
   setloginInfo(copyLogininfo)
  }

  
 
  return (

    <div className="container justify-center ">
      <div className="form-container
       m-8 p-4 justify-center  border-8">
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <form  >
          {!isLogin && (
            <>
              <div className="input-field p-2 border-2 ">
                <label htmlFor="name">Name</label>
                <input  className="w-80" type="text" id="name" placeholder="Enter your name" />
              </div>
            </>
          )}
          <div className="input-field p-2 border-2">
            <label htmlFor="email">Email</label>
            
            <input className="w-80" type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-field p-2 border-2">
            <label htmlFor="password">Password</label>
            <input 
            className="w-80"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="toggle"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
