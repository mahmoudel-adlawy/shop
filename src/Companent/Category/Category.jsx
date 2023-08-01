import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import sty from './Category.module.css'
import Loading from '../Loading';


export default function Category() {
     const [cat , setcat]= useState([])
    async function getdata(){
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`) 
        // console.log(data.data);
        setcat(data.data)
    }
    useEffect(()=>{
        getdata()
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (

    <>

<Slider {...settings}>
    {cat.length>0? cat.map((ele ,index)=><div className='my-3' key={index}>
        <img className={sty.images} src={ele.image} alt="" />
        <p className='text-center'> {ele.name}</p>
    </div>):<Loading></Loading>}
    </Slider>
    
    </>
  )
}
