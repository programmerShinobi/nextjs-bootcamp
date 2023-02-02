import Head from 'next/head';
import { useEffect, useState } from 'react';
import * as yup from "yup";
import { Box, Button, InputLabel, Link } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { doRegister } from '../../Redux/Actions/reduceActions';
import { useRouter } from 'next/router';
import usersReducers from '../../Redux/Reducer/usersReducer';
import { KeyIcon } from '@heroicons/react/24/solid';

export default function Register() {

  // use Router
  const router = useRouter();
  
  // useDispatch
  const dispatch = useDispatch();
  
  // define useState API POST users
  const [DataUser, setDataUser] = useState({
    userFullName:null,
    userEmail: null,
    uspaPasswordhash: null,
  });
  
  // function handler API POST users
  const eventHandlerAdd = (data:any) => (event:any) => {
    setDataUser({ ...DataUser, [data]: event.target.value });
  }
  
  // Mengambil state usersReducers dari store redux
  const isRegister = useSelector((state: any) => state.usersReducers.users);

  // function handle submit form add new users (API POST users)
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    dispatch(doRegister(values));
    console.info(isRegister);

    // Memeriksa apakah user sudah login
    if (isRegister.message=='Register Successfully') {
      router.push('/auth/login');
    }
  };

  // getHelper for display in form
  const getHelperText = (touched:any, errors:any) => {
    return (touched && errors ? errors : false)
  }

  // check all validasi required & etc
  const checkoutSchema: any = yup.object().shape({
    userFullName: yup.string().required("required"),
    userEmail: yup.string().email("invalid email").required("required"),
    uspaPasswordhash: yup.string().required("required")
  });

  // function initialValue field from table users
  const initialValues: any = {
    userFullName: "",
    userEmail: "",
    uspaPasswordhash: "",
  };
  return (
    <Box>
      <Head>
        <title>Register</title>
      </Head>
      <section className='w-3/4 mx-auto my-auto flex flex-col gap-3 rounded-xl' >
        <div className="title">
          <h1 className='text-orange-600 text-3xl font-bold pb-2 '>SHINOBI</h1>
          <p className='w-3/4  mx-auto my-auto text-gray-400 text-sm pb-3 '>Want to become a shinobi?<br />Let's join us!</p>
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
                gap="5px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <TextField
                  color="warning"
                  fullWidth
                  className="border border-orange-500"
                  variant="filled"
                  type="text"
                  label="Full Name"
                  onBlur={handleBlur}
                  onChange={(event) => { eventHandlerAdd('userFullName')(event); handleChange(event) }}
                  value={values.userFullName}
                  name="userFullName"
                  error={!!touched.userFullName && !!errors.userFullName}
                  helperText={getHelperText(touched.userFullName, errors.userFullName)}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  color="warning"
                  fullWidth
                  className="border border-orange-500"
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={(event) => {eventHandlerAdd('userEmail')(event); handleChange(event)}}
                  value={values.userEmail}
                  name="userEmail"
                  error={!!touched.userEmail && !!errors.userEmail}
                  helperText={getHelperText(touched.userEmail, errors.userEmail)}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  color="warning"
                  fullWidth
                  className="border border-orange-500"
                  variant="filled"
                  type="text"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={(event) => { eventHandlerAdd('uspaPasswordhash')(event); handleChange(event) }}
                  value={values.uspaPasswordhash}
                  name="uspaPasswordhash"
                  error={!!touched.uspaPasswordhash && !!errors.uspaPasswordhash}
                  helperText={getHelperText(touched.uspaPasswordhash, errors.uspaPasswordhash)}
                  sx={{ gridColumn: "span 4" }}
                />
                <Button
                    type="submit"
                    color="warning"
                    className="rounded-md bg-orange-100 text-orange-500 border-warning-500 first-line:bg-opacity-20 px-4 text-sm normal-case font-normal  hover:bg-opacity-30 focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    sx={{ gridColumn: "span 4" }}
                  >
                    <KeyIcon width={15} height={15} /><span className='text-transparent'>-</span>{"Register"}
                </Button>
                <InputLabel
                  className='text-center text-gray-400 text-sm'
                  sx={{ gridColumn: "span 4" }}
                >
                  do have an account yet?<Link href={'/auth/login'} className='text-orange-500'> Login</Link>
                </InputLabel>
              </Box>
            </Form>
          )}
        </Formik>
      </section>
    </Box>
  );
}