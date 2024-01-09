import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/user.png';
import { Toaster } from 'react-hot-toast';
import {useFormik} from 'formik';
import styles from '../styles/Username.module.css';
import { passwordValidate } from '../helper/Validate';

export default function Password() {

    const formik=useFormik({
        initialValues:{
            password:'admin@123'
        },
        validate:passwordValidate,
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
            <div className={styles.glass} style={{ width: "35%", paddingTop: '3em', paddingBottom:'2em' }}>
    
              <div className="title flex flex-col items-center">
                <h4 className='text-4xl font-bold'>Hello Again!</h4>
                
              </div>
    
              <form className='py-1' onSubmit={formik.handleSubmit}>
                  <div className='profile flex justify-center py-4'>
                      <img src={avatar} className={styles.profile_img} alt="avatar" />
                  </div>
    
                  <div className="textbox flex flex-col items-center gap-5">
                      <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                      <button className={styles.btn} type='submit'>Sign in</button>
                  </div>
    
                  <div className="text-center py-2">
                    <span className='text-gray-500'>Forgot Password? <Link className={styles.register} to="/recovery">Recover Password</Link></span>
                  </div>
    
              </form>
    
            </div>
          </div>
        </div>
      )
    }
    