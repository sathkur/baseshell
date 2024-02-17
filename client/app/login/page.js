"use client"
import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"



export default function Login() {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    password: Joi.string().min(8).label("Password").required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({resolver: joiResolver(schema)})

  const onSubmit = (data) => {
    console.log({data});
    axios
      .post("/login")
      .then(res => {

      })
  }

    return (
        <div className='box my-10 mx-auto max-w-2xl'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg className="mx-auto h-10 w-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

          <h2 className="heading_h4 text-center">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="body1">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  className={"inputbox" + (errors.email ? " inputbox-error" : "")}
                  {...register("email")}
                />
              </div>
              <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.email?.message}</span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="link">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className={"inputbox" + (errors.password ? " inputbox-error" : "")}
                  {...register("password")}
                />
              </div>
              <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.password?.message}</span>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center button button-primary "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center ">
            Not a member?{' '}
            <a href="/signup" className="link">
              Sign up
            </a>
          </p>
        </div>
      </div>
      </div>
    );
}
