import React from 'react'

const LandingPage:React.FC = () => {
  return (
    <div>
      <h1>Hello from react</h1>
      <div>Please Login</div>
      <div>
        <a href="/login"><button>Login</button></a>
        <a href="/register"><button>Register</button></a>
      </div>
    </div>
  )
}

export default LandingPage
