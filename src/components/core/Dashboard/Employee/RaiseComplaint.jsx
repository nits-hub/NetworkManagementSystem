import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createComplaints } from '../../../../services/operations/authAPI';

const Form = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({
    title: '',
    description: '',
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComplaints(complaint, token));
  };

  return (
    <>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">
        File a Complaint
      </h2>

      <div className="flex items-center justify-between rounded-md border-[1px] p-8 px-12">
        <Container maxWidth="sm">
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Title of the Complaint"
              name="title"
              value={complaint.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description of the Complaint"
              name="description"
              value={complaint.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default function RaiseComplaint() {
  return <ComplaintForm />;
}
