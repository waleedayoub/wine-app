import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean =
    pathname => router.pathname === pathname
  
  const { data: session } = useSession()
  
  function getSignup(){
    if(session) {
      return <>
      <Link href="/create">
          <a data-active={isActive('/create')}>+ Create draft</a>
      </Link> &nbsp; &nbsp;
      <span>{session.user.email}</span> 
      <a className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => signOut()}>Sign Out</a>      
      </>
    } else {
    return <>
      <a className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => signIn()}>Sign in</a>
    </>
    }
  }

  return(
    <nav>
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Blog
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>Drafts</a>
        </Link>
      </div>
      <div className="right"> 
        {getSignup()}        
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </nav>
  )
}

export default Header
