import Head from 'next/head';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import * as yup from "yup";
import { Box, Button, ButtonGroup, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material"
import { LockClosedIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import TextField from '@mui/material/TextField';
import { Form, Formik, ErrorMessage, Field, FieldArray } from 'formik';
import LoginIcon from '@mui/icons-material/Login';
import Input from '@mui/material/Input';

export default function Login(){
  // function handle submit form add new users (API POST users)
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    // dispatchAdd(doUsersCreate(values));
    // dispatch(doUsersRequest());
  };

  // getHelper for display in form
  const getHelperText = (touched:any, errors:any) => {
    return (touched && errors ? errors : false)
  }

  // phone regExp
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  // check all validasi required & etc
  const checkoutSchema:any = yup.object().shape({
    userEmail: yup.string().email("invalid email").required("required"),
    uspaPasswordhash: yup.string().required("required")
  });

  // function initialValue field from table users
  const initialValues: any = {
    userEmail: "",
    uspaPasswordhash: "",
  };
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
        
      <section className='w-3/4 mx-auto my-auto flex flex-col gap-3 rounded-xl' >
        <div className="title">
          <h1 className='text-orange-600 text-4xl font-bold '>SHINOBI</h1><br />
          <p className='w-3/4  mx-auto my-auto text-gray-400 text-sm '>Want to become a shinobi?<br />Let's join us!</p>
        </div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <TextField
                  color="warning"
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  // onChange={(event) => {eventHandlerAdd('userEmail')(event); handleChange(event)}}
                  value={values.userEmail}
                  name="userEmail"
                  error={!!touched.userEmail && !!errors.userEmail}
                  helperText={getHelperText(touched.userEmail, errors.userEmail)}
                  sx={{ gridColumn: "span 4" }}
                />
                    
                <TextField
                  color="warning"
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Password"
                  onBlur={handleBlur}
                  // onChange={(event) => { eventHandlerAdd('uspaPasswordhash')(event); handleChange(event) }}
                  value={values.uspaPasswordhash}
                  name="uspaPasswordhash"
                  error={!!touched.uspaPasswordhash && !!errors.uspaPasswordhash}
                  helperText={getHelperText(touched.uspaPasswordhash, errors.uspaPasswordhash)}
                  sx={{ gridColumn: "span 4" }}
                />
                <Button
                    type="submit"
                    color="warning"
                    className="rounded-md bg-orange-100 text-orange-500 border-warning-500 first-line:bg-opacity-20 px-4 py-2 text-sm font-normal  hover:bg-opacity-30 focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    sx={{ gridColumn: "span 4" }}
                  >
                    <LoginIcon width={5} height={5} /><span className='text-transparent'>-</span>Login
                </Button>
                <InputLabel
                  className='text-center text-gray-400 text-sm'
                  sx={{ gridColumn: "span 4" }}
                >
                  don't have an account yet?<Link href={'#'} className='text-orange-500'> Sign Up</Link>
                </InputLabel>
              </Box>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}