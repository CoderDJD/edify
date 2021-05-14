import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { XSquare, LogIn } from "react-feather";
import { useAuth } from "../contexts/auth";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = await signIn({ email, password });
    if (error)
      alert("Error in authentication, might be on your side / on our side.");
    else history.push("/");
  }
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
      <section className="bg-accent flex flex-col m-auto p-4 rounded-md sm:w-400 bg-gray-300 col-end-2 md:col-start-2 row-start-2 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-green-300 font-bold">Welcome</h1>
          <p className="flex-wrap text-md text-green-300">
            By Signing In, you agree to our{" "}
            <a
              href="https://github.com/coderdjd/edify/blob/prod/TOS.md"
              className="text-main font-bold focus:outline-none focus:ring"
            >
              Terms of Services
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/coderdjd/edify/blob/prod/PP.md"
              className="text-main font-bold focus:outline-none focus:ring"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <form
          className="flex flex-col gap-2 self-center w-3/5"
          onSubmit={handleSubmit}
        >
          <section className="bg-main p-2 rounded-md">
            <input
              id="input-email"
              type="email"
              placeholder="Email"
              className="w-full h-full placeholder-accent bg-main focus:outline-none focus:ring"
            />
          </section>
          <section className="bg-main p-2 rounded-md">
            <input
              id="input-password"
              type="password"
              placeholder="Password"
              className="w-full h-full placeholder-accent bg-main focus:outline-none focus:ring"
            />
          </section>
          <button
            type="submit"
            className="bg-main flex gap-2 text-accent rounded-md p-2 self-center focus:outline-none focus:ring"
          >
            <LogIn />
            Sign In
          </button>
        </form>
        <p className="text-main">
          Don't have an account?{" "}
          <Link to="/sgup" className="text-green-300 font-bold">
            Sign Up!
          </Link>
        </p>
      </section>
    </div>
  );
}
