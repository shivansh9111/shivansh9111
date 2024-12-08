import {NavLink,Link,useNavigate} from "react-router-dom"
import React from "react";

const Navbar = () => {

  const navigate = useNavigate();
const togoLogin = () => {
  navigate('/LoginSignup')
}

  return (
    <>
      <nav className="  bg-gray-800 text-white  "> 
        <div className=" inline-block bg-gray-800 rounded-md border">
         <Link to={'/'} className="bg-zinc-950 mt-28 px-2 items-center rounded-sm  font-semibold">Nolans</Link>

        </div>
    

    
        <div className=" flex space-x-6 justify-end gap-5">
        <NavLink to={"/About"}> About Us </NavLink>
            <NavLink to={"/pricing"} className="hover:underline">Pricing</NavLink>
            <NavLink to={"/features"} className="hover:underline">Features</NavLink>
            <NavLink to={"/project"} className="hover:underline">New Project</NavLink>
            <NavLink to={"/blog" }className="hover:underline">Blog</NavLink>

          <Link to={'/login'}> <button onClick={togoLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button> </Link>
        </div>
        
        </nav>
       


    </>
  )
}

export default Navbar