import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/user.png';
import { Toaster } from 'react-hot-toast';
import {useFormik} from 'formik';
import styles from '../styles/Username.module.css';
import { usernameValidate } from '../helper/Validate';

export default function Username() {

    const formik=useFormik({
        initialValues:{
            username:'user'
        },
        validate:usernameValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
            console.log(values)
        }
        })
    

    return (
        <div className="container mx-auto">
    
          <Toaster position='top-center' reverseOrder={false}></Toaster>
    
          <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass} style={{ width: "35%", paddingTop: '3em' }}>
    
              <div className="title flex flex-col items-center">
                <h4 className='text-4xl font-bold'>Hello Again!</h4>
                <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
                  Explore More by connecting with us.
                </span>
              </div>
    
              <form className='py-1' onSubmit={formik.handleSubmit}>
                  <div className='profile flex justify-center py-4'>
                      <img src={avatar} className={styles.profile_img} alt="avatar" />
                  </div>
    
                  <div className="textbox flex flex-col items-center gap-5">
                      <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                      <button className={styles.btn} type='submit'>Let's Go</button>
                  </div>
    
                  <div className="text-center py-2">
                    <span className='text-gray-500'>Not a Member? <Link className={styles.register} to="/register">Register Now</Link></span>
                  </div>
    
              </form>
    
            </div>
          </div>
        </div>
      )
    }
    