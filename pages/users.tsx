import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doUsersRequest } from '../Redux/Actions/reduceActions';
import { Box, useTheme } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
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
      type:'number',
      flex: 0.3,
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
      type: 'actions',
      width: 100,
      
      getActions: (rowData:any) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(rowData.userId)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(rowData.userId)}
        />,
      ],
    },

  ];

    const handleEdit = (userId:number) => {
      console.info(`EDIT ${userId}`);
    }

    const handleDelete = (userId:number) => {
      console.info(`DELETE ${userId}`);
    }

  return (
    <Box>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
      <Box
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
