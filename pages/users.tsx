import { Dialog, Transition } from '@headlessui/react'
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doUsersRequest, doUsersCreate } from '../Redux/Actions/reduceActions';
import { Box, Button, ButtonGroup, IconButton, useTheme } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { isNull } from 'lodash';
import Input from '@mui/material/Input';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function Users() {
  // defaine themes
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // define API GET users
  const [Data, setData] = useState([]);  
  const users = useSelector((state: any) => state.usersReducers.users);
  const dispatch = useDispatch();

  //  dispatch API GET users
  useEffect(() => {
    dispatch(doUsersRequest())
  },[]);
  
  // setData API GET users
  useEffect(() => {
    if (users) {
      setData(users.results)
    }
  }, [users]);

  // column API GET users
  const columns = [
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
  ];

  // useState : modals Add New
  let [isOpen, setIsOpen] = useState(false)

  //  function : close modals Add New
  function closeModal() {
    setIsOpen(false)
  }

  //  function : open modals Add New
  function openModal() {
    setIsOpen(true)
  }

  // useDispatch API POST users
  const dispatchAdd = useDispatch();

  // define useState API POST users
  const [DataUser, setDataUser] = useState({
    userFullName: null,
    userCompanyName: null,
    userEmail: null,
    userPhoneNumber:  null,
  })

  // function handler API POST users
  const eventHandlerAdd = (data:any) => (event:any) => {
      setDataUser({...DataUser, [data] : event.target.value});

      console.log(DataUser)
  }

  // function Add Data API POST users
  const addData = (e:any) => {
      e.preventDefault();
      dispatchAdd(doUsersCreate(DataUser))
  }

  
  const handleEdit = (id: number) => {
    console.info(`EDIT ${id}`);
  }

  
  const handleDelete = (id: number) => {
    console.info(`DELETE ${id}`);
  }



  return (
    <Box>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
      <ButtonGroup className="align-middle">
      <Button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-normal text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      ><PlusIcon width={20} /><span className='text-transparent'>-</span> Add
      </Button>
      </ButtonGroup>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add New User
                    </Dialog.Title>
                    <form>
                      <div className="mt-15 bg-inherit">
                            <div className="p-6 text-left align-middle shadow-xl transition-all rounded-2xl">
                                <Input required fullWidth type="text" placeholder="Full Name ..." className="form-control" id="userFullName" onChange={eventHandlerAdd('userFullName')} />
                            </div>
                            <div className="p-6 text-left align-middle shadow-xl transition-all rounded-2xl">
                                <Input required fullWidth aria-required type="text" placeholder="Company Name ..." className="form-control" id="userCompanyName" onChange={eventHandlerAdd('userCompanyName')} />
                            </div>
                            <div className="p-6 text-left align-middle shadow-xl transition-all rounded-2xl">
                                <Input required fullWidth aria-required type="text" placeholder="Company Name ..." className="form-control" id="userEmail" onChange={eventHandlerAdd('userEmail')} />
                            </div>
                            <div className="p-6 text-left align-middle shadow-xl transition-all rounded-2xl">
                                <Input required fullWidth aria-required type="text" placeholder="Phone Number ..." className="form-control" id="userPhoneNumber" onChange={eventHandlerAdd('userPhoneNumber')} />
                            </div>
                      </div>

                    <div className="mt-4 transition-all">
                      <center>
                        <Button
                          type="reset"
                          className="rounded-2xl border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        >
                          Reset!
                        </Button>
                        <span className='text-transparent'>- - -</span>
                        <Button
                          type="button"
                          className="rounded-2xl border border-transparent bg-green-100 px-4 py-2 ml-15 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                           onClick={addData}
                        >
                          Submit!
                        </Button>
                        <span className='text-transparent'>- - -</span>
                        <Button
                          type="button"
                          className="rounded-2xl  border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close!
                        </Button>
                      </center>
                      </div>
                    </form>
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
