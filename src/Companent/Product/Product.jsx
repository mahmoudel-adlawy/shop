import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import sty  from './Product.module.css'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Product() {
  const [pro, setpro] = useState([])


  async function getdata() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    setpro(data.data)
    console.log(data.data);
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <>

       <div className='container'>
      <Helmet>
                <title>Product</title>
            </Helmet>
        <div className='row'>
          {pro.length ? pro.map((ele, index) => <div key={index} className='col-md-2 my-4'>
            <Link to={`${ele._id}`}>

              <div className={sty.textt}>
                <img className={sty.images} src={ele.imageCover} alt="" />
                <h4 className={sty.gr}>{ele.category?.name}</h4>
                <p>{ele.title.split(" ").slice(0, 2).join(" ")}</p>
                <p>Price ➡️ {ele.price}</p>
                <p>Rate ➡️ {ele?.ratingsAverage} <i className="fas fa-star text-warning "></i></p>
              </div>
            </Link>


          </div>) : <Loading></Loading>}

        </div>
      </div> 


    </>
  )
}
