import React from 'react';
import {Container } from '@mui/material';
import EmployeeTable from './ViewEmployee/EmployeeTable';

const MemoizedEmployeeTable = React.memo(EmployeeTable);

export default function ViewEmployee() {

  return (
    <>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">
        View Employee Details
      </h2>

      <Container>
        <MemoizedEmployeeTable />
      </Container>
    </>
  );
}
