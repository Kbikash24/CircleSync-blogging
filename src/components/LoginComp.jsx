import React, { useState } from "react";
import { LoginApi,GoogleLoginApi } from "../AuthApi/LoginApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";


function LoginComp() {
  const navigate=useNavigate()
  const [credential, setCredential] = useState({ email:"", password:"" });
  const login = async() => {
    try {
      let res =await LoginApi(credential.email, credential.password);
      toast.success("Login Sucess")
      localStorage.setItem('userEmail',res.user.email)
      setCredential({email:'',password:''});
      navigate('/home')
    } catch (err) {
        
      toast.error("Invalid Account!!")
      console.log('error')
      
    }
  };

  const googleLogin=()=>{
    const res=GoogleLoginApi();
    console.log(res)
  }

  return (
    <div class="">
    <div className="flex justify-center items-center h-screen bg-[url('/LoginLogo.jpg')] bg-cover bg-center ">
      <div className=" px-10 py-10 rounded-xl border-2  shadow-lg bg-transparent shadow-slate-400 ">
        <div className="flex flex-col items-start">
          <h1 className="text-center text-[25px] text-slate-600 font-sans  font-bold   ">
            Login
          </h1>
          <p className="mb-5 text-[11px] text-slate-400">
            Stay updated on your preffered world
          </p>
        </div>

        <div>
          <input
            type="email"
            value={credential.email}
            name="email"
            className=" mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none border-[1px]"
            placeholder="Email"
            onChange={(e) =>
              setCredential({ ...credential, email: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            value={credential.password}
            className=" mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none border-[1px]"
            placeholder="Password"
            onChange={(e) =>
              setCredential({ ...credential, password: e.target.value })
            }
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            className="bg-[#0A78D9] w-full text-white  hover:shadow-xl px-2 py-2 rounded-full  "
            onClick={login}
          >
            Login
          </button>
        </div>
        <div className="text-center text-[12px] text-gray-400 mb-2"><p>Or login with</p></div>
        <div className=" flex justify-center border-[2px] rounded-full mb-3 hover:shadow-lg ">
            <img src="/google.png" className="w-[40px]"></img>
          <button
            className=" w-full text-gray-600   py-2 rounded-full"
            onClick={googleLogin}
          >
            Login with Google
          </button>
        </div>
        <div className="text-[13px] text-center  mb-2 text-gray-500"><p>Forgot password?</p></div>
        <div className="text-center p-2 cursor-pointer">
          <h2 className="text-[#0A78D9]">Not a member?<Link className=' text-pink-500 hover:font-bold' to={'/signup'}>Signup now</Link></h2>
        </div>
      </div>
    </div></div>
  );
}

export default LoginComp;
