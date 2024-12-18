'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Layout = ({ children }) => {

  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      {
        pathName !== '/login/loginteacher' ?
          <ul className='flex items-center justify-center gap-x-40 pb-10 bg-blue-300'>
            <h1 className='font-bold text-2xl'>Login Navbar</h1>
            <li><Link href='/login'>Login Main</Link></li>
            <li><Link href='/login/loginstudent'>Student Login</Link></li>
            <li><Link href='/login/loginteacher'>Teacher Login</Link></li>
          </ul> : <Link href='/login'>Go to Main Login Page</Link>
      }
      {children}
    </div>
  )
}

export default Layout
