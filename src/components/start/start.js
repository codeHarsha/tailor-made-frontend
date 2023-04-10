import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './start.css';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(to bottom right, #3f51b5, #2196f3)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 50,
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    background: 'linear-gradient(to bottom right, #ff9800, #ff5722)',
    '&:hover': {
      background: 'linear-gradient(to bottom right, #ff5722, #f44336)',
    },
  },
});

const Start = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/customer');
  };

  const handleTailorClick = () => {
    navigate('/tailor');
  };

  return (
    <div className={classes.root} data-testid="Start">
      <h1>Choose your role</h1>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleCustomerClick}
        >
          Customer
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleTailorClick}
        >
          Tailor
        </Button>
      </div>
    </div>
  );
};

Start.propTypes = {};

Start.defaultProps = {};

export default Start;
