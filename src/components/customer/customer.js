import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './customer.css';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Input,
  Typography,
} from "@material-ui/core";

const Customer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [state, setState] = useState("");
  const [clothingTypes, setClothingTypes] = useState([]);
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [images, setImages] = useState([]);

  const handleClothingTypeChange = (event) => {
    setClothingTypes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages(uploadedImages);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <TextField
          label="Postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          required
        />
        <TextField
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <FormControl>
          <InputLabel id="clothing-types-label">Clothing Types</InputLabel>
          <Select
            labelId="clothing-types-label"
            id="clothing-types-select"
            multiple
            value={clothingTypes}
            onChange={handleClothingTypeChange}
            input={<Input />}
          >
            <MenuItem value="Dress">Dress</MenuItem>
            <MenuItem value="Ethnic Wear - Sari / Blouse">
              Ethnic Wear - Sari / Blouse
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <FormControl>
          <InputLabel>Upload Images</InputLabel>
          <Input
            type="file"
            inputProps={{ multiple: true }}
            onChange={handleImageUpload}
          />
        </FormControl>
        {/* list of uploaded image names */}
        {images.length > 0 && (
          <div className="image-container-div">
            <Typography variant="h6" className='image-container-typo'>Uploaded Images:</Typography>
            <ul className="image-container">
              {images.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* submit button */}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

Customer.propTypes = {};

Customer.defaultProps = {};

export default Customer;
