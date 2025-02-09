import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import { TrendingUp, DoneAll, MonetizationOn } from '@mui/icons-material';


export const UserDashboard = () => {
  const [book, setBook] = useState([]);
  const [totalBook, setTotalBook] = useState([]);
  const [doneBook, setDoneBook] = useState([]);
  const [amount, setAmount] = useState({ total: 0 });
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });


  const id = localStorage.getItem('id');

  const totalAmount = async () => {
         try {
           const res = await axios.get(
             "http://localhost:4000/bookings/booking/user/"+id
           );
           console.log("Total....",res.data.data);
           setAmount(res.data.data);
           if (res.data.data && res.data.data.length > 0) {
             var amountBooking = 0;
             for (const booking of res.data.data) {
               amountBooking += booking.total;
               setAmount({ total: amountBooking });
             }
             console.log("Total Amount of Done Bookings:", amountBooking);
           }
         } catch (error) {
           console.log(error.response.data);
         }
       };


      const getBookingByUserId = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/bookings/booking/user/"+id
        );
        console.log(res.data.data);
        setTotalBook(res.data.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };     
    

  const getPendingBooking = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/bookings/booking/pending/user/${id}`);
      setBook(res.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getDoneBooking = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/bookings/booking/done/${id}`);
      setDoneBook(res.data.data);
    } catch (error) {
      console.error("Error fetching done bookings:", error);
    }
  };

  const getAllService = async () => {
    try {
      const res = await axios.get("http://localhost:4000/services/service");
      console.log("service", res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        const categoryCounts = {};
        for (const service of res.data.data) {
          if (service.category) {
            const categoryName = service.category.name;
            const categoryAmount = service.fees || 0;
            categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + categoryAmount;
          }
        }
        const transformedData = {
          labels: Object.keys(categoryCounts),
          datasets: [
            {
              label: "Service",
              data: Object.values(categoryCounts),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(125, 216, 186, 0.6)",
                "rgba(55, 26, 186, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        };
        setData(transformedData);
      }
    } catch (error) {
      console.error("Error fetching service:", error);
      alert("Error fetching service");
    }
  };

  useEffect(() => {
    getAllService();
    getPendingBooking();
    getDoneBooking();
    totalAmount();
    getBookingByUserId()
  }, []);

  return (
    <>
     <Box boxShadow={3} sx={{backgroundColor:"#f0f3ff"}} py={2} mt={2}>
                <Typography variant="h4" align="center" gutterBottom>
                    User Dashboard
                </Typography>
            </Box>
            <Box p={2}>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
            <TrendingUp fontSize="large" color="primary" />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Booking
              </Typography>
              
              <Typography variant="h4">{totalBook.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
            <DoneAll fontSize="large" color="success" />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Done Booking
              </Typography>
              <Typography variant="h4">{doneBook.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
            <MonetizationOn fontSize="large" color="info" />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Revenue
              </Typography>
              <Typography variant="h4">₹{amount.total}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                Pending Booking
              </Typography>
               <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"#ACE2E1"}}>
            <TableCell >Service Name</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {book.map((booking) => (
            <TableRow key={booking._id} sx={{backgroundColor:"#EEEEEE"}}>
              <TableCell>{booking?.service?.serviceName}</TableCell>
              <TableCell>{booking?.service?.fees}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell>
              <Button
                  component={Link}
                  to={`/user/payment/${booking._id}`}
                  variant="contained"
                  color="info"
                  sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#ffff',
                    color:"#1976d2",
                    border:"1px solid #1976d2" 
                  },
                  }}
              >
                Done Your Payment
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Add Address
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Add a new address to your profile to make bookings easier.
                </Typography>
                <Link to='addAddress'><Button
                  variant="contained"
                  color="primary"
                >
                  Add Address
                </Button></Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      <Grid container spacing={3} mt={5} mb={8}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                Total Expense of individual category
              </Typography>
              <div style={{ height: 350}}>
                <Bar data={data} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};
