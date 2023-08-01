import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import './App.css'
import Layout from './Companent/Layout/Layout'
import Home from './Companent/Home/Home'
import Product from './Companent/Product/Product'
import Cart from './Companent/Cart/Cart'
import Notfound from './Companent/Notfound/Notfound'
import Register from './Companent/Reg/Register'
import Login from './Companent/Log/Login'
import Logout from './Companent/Loq/Logout'
import Productdetails from './Companent/Productts/Productdetails'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import ProtcetRouter from './Companent/ProtcetRouter'
import { ConterContextProvider } from './Companent/Context/Cartstore'
import  { Toaster } from 'react-hot-toast';


 function App() {
  let [user,setuser]=useState(null)

  function save(){
    let token = localStorage.getItem('usertoken')
    let decode = jwtDecode(token)
    console.log(decode);
    setuser(decode)
  }

  useEffect(()=>{
    if(localStorage.getItem('usertoken')){
      save()
    }
  },[])

  const routes= createHashRouter([
    {path : '' , element: <Layout user={user} setuser={setuser}></Layout> ,children:[
      {index:true , element:<Home></Home>},
      {path:'product' , element:<Product></Product>},
      {path:'cart' , element:<ProtcetRouter><Cart></Cart></ProtcetRouter>},
      {path:'Reg' , element:<Register></Register>},
      {path:'Log' , element:<Login save = { save}></Login>},
      {path:'Out' , element:<Logout></Logout>},
      {path:'product/:id' , element:<Productdetails></Productdetails>},
      {path:'*' , element:<Notfound></Notfound>},
  ]}
    
  ])

  return <>

  <ConterContextProvider>
    <Toaster></Toaster>

  <RouterProvider router={routes}></RouterProvider>

  </ConterContextProvider>
  
  </>
   
}

export default App
