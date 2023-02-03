import Head from 'next/head';
import { useEffect, useState } from 'react';
import * as yup from "yup";
import { Box, Button, InputLabel, Link } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../Redux/Actions/reduceActions';
import { useRouter } from 'next/router';
import usersReducers from '../../Redux/Reducer/usersReducer';

export default function Login() {

  // use Router
  const router = useRouter();
  
  // useDispatch
  const dispatch = useDispatch();
  
  // define useState API POST users
  const [DataUser, setDataUser] = useState({
    userEmail: null,
    userPassword: null,
  });
  
  // function handler API POST users
  const eventHandlerAdd = (data:any) => (event:any) => {
    setDataUser({ ...DataUser, [data]: event.target.value });
  }
  
  // Mengambil state usersReducers dari store redux
  const isLogin = useSelector((state: any) => state.usersReducers.users);

  // function handle submit form add new users (API POST users)
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    dispatch(doLogin(values));

    // Memeriksa apakah user sudah login
    if (isLogin.message == 'Login successfully') {
      localStorage.setItem('token', isLogin.token);
      console.info(isLogin);
      if (isLogin.userdata[0].usro_role_id == 1) {        // Guest
        router.push('/');
      } else if (isLogin.userdata[0].usro_role_id == 2) { // Manager
        router.push('/manager');
      } else if (isLogin.userdata[0].usro_role_id == 3) { // Office Boy
        router.push('/ob');
      } else if (isLogin.userdata[0].usro_role_id == 4) { // Admin
        router.push('/admin');
      } else if (isLogin.userdata[0].usro_role_id == 5) { // User
        router.push('/users');
      }
    }
  };

  // getHelper for display in form
  const getHelperText = (touched:any, errors:any) => {
    return (touched && errors ? errors : false)
  }

  // check all validasi required & etc
  const checkoutSchema:any = yup.object().shape({
    userEmail: yup.string().email("invalid email").required("required"),
    userPassword: yup.string().required("required")
  });

  // function initialValue field from table users
  const initialValues: any = {
    userEmail: "",
    userPassword: "",
  };
  return (
    <Box>
      <Head>
        <title>Login</title>
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
                  onChange={(event) => { eventHandlerAdd('userPassword')(event); handleChange(event) }}
                  value={values.userPassword}
                  name="userPassword"
                  error={!!touched.userPassword && !!errors.userPassword}
                  helperText={getHelperText(touched.userPassword, errors.userPassword)}
                  sx={{ gridColumn: "span 4" }}
                />
                <Button
                    type="submit"
                    color="warning"
                    className="rounded-md bg-orange-100 text-orange-500 border-warning-500 first-line:bg-opacity-20 px-4 text-sm normal-case font-normal  hover:bg-opacity-30 focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    sx={{ gridColumn: "span 4" }}
                  >
                    <LoginIcon width={5} height={5} /><span className='text-transparent'>-</span>{"Login"}
                </Button>
                <InputLabel
                  className='text-center text-gray-400 text-sm'
                  sx={{ gridColumn: "span 4" }}
                >
                  don't have an account yet?<Link href={'/auth/register'} className='text-orange-500'> Register</Link>
                </InputLabel>
              </Box>
            </Form>
          )}
        </Formik>
      </section>
    </Box>
  );
}