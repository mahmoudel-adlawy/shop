import React from 'react'
import Header from '../Header/Header'
import Category from '../Category/Category'
import Feacher from '../Feacher/Feacher'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header></Header>
      <Category></Category>
      <p className='myy-5'></p>
      <Feacher></Feacher>
    </>
  )
}
