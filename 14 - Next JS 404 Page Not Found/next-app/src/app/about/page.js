import React from 'react'
import Link from "next/link"

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <Link href='/'>Go to Home Page</Link><br/><br/>
      <Link href='/about/aboutstudent'>Go to About Student Page</Link><br/><br/>
      <Link href='/about/aboutcollege'>Go to About College Page</Link>
    </div>
  )
}

export default About
