import React, { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'

const Login: React.FC = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { password, email }
      await fetch(`/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className="page">
        <form
          onSubmit={submitData}>
          <h1>Signup user</h1>
          <input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            type="text"
            value={email}
          />
          <input
            autoFocus
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />          
          <input
            disabled={!password || !email}
            type="submit"
            value="Login"
          />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
        </a>
        </form>
      </div>
      <style jsx>{`
      .page {
        background: white;
        padding: 3rem;
        display: flex;
        justify-content: center;
      }

      input[type='text'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }
      input[type='password'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
    </Layout>
  )
}

export default Login