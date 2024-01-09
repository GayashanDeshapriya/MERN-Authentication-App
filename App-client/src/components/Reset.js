import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/user.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import styles from '../styles/Username.module.css';
import { resetPasswordValidation } from '../helper/Validate';

export default function Reset() {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: ''
    },
    validate: resetPasswordValidation,
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
        <div className={styles.glass} style={{ width: "35%", paddingTop: '3em', paddingBottom: '3em' }}>

          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Reset</h4>
            <span className='py-3 text-xl w-3/4 text-center text-gray-500'>
              Enter Your New Password.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-5">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
              <button className={styles.btn} type='submit'><Link to="/password">Reset Now
              </Link></button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
