import React, { useState } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  TableContainer,
} from "@material-ui/core";

const jobs = [
  {
    id: 1,
    type: "Sewing",
    making: "Dress",
    status: "Open",
    location: "New York",
    quotationsCount: 5,
    customerDetails: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "555-555-5555",
    },
  },
  {
    id: 2,
    type: "Knitting",
    making: "Sweater",
    status: "Closed",
    location: "Los Angeles",
    quotationsCount: 2,
    customerDetails: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "555-555-5555",
    },
  },
];

const Tailor = () => {
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    tableContainer: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendQuote = () => {
    // send quote to customer via email
    alert("Quote sent!");
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (!locationFilter || job.location === locationFilter) &&
      (!typeFilter || job.type === typeFilter)
  );

  const classes = useStyles();

  return (
    <div className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Available Jobs
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <TableContainer component={Paper} className={classes.tableContainer}>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type of Making</TableCell>
                <TableCell>Making</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Location</TableCell>
                <TableCell align="right">Quotations Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id} onClick={() => handleJobClick(job)}>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.making}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell align="right">{job.quotationsCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel>Location</InputLabel>
          <Select value={locationFilter} onChange={handleLocationFilterChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ minWidth: 120, marginLeft: 16 }}>
          <InputLabel>Type of Making</InputLabel>
          <Select value={typeFilter} onChange={handleTypeFilterChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Sewing">Sewing</MenuItem>
            <MenuItem value="Knitting">Knitting</MenuItem>
            <MenuItem value="Embroidery">Embroidery</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {selectedJob && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Job Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Type of Making: {selectedJob.type}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Making: {selectedJob.making}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {selectedJob.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {selectedJob.location}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Quotations Count: {selectedJob.quotationsCount}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Customer Details
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Name: {selectedJob.customerDetails.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Email: {selectedJob.customerDetails.email}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Phone: {selectedJob.customerDetails.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Send Quote
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={price}
              onChange={handlePriceChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comment"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendQuote}
            >
              Send Quote
            </Button>
          </Grid>
        </>
      )}
    </Grid>
    </div>
  );
};

export default Tailor;
