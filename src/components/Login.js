
import Header from "./Header";
import { useState, useRef } from "react";
import { checkdata } from "../utils/validate.js";
const Login = ()=>{
    const [isSignin,setIsSignIn] = useState(true);
    const [errormesage,setErrorMessage] = useState(null);
    function toggleSignInForm(){
        setIsSignIn(!isSignin)
    }
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    function handleClick(){
        const message = checkdata(email.current.value,password.current.value,username.current.value,isSignin);
        setErrorMessage(message)
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="background"/>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className="absolute bg-black w-3/12 my-36 mx-auto p-12 left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-white text-2xl pb-2">{ isSignin ? "Sign In" : "Sign Up"}</h1>
                {!isSignin && <input type="text" placeholder="Username" className="bg-gray-700 p-4 my-4 w-full" ref={username}></input>}
                <input 
                type="email" 
                className="bg-gray-700 p-4 my-4 w-full" 
                placeholder="Email"
                ref={email}></input>
                <input 
                type="password"
                className="bg-gray-700 p-4 my-4 w-full"
                placeholder="Password"
                ref={password}
                ></input>
                <p className="font-bold text-red-600 text-lg">{errormesage}</p>
                <button className="p-4 my-6 bg-red-600 w-full" onClick={handleClick}>{ isSignin ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignin ? "New to Netflix? Sign Up Now" : "Already a User, Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;