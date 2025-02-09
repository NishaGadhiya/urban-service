// import axios from 'axios'
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'

// export const AddAddress = () => {
  
//   const {register,handleSubmit} = useForm()
//   const userId = localStorage.getItem('id')
//   const [addressId, setaddressId] = useState('')
//   const [addresses, setaddresses] = useState([])

//   const getUserById = async () => {
//     try{
//         const res = await axios.get("http://localhost:4000/users/user/"+userId)
//         console.log(res.data.data)
//         setaddresses(res.data.data.address)
//     }catch(error){
//         console.log(error)
//     }
//   }

  
  
  
  
  
  
  
  
//     return (
//     <div>AddAddress</div>
//   )
// }
// AddAddress.js



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Card, CardContent, Grid, Typography, Button, TextField } from '@mui/material';
// import { Link } from 'react-router-dom';

// export const AddAddress = ({ userId }) => {
//   const [newAddress, setNewAddress] = useState({
//     address: '',
//     city: '',
//     state: '',
//     postalCode: ''
//   });

//   const handleInputChange = (e) => {
//     setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = async () => {
//     try {
//       await axios.post(`http://localhost:4000/users/${userId}/addresses`, newAddress);
//       setNewAddress({
//         address: '',
//         city: '',
//         state: '',
//         postalCode: ''
//       });
//     } catch (error) {
//       console.error('Error adding address:', error);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Add Address
//       </Typography>
//       <Card>
//         <CardContent>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Address"
//                 name="address"
//                 value={newAddress.address}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="City"
//                 name="city"
//                 value={newAddress.city}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="State"
//                 name="state"
//                 value={newAddress.state}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Postal Code"
//                 name="postalCode"
//                 value={newAddress.postalCode}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Link to='/user/dashboard'><Button variant="contained" color="primary" onClick={handleAddAddress}>
//                 Add Address
//               </Button></Link>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };


import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const AddAddress = ({ userId, updateAddresses }) => { // Update prop name
  const [newAddress, setNewAddress] = useState({ // Define newAddress state
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = async () => {
    try {
      await axios.post('http://localhost:4000/address/address', newAddress);
      updateAddresses(newAddress); // Call the updateAddresses function
      setNewAddress({ // Clear the form
        address: '',
        city: '',
        state: '',
        postalCode: ''
      });
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add Address
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={newAddress.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={newAddress.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={newAddress.state}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                value={newAddress.postalCode}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Link to='/user/dashboard'>
                <Button variant="contained" color="primary" onClick={handleAddAddress}>
                  Add Address
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
