import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doUsersRequest } from '../Redux/Actions/reduceActions';
import { Box, useTheme } from "@mui/material"

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";

export default function Users() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Data, setData] = useState([]);  
  const users = useSelector((state: any) => state.usersReducers.users);
  const loading = useSelector((state: any) => state.usersReducers.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doUsersRequest())
  },[]);
  
  useEffect(() => {
    if (users) {
      setData(users.results)
    }
  }, [users]);

  const columns = [
    {
      field: 'userId',
      headerName: 'ID',
      flex: 0.5,
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
      flex: 1,
    },
  ]

  return (
    <Box>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
      <Box
        className="grid col-2 bg-white  shadow-sm"
      sx={{
              "& .MuiDataGrid-root": {
              border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: "bg-orange-100 text-orange-500",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "transition-colors bg-orange-100",
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: "transition-colors bg-orange-100",
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
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
          !loading && Data.length > 0 ? 
          <DataGrid
            // autoPageSize
            autoHeight
            rows={Data}
            columns={columns}
            getRowId={(row: any) => row.userId}
            components={{ Toolbar: GridToolbar }}          
          /> : null
        }
      </Box>
    </Box>
  );
}
