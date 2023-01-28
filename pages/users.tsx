import { Dialog, Transition, Listbox } from '@headlessui/react'
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doUsersRequest, doUsersCreate, doDeleteUsers } from '../Redux/Actions/reduceActions';
import { Box, Button, ButtonGroup, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import * as yup from "yup";
import Input from '@mui/material/Input';
import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

export default function Users() {
  const router = useRouter();
  // defaine themes
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // define API GET users
  const [Data, setData] = useState([]);  
  const users: any = useSelector((state: any) => state.usersReducers.users);
  const dispatch:any = useDispatch();

  //  dispatch API GET users
  useEffect(() => {
    dispatch(doUsersRequest())
  },[]);
  
  // setData API GET users
  useEffect(() => {
    if (users && users.results){
      setData(users.results)
    }
  });

  // column API GET users
  const columns = [
    {
      field: 'actions',
      headerName:'Actions',
      type: 'actions',
      flex: 0.5,

      getActions: (row:any) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(row.id)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(row.id)}
        />,
      ],
    },
    {
      field: 'userId',
      headerName: 'ID',
      type:'number',
      flex: 0.2,
    },
    {
      field: 'userFullName',
      headerName: 'Full Name',
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: 'userCompanyName',
      headerName: 'Company',
      flex: 1,
    },
    {
      field: 'userEmail',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'userPhoneNumber',
      headerName: 'Phone',
      flex: 0.75,
    },
  ];

  // useState : modals Add New
  let [isOpenAdd, setIsOpenAdd] = useState(false)

  //  function : close modals Add New
  function closeModalAdd() {
    setIsOpenAdd(false)
  }

  //  function : open modals Add New
  function openModalAdd() {
    setIsOpenAdd(true)
  }

  // useDispatch API POST users
  const dispatchAdd = useDispatch();

  // define useState API POST users
  const [DataUser, setDataUser] = useState({
    userFullName: null,
    userCompanyName: null,
    userType: null,
    userEmail: null,
    userPhoneNumber:  null,
  })

  // function handler API POST users
  const eventHandlerAdd = (data:any) => (event:any) => {
      setDataUser({...DataUser, [data] : event.target.value});
  }

  // function Add Data API POST users
  const addData = (e: any) => {
    e.preventDefault();
    const successAdd: any = dispatchAdd(doUsersCreate(DataUser));
    if (successAdd) {
      router.push('/users');
      setIsOpenAdd(false);
    }
    
  }

  // function handle submit form add new users (API POST users)
  const handleFormSubmit = (values:any) => {
     
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
    userFullName: yup.string().required("required"),
    userType: yup.string().required("required"),
    userCompanyName: yup.string().required("required"),
    userEmail: yup.string().email("invalid email").required("required"),
    userPhoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  });

  // function initialValue field from table users
  const initialValues:any = {
    userFullName: "",
    userType:"",
    userCompanyName: "",
    userEmail: "",
    userPhoneNumber: "",
  };

  // function handler API PUT user
  const handleEdit = (id: number) => {
    console.info(`EDIT ${id}`);
  }

  // function handler API DELETE user
  const handleDelete = (id: number) => {
    //  dispatch API DELETE users
    const deleteUser: any = dispatch(doDeleteUsers(id));
    if (deleteUser) {
      router.push('/users');
    }
  }
  
  return (
    <Box>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
      <ButtonGroup className="align-middle bg-gray">
        <Button
            type="button"
            onClick={openModalAdd}
            color="warning"
            className="rounded-md bg-warning text-warning-500 border-warning-500 first-line:bg-opacity-20 px-4 py-2 text-sm font-normal  hover:bg-opacity-30 focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <PlusIcon width={20} /><span className='text-transparent'>-</span> Add
        </Button>
      </ButtonGroup>
      <Transition appear show={isOpenAdd} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalAdd}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-black"
                    >
                      Add New User
                  </Dialog.Title>
                  <br></br>
                    
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
                        <form onSubmit={handleSubmit}>
                          <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                              
                          >
                            <TextField
                              color="warning"
                              fullWidth
                              variant="filled"
                              type="text"
                              label="First Name"
                              onBlur={handleBlur}
                              onChange={(event) => {eventHandlerAdd('userFullName')(event); handleChange(event)}}
                              value={values.userFullName}
                              name="userFullName"
                              error={!!touched.userFullName && !!errors.userFullName}
                              helperText={getHelperText(touched.userFullName, errors.userFullName)}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <Select
                              color="warning"
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Type"
                              onBlur={handleBlur}
                              onChange={(event) => {eventHandlerAdd('userType')(event); handleChange(event)}}
                              value={values.userType}
                              name="userType"
                              error={!!touched.userType && !!errors.userType}
                              // helperText={getHelperText(touched.userType, errors.userType)}
                              sx={{ gridColumn: "span 4" }}
                            >
                              <MenuItem value="Select Type">
                                <em>Select Type ...</em>
                              </MenuItem>
                              <MenuItem value='T'>Travel Agent</MenuItem>
                              <MenuItem value='C'>Company</MenuItem>
                              <MenuItem value='I'>Individual</MenuItem>
                            </Select>
                            <TextField
                              color="warning"
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Company Name"
                              onBlur={handleBlur}
                              onChange={(event) => {eventHandlerAdd('userCompanyName')(event); handleChange(event)}}
                              value={values.userCompanyName}
                              name="userCompanyName"
                              error={!!touched.userCompanyName && !!errors.userCompanyName}
                              helperText={getHelperText(touched.userCompanyName, errors.userCompanyName)}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                              color="warning"
                              fullWidth
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
                              variant="filled"
                              type="text"
                              label="Phone Number"
                              onBlur={handleBlur}
                              onChange={(event) => {eventHandlerAdd('userPhoneNumber')(event); handleChange(event)}}
                              value={values.userPhoneNumber}
                              name="userPhoneNumber"
                              error={!!touched.userPhoneNumber && !!errors.userPhoneNumber}
                              helperText={getHelperText(touched.userPhoneNumber, errors.userPhoneNumber)}
                              sx={{ gridColumn: "span 4" }}
                            />
                          </Box>
                          <Box display="flex" justifyContent="end" mt="20px">
                            <Button className="bg-gray-700 text-white" type="submit" color="warning" variant="contained" onClick={addData}>
                                Create New User
                            </Button>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
      </Transition>
      <Box
        className="rounded-2xl"
        sx={{
          height: 10,
          width: '100%', 
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.primary[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.grey[800],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]}`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* <table className='table'>
          <thead>
              <tr> 
                  <th>ID</th>
                  <th>Username</th>
              </tr>
          </thead>
          <tbody>
          {
            users && users.results.map(
              (user: any) => {
                return (
                  <tr>
                      <td>{ user.userId }</td>
                      <td>{ user.userFullName }</td>
                  </tr>
                )
              }
            )
          }
          </tbody>
        </table> */}
        {
          <DataGrid
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15, 20]}
            rows={Data}
            columns={columns}
            getRowId={(row: any) => row.userId}
            components={{ Toolbar: GridToolbar }} 
            
          />
        }
      </Box>
    </Box>
  );
}
