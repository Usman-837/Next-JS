"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    return (
      router.push(name)
    )
  }

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link><br/><br/>
      <Link href="/login">Go to Login Page</Link><br/><br/>
      {/* <button onClick={() => router.push('/about')}>Go to About</button><br/><br/> */}
      {/* <button onClick={() => router.push('/login')}>Go to login</button> */}
      <button onClick={() => navigate('/about')}>Go to About</button><br/><br/>
      <button onClick={() => navigate('/login')}>Go to login</button>
    </>
  );
}
