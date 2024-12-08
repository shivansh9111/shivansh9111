import { Link, NavLink, useNavigate } from "react-router-dom"




const Home = () => {
const navigate= useNavigate();



  return (
<>
<div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8"> nolan
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"} className="mr-4">
              <img src="/logo.svg" alt="Nolan Logo" className="w-12 h-12" />
              </Link>
            <h1 className="text-2xl font-bold">NOLAN BLOG</h1>
          </div>
          
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-4">
            Unlocking the secrets of successful filmmaking
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">STAND OUT</h3>
              <img src="/stand-out.jpg" alt="Stand Out" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">How to Build a Filmmaker Portfolio That Truly Stands Out</h3>
              <p className="text-gray-400 mb-4">
                Learn how to create a portfolio that showcases your unique style and vision as a filmmaker. Get tips on how to choose the right projects, write a compelling bio, and create a visually stunning website that will make you stand out in the industry. </p>
                
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          </div>
        </div>
      </div>
      <div>
      </div>
      
    </div>
    

    
</>
  )
}

export default Home