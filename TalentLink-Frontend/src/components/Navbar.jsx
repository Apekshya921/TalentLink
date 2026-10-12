import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="relative flex mt-4 items-center justify-between px-10">
      
      <h1 className="text-3xl font-bold">TalentLink</h1>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-xl">
       <Link to="/">Home</Link>
<Link to="/jobs">Find Jobs</Link>
<Link to="/companies">Companies</Link>
        </div>

      <div className="flex gap-6 ">
        <Link to='/login'className="border border-gray-400 px-3 py-1 rounded-sm font-semibold cursor-pointer">Login</Link>
        <Link to="/Aboutjob" className="border border-gray-400 px-3 py-1 rounded-sm font-semibold bg-[#656D3F] text-amber-50 cursor-pointer" >Post a Job </Link>
      </div>

    </div>
  )
}

export default Navbar