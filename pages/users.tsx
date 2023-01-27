import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doUsersRequest } from '../Redux/Actions/reduceActions';
import { AxiosError } from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import _ from 'lodash';
import apiUsers from '../Api/apiUser'

export default function Users() {
  const [Data, setData] = useState([]);  
  const users: any = useSelector((state: any) => state.usersReducers.users);
  const dispatch:any = useDispatch();

  useEffect(() => {
    dispatch(doUsersRequest())
  },[]);
  
  useEffect(() => {
    if (users) {
      setData(users.results) ;
      console.info(Data)
    }
  });


  const columns = [
    {
      field: 'userId',
      headerName: 'ID',
    },
    {
      field: 'userFullName',
      headerName: 'Full Name',
      cellClassName: "name-column--cell",
    },
    {
      field: 'userCompanyName',
      headerName: 'Company',
    },
    {
      field: 'userEmail',
      headerName: 'Email',
    },
    {
      field: 'userPhoneNumber',
      headerName: 'Phone',
    },
  ]

  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
      <div className="grid col-2 bg-white  shadow-sm">
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
        <DataGrid
          checkboxSelection
          rows={Data}
          columns={columns}
          getRowId={(row: any) => row.userId}
        />
      </div>
    </>
  );
}
