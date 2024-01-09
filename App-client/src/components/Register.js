import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/user.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import styles from '../styles/Username.module.css';
import { registerValidation } from '../helper/Validate';
import convertToBase64 from '../helper/convert';

export default function Register() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: 'example@gmail.com',
      username: 'Deshcoder',
      password: 'admin@123'
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
      console.log(values)
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }


  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width: "35%", paddingTop: '3em', paddingBottom:'2em' }}>

        <div className="title flex flex-col items-center">
                <h4 className='text-4xl font-bold'>Create Account</h4>
                <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
                  Happy to join.
                </span>
              </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id='profile' name='profile' />

            </div>



            <div className="textbox flex flex-col items-center gap-5">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
              <button className={styles.btn} type='submit'>Sign Up</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already Register? <Link className={styles.register} to="/">Login</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}
