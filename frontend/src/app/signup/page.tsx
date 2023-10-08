"use client"
import React, { useState } from 'react'
import { Input } from "@nextui-org/input";

import { Button } from "@nextui-org/button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string, value: string } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(event)
    if (event.currentTarget.getAttribute("name") === "oauth")
      return
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    }

    const response = await fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })

    const user = await response.json()
    // login after signup, redirect to '/' instead of previous page
    if (user) {
      console.log("add login logic")
    }
    console.log(user)
  }

  const signUpWithOAuth = async (provider: string) => {
    // change callbackUrl to a "finish signup" page?
    try {
      console.log("add oauth logic")
    } catch (error) {
      // handle OAuthAccountNotLinked error with "You are already 
      // logged in" notification?
      console.log(error)
    }
  }

  return (
    <div className="flex-col m-auto sm:shadow-md w-7/8 sm:w-1/2">
      <h1 className="text-2xl text-center mt-24 p-8 mb-3">Register for Chingu Auctions</h1>
      <form className="flex flex-col gap-3 m-10 p-8 md:w-7/12 mx-auto" onSubmit={handleSignup}>
        <Input

          variant="bordered"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <Input

          variant="bordered"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          variant="bordered"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button color='primary' type="submit" variant="shadow">
          Sign Up
        </Button>
        <Button color='primary' type="button" variant="shadow" onClick={() => signUpWithOAuth('google')} name="oauth">
          Sign up with Google
        </Button>
        <Button color='primary' type="button" variant="shadow" onClick={() => signUpWithOAuth('github')} name="oauth">
          Sign up with Github
        </Button>
      </form>
    </div>
  )
}

export default SignUp
