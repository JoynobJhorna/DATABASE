import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
 

  return (
    <>
    <h1 className='text-4xl py-10 mb-30 bg-amber-400 text-white text-center '>Todo Application</h1>
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
  <fieldset className="fieldset">
    <label className="label">Email</label>
    <input type="email" className="input validator" placeholder="Email" required />
    <p className="validator-hint hidden">Required</p>
  </fieldset>

  <label className="fieldset">
    <span className="label">Password</span>
    <input type="password" className="input validator" placeholder="Password" required />
    <span className="validator-hint hidden">Required</span>
  </label>

  <button className="btn btn-neutral mt-4" type="submit">Login</button>
  <button className="btn btn-ghost mt-1" type="reset">Reset</button>
</form>
    </>
  )
}

export default App
