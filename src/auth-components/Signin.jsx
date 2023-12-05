import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <div>Sign in to your account</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex gap-2">
        <div>Don t have an account yet?</div>
        <Link to="/signup">
          <div> Sign up.</div>
        </Link>
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

export default Signin;
