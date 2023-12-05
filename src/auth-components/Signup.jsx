import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="flex">
        <div>Already have an account yet ?</div>
        <Link to="/signin">Sign In</Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <form className="flex flex-col w-96 gap-5">
        <input type="name" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
