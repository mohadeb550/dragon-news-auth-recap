import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'



export default function Login() {


  const handleLogin = (e) => {

  }

  return (
    <>
        <Navbar/>

        <div className="hero h-[70vh] bg-base-200">
    <div className="hero-content flex-col w-[360px] md:w-[420px]">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-red-500 font-bold">Login now!</h1>
      </div>
      <div className="rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="p-5">


        <form onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name="email" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered" name="password" />
            <label className="my-2">
              <Link to="/forgot-password" className="text-xs text-orange-600 hover:underline">Forgot password?</Link>
            </label>

            <div>
                <h4 className="text-sm font-semibold"> Don't Have An Account? <Link to='/signUp'> <span className="text-orange-500  hover:underline"> Sign Up </span></Link> </h4>
            </div>

            <div className="flex justify-evenly gap-5 mt-4 ">
                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer"  > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Google</p> </div>

                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer" > <FaGithub className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Github</p> </div>
            </div>

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-gray-50 hover:bg-rose-500" type="submit"> Login </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
    </>
  )
}
