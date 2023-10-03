import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'



export default function Register() {

  const { createUser } = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
  const form = new FormData(e.target);

  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const photoURL = form.get('photo')


  // create user with email and password 
  createUser(email, password)
  .then(result => console.log('User created successfully'))
  .catch(error => console.log(error.message))

  }
  

  return (
    <>
    <Navbar/>

    <div className="hero h-[85vh] bg-base-200">
    <div className="hero-content flex-col w-[360px] md:w-[420px]">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-red-500 font-bold"> Please Register !</h1>
      </div>
      <div className="rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="p-6">


        <form onSubmit={handleRegister}>
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered" name="name" />
          </div>

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
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input type="text" placeholder="Enter Photo URL" className="input input-bordered" name="photo" />
          </div>

            <div>
                <h4 className="text-sm font-semibold"> Already Have An Account? <Link to='/login'> <span className="text-orange-500 hover:underline"> Login</span></Link> </h4>
            </div>

           
            <div className="flex justify-evenly gap-5 mt-4">
                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer"  > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Google</p> </div>

                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer"  > <FaGithub className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Github</p> </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-gray-50 hover:bg-rose-500" type="submit"> Register </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  </>
  )
}
