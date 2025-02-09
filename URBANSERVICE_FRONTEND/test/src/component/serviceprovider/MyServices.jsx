
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardHeader, CardContent, Table, TableHead, TableBody, TableRow, TableCell, Tooltip } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Chart from 'chart.js/auto';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MyServices = () => {
    const [serviceProviders, setServiceProviders] = useState([]);
    const [serviceAnalyticsData, setServiceAnalyticsData] = useState(null);
    const [mostPopularService, setMostPopularService] = useState('');
    const id = localStorage.getItem("id");

    const fetchMyService = async () => {
        try {
            if (id != null || id != undefined) {
                const res = await axios.get("http://localhost:4000/services/service/providerid/" + id);
                setServiceProviders(res.data.data);

                // Calculate most popular service
                const serviceNames = res.data.data.map(service => service.serviceName);
                const serviceCounts = serviceNames.reduce((counts, name) => {
                    counts[name] = (counts[name] || 0) + 1;
                    return counts;
                }, {});
                const mostPopular = Object.keys(serviceCounts).reduce((a, b) => serviceCounts[a] > serviceCounts[b] ? a : b);
                setMostPopularService(mostPopular);
            }
        } catch (error) {
            console.log(error);
            toast.error('😣 Internal Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const deleteService = async (id) => {
        try {
            const res = await axios.delete("http://localhost:4000/services/service/" + id);
            if (res.status === 200) {
                fetchMyService();
            }
        } catch (error) {
            console.log(error);
            toast.error('😣 Internal Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const fetchServiceAnalyticsData = async () => {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Service Usage Trends',
                    data: [65, 59, 80, 81, 56, 55, 40], 
                    fill: false,
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.1
                }
            ]
        };
    };

    useEffect(() => {
        if (id != null || id != undefined) {
            fetchMyService();
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchServiceAnalyticsData();
            setServiceAnalyticsData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let chartInstance = null;

        const renderChart = () => {
            if (serviceAnalyticsData) {
                if (chartInstance) {
                    chartInstance.destroy();
                }

                const ctx = document.getElementById('serviceAnalyticsChart');
                chartInstance = new Chart(ctx, {
                    type: 'line',
                    data: serviceAnalyticsData,
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
        };

        renderChart();

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [serviceAnalyticsData]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>
            <Card sx={{ p: 4 }}>
                <CardHeader title="My Services" subheader="Here are your added services" sx={{ backgroundColor: '#007bff', color: '#fff' }} />
                <CardContent>
                    <Slider {...settings}>
                        <div style={{ height: '500px', overflow: 'auto' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Operations</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {serviceProviders.map((serviceprovider) => (
                                        <TableRow key={serviceprovider._id}>
                                            <TableCell>{serviceprovider.serviceName}</TableCell>
                                            <TableCell>
                                                <Tooltip title="Details" arrow>
                                                    <Button component={Link} to={`/serviceprovider/details/${serviceprovider._id}`} variant="contained" color="info" sx={{ '&:hover': { color: '#1976d2', backgroundColor:"#ffff", border:"1px solid #1976d2"} }}>DETAILS</Button>
                                                </Tooltip>
                                                <Tooltip title="Update" arrow>
                                                    <Button component={Link} to={`/serviceprovider/updateservice/${serviceprovider._id}`} variant="contained" color="success" sx={{ mx: 1, '&:hover': { color: '#4caf50', backgroundColor:"#ffff", border:"1px solid #4caf50 " } }}>Update</Button>
                                                </Tooltip>
                                                <Tooltip title="Delete" arrow>
                                                    <Button onClick={() => deleteService(serviceprovider._id)} variant="contained" color="error" sx={{ mx: 1, '&:hover': { color: '#E72929', backgroundColor:"#ffff" , border:"1px solid #E72929" }}}>Delete</Button>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div style={{ height: '500px' }}>
                            <CardContent>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ maxWidth: '300px', maxHeight: '300px', marginRight: '20px' }}>
                                        <h5>Service Analytics</h5>
                                        <canvas id="serviceAnalyticsChart" style={{ width: '100%', height: 'auto' }}></canvas>
                                    </div>
                                    <div>
                                        <h5>Total Number of Services: {serviceProviders.length}</h5>
                                        <h5>Most Popular Service: {mostPopularService}</h5>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                        <div style={{ height: '500px' }}>
                            <CardContent>
                                <div style={{ textAlign: 'center' }}>
                                    <p>Expand your offerings and reach new heights by adding a new service to your profile. Enhance your business and attract more customers with just a few clicks!</p>
                                    <Button component={Link} to="/serviceprovider/addservice" variant="contained" color="primary" sx={{ mx: 1, '&:hover': { color: '#1976d2', backgroundColor:"#ffff", border:"1px solid #1976d2" }}}>Add Service</Button>
                                </div>
                            </CardContent>
                        </div>
                    </Slider>
                </CardContent>
                <ToastContainer />
            </Card>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ position: 'absolute', right: 0, bottom: 0, marginRight: '10px', marginBottom: '10px', cursor: 'pointer', zIndex: '1' }}
            onClick={onClick}
        >
            <NavigateNextIcon />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ position: 'absolute', left: 0, bottom: 0, marginLeft: '10px', marginBottom: '10px', cursor: 'pointer', zIndex: '1' }}
            onClick={onClick}
        >
            <NavigateBeforeIcon />
        </div>
    );
};
