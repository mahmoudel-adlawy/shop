import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({user,setuser}) {
  let navigate = useNavigate()
  function logout(){
    localStorage.removeItem('usertoken')
    setuser(null)
    navigate('/')
  }
  return (
    <>
    <Navbar user={user} logout={logout}></Navbar>
    <Outlet></Outlet>
    
    </>
  )
}
