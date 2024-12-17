'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter();
  
  const navigation = (name) => {
    return (
      router.push('/login/' + name)
    )
  } 

  return (
    <div>
        <h1>This is Login Page</h1>
        <Link href='/'>Go to Home Page</Link><br/><br/>
        <button onClick={() => navigation('loginstudent')}>Go to Student Login</button><br/><br/>
        <button onClick={() => navigation('loginteacher')}>Go to Teacher Login</button>
    </div>
  )
}

export default Login
