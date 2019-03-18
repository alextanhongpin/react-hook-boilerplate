import React from 'react'

import Button from 'component/Button'

import logo from '../../logo.svg'
const View = () =>
  <>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
            Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
            Learn React
      </a>
    </header>
    <Button />
  </>

export default View
