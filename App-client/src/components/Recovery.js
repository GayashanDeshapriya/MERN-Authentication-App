import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/user.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import styles from '../styles/Username.module.css';
import { passwordValidate } from '../helper/Validate';

export default function Recovery() {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })


  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Recovery</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>

          <form className='pt-20' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-5">
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500 '>Enter 6 digit OTP that sent to your e-mail</span>
                <input className={styles.textbox} type="text" placeholder='OTP' />
              </div>
              <button className={styles.btn} type='submit'>Recover</button>
            </div>
            <div className="text-center py-2">
              <span className='text-gray-500'>Can't get OTP? <button className={styles.register} >Resend</button></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}
