import Head from 'next/head';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';

export default function Login(){

  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate : login_validate,
    onSubmit: async (values) => {
      try {
        const status:any = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
          callbackUrl: "/"
        });

        if (status.ok) {
          router.push(status.url);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  // const emailProps = {
  //   ...formik.getFieldProps('email'),
  //   name: 'email'
  // };

  // const passwordProps = {
  //   ...formik.getFieldProps('password'),
  //   name: 'paswword'
  // };

    return (
      <div>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto my-auto flex flex-col gap-3 rounded-xl' >
            <div className="title">
                <h1 className='text-orange-600 text-4xl font-bold '>SHINOBI</h1><br/>
                <p className='w-3/4  mx-auto my-auto text-gray-400 text-sm '>Want to become a shinobi?<br/>Let's join us!</p>
            </div>

            {/* form */}
            <form className='flex mx-auto my-auto flex-col gap-3' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type='email'
                    placeholder='Email'
                    className={styles.input_text}
                    // {...emailProps}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    placeholder='password'
                    className={styles.input_text}
                    // {...passwordProps}
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
            </form>
            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <a href={'#'} className='text-orange-500'>Sign Up</a>
            </p>
        </section>
      </div>
    )
}