import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'taskName', headerName: 'Task name', width: 300 },
  { field: 'priority', headerName: 'Priority', width: 300 },
  { field: 'category', headerName: 'Category', width: 300 },
];
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
//   { lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { lastName: 'Melisandre', firstName: null, age: 150 },
//   { lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//];

export default function DisplayTasks({tasks}) {
    
let rows = [];
tasks.forEach(task => {
    //console.log(task);
    rows.push(
        {
            id: task.id,
            taskName : task.taskName ,
            category : task.category ,
            priority : task.priority
        }
    )
});
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}