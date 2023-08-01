import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtcetRouter({children}) {
    if(localStorage.getItem('usertoken')){
        return <>
        {children}
        </>
    }
    else{
      return   <Navigate to='/'></Navigate>
    }
  return (
    <></>
  )
}
