import React, { useContext, useEffect, useState } from 'react'
import { ConterContext } from '../Context/Cartstore'
import sty from './Cart.module.css'
import Loading from '../Loading'
import { Helmet } from 'react-helmet'

export default function Cart() {
  const [pro, setpro] = useState([])
  const [det, setdet] = useState([])
  const { getdata , updatedata , deletee} = useContext(ConterContext)

  async function getdatfun() {
    const x = await getdata();
    if (x.status === 'success')
      setpro(x.data.products)
    setdet(x)
    // console.log(x);
  }
  async function updatefun(id,count) {
    const x = await updatedata(id,count);
    if (x.status === 'success')
      setpro(x.data.products)
    setdet(x)
    console.log(x);
  }
  async function deleteefun(id) {
    const x = await deletee(id);
    if (x.status === 'success')
      setpro(x.data.products)
    setdet(x)
    console.log(await deletee(id));
  }

  useEffect(() => {
    getdatfun()
  }, [])
  return (
    <>
      <div className='container'>
      <Helmet>
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     
        <h3>Number of cart items {det?.numOfCartItems}</h3>

        <div className='row '>
          {pro.length > 0 ? pro.map((ele, index) => <div key={index} className='col-md-3'>
            <div className={sty.cad}>
              <img src={ele.product?.imageCover} className='w-100' alt="" />
              <hr className={sty.hh} />
              <div className={sty.box}>

                <p>Rating ⏩ {ele.product?.ratingsAverage} <i class="fas fa-star text-warning"></i></p>
                <p><i class="fas fa-trash-alt fa-2x text-danger" onClick={()=>{deleteefun(ele.product?._id)}}></i></p>

              </div>
              <p className={sty.gr}>{ele.product?.title.split(" ").slice(0,2).join(" ")}</p>

              <p>Price ⏩ {ele.price}EGP</p>

              <div className={sty.box}>
                <button className=' btn-out-line-success bnn' onClick={()=>{updatefun(ele.product?._id,ele.count +1)}}>+</button>
                <p> count : {ele.count}</p>
                <button className=' btn-out-line-success bnn'onClick={()=>{updatefun(ele.product?._id,ele.count -1)}} >-</button>


                
              </div>
            </div>
          </div>) : <Loading></Loading>}


        </div>
        <div>
          <h3 className=''>Total price 👉 {det.data?.totalCartPrice} EGP</h3>

        </div>
      
      </div>
     
    </>
  )
}
