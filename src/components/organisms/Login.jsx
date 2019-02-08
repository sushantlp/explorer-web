import { pipe } from 'ramda'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from 'Images'

import classNames from './Login.scss'

const eventToValue = event => event.currentTarget.value

export const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitWrapper = credentials => event => {
    event.preventDefault()
    onSubmit(credentials)
  }

  return (
    <section className={classNames.login}>
      <Link to='/'><img src={Logo} /></Link>
      <h1>Log Into My Account</h1>
      <h2>Log in to make, view, and manage your claims on the Po.et Network.</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={pipe(eventToValue, setEmail)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={pipe(eventToValue, setPassword)}
          required
        />
        <button type="submit" onClick={onSubmitWrapper({ email, password })}>Log In</button>
      </form>
    </section>
  )
}