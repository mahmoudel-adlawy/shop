import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Login({save}) {
  // console.log(save);

  const [err,seterr]= useState('');
  const navigate = useNavigate()


  const sheme = Yup.object({
    email: Yup.string().required('email is req').email('not valid'),
    password: Yup.string().required('pass is req').matches(/^[A-Z][a-z]{3,10}@[0-9]{2,5}$/),

  })
   
  async function submit(values){

    try {
      let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
      // console.log(data);
      if(data.message==='success'){
        localStorage.setItem('usertoken',data.token)
        save()
        navigate('/cart')

      }
    console.log(data);
      
    } catch (error) {
      console.log(error.response.data.message);
      seterr(error.response.data.message);

      
    }
    // console.log(values);
  }

  let formik = useFormik({
    initialValues:{
    email:"",
    password:"",
    },
    validationSchema:sheme
    ,
    onSubmit:submit

  })
  return (
    <>
     <div className='container'>

<form action="" onSubmit={formik.handleSubmit} className='my-5'> 



<label className='my-3' htmlFor=""> Email :</label>
<input type="email" placeholder='Email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' />
{formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email} </p> :'' }
{err? <p className='alert alert-danger'>{err}</p> : ''}



<label className='my-3' htmlFor=""> Password :</label>

<input type="Password"  placeholder='Password' name='password'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control' />
{formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password} </p> :'' }




<button type='submit' className='btn btn-success my-3'>Login</button>


</form>

</div>

    </>
  )
}
