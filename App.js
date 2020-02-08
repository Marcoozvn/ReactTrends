import React from 'react'
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor'

import Routes from './src/Routes'

export default function App() {
  return (
    <>
      <GeneralStatusBarColor barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes />
    </>
  )
}