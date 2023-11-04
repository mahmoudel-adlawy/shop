import React, { useContext, useEffect, useState } from 'react'
import sty from './Productsdetalis.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { ConterContext } from '../Context/Cartstore';
import toast from 'react-hot-toast';
import Loading from '../Loading';

export default function Productdetails() {
    const [det, setdet] = useState({})
    let { id } = useParams();
    const {addcart} = useContext(ConterContext)

    async function addcartfun(id){
        const x = await addcart(id)
        console.log(x);

        if(x.status==='success'){
         toast.success(x. message)



        }
    }
    async function grtdetal() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        setdet(data.data)
        console.log(data.data);
    }
    useEffect(() => {
        grtdetal()
        console.log(id);
    }, [])
    return (
        <>
            <div className='container'>
               {det? <div className={`row align-items-center my-5 vh-50 ${sty.boo}`}>
                   
                   <div className='col-md-4'>
                       <img className={sty.ima} src={det.imageCover} alt="" />

                   </div>
                   <div className='col-md-8'>
                       <p>  {det.category?.name}</p>


                       <p className=''>  {det.description}</p>
                       <p className=''>price ⏩  {det.price}</p>
                       <p className=''>Rating ⏩  {det.ratingsAverage}</p>
                       <button className='btn btn-success form-control p-3 mt-2' onClick={()=>{addcartfun(det.id)}} >Add+</button>


                   </div>

           </div>
:<Loading></Loading>}
            </div>
        </>
    )
}
