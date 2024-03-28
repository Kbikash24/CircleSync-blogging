import React, { useState } from "react";
import { SignUpApi } from "../AuthApi/LoginApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUniqueId } from "../Helper/GetUniqueId";
import { Link, useNavigate } from "react-router-dom";
import { postUserData } from "../AuthApi/FIreStoreApi";

function SignUp() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({});
  const signup = async () => {
    try {
      let res = await SignUpApi(credential.email, credential.password);
      toast.success("Signup Sucessfull");
      postUserData({
        userId: getUniqueId(),
        name: credential.name,
        email: credential.email,
        imageLink:
        "https://i.ibb.co/nLhPgrP/pngegg.png",
      });
      navigate("/");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      toast.error("Invalid Account!!");
      console.log("erroe");
    }
  };

  return (
    <div class="">
      <div className="flex justify-center items-center h-screen bg-[url('assets\LoginLogo.jpg')] bg-cover bg-center ">
        <div className=" px-10 py-10 rounded-xl border-2  shadow-lg bg-transparent shadow-slate-400 ">
          <div className="flex flex-col items-start">
            <h1 className="text-center text-[25px] text-slate-600 font-sans  font-bold   ">
              Signup
            </h1>
            <p className="mb-5 text-[11px] text-slate-400">
              Stay updated on your preffered world
            </p>
          </div>
          <div>
            <input
              type="text"
              name="name"
              className=" mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none border-[1px]"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setCredential({ ...credential, name: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
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
              onClick={signup}
            >
              Signup
            </button>
          </div>

          <div className="text-center p-2 cursor-pointer">
            <h2 className="text-[#0A78D9]">
              Already a member?
              <Link className=" text-pink-500 hover:font-bold" to={"/"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
