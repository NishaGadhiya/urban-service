import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart,
    LinearScale,
    LineElement,
    Tooltip,
    Title,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(Tooltip);
Chart.register(Title);

const ChartCard = styled(Card)({
    width: '100%',
    marginBottom: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
});

const SupportCard = styled(Card)({
  width: '100%',
  height: '100%',
  marginBottom: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
  transition: 'transform 0.3s ease',
  '&:hover': {
      transform: 'scale(1.02)',
  },
});

const SocialMediaButton = styled(Button)({
  marginRight: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  '&:hover': {
    border:"1px solid #3f51b5 ",
    backgroundColor: '#ffff', 
    color: '#3f51b5', 
    transform:"scale(1.05)",
      
  },
  marginTop:"12px"
});

const HelpButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
});

const HelpButton = styled(Button)({
  borderRadius: '5px',
  '&:hover': {
      border:"1px solid #3f51b5 ",
      backgroundColor: '#ffff', 
      color: '#3f51b5', 
      transform:"scale(1.05)",
      // transition:"all .5s",
  },
  marginTop:"12px"
});

export const ServiceProviderDashboard = () => {
  
  const [barChartData, setBarChartData] = useState({
    labels:[],
    datasets:[]
  });

  const [pieChartData, setPieChartData] = useState({
    labels:[],
    datasets:[]
  });

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const res = await axios.get("http://localhost:4000/services/service");
      console.log("Services", res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        const uniqueServiceTypes = [...new Set(res.data.data.map(service => service.type.name))];
        
        // Bar Chart Data
        const barChartData = {
          labels: uniqueServiceTypes,
          datasets: [
            {
              label: "Services",
              data: uniqueServiceTypes.map(type => {
                // Summing up fees for each service type
                return res.data.data.reduce((accumulator, service) => {
                  if (service.type.name === type) {
                    return accumulator + service.fees;
                  } else {
                    return accumulator;
                  }
                }, 0);
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(105, 186, 86, 0.6)",
              ],
              borderWidth: 1,
            }
          ]
        };
        setBarChartData(barChartData);

        // Pie Chart Data
        const pieChartData = {
          labels: uniqueServiceTypes,
          datasets: [
            {
              label: "Services",
              data: uniqueServiceTypes.map(type => {
                // Counting the occurrences of each service type
                return res.data.data.filter(service => service.type.name === type).length;
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(105, 186, 86, 0.6)",
              ],
              borderWidth: 1,
            }
          ]
        };
        setPieChartData(pieChartData);
      }
    } catch(error) {
      console.error("Error while fetching the services", error);
      alert("error");
    }
  };
  
  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>Service Provider Dashboard</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <ChartCard>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>Bar Chart</Typography>
              <div style={{ height: 300 }}>
                <Bar 
                  data={barChartData} 
                  options={{
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            const value = context.parsed.y;
                            return '₹' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </CardContent>
          </ChartCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>Pie Chart</Typography>
              <div style={{ height: 300 }}>
                <Pie data={pieChartData} />
              </div>
            </CardContent>
          </ChartCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SupportCard>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>Help and Support</Typography>
              <Typography variant="body1" align="center">
                If you need assistance or have any questions, please refer to our FAQs or contact our customer support team.
              </Typography>
              <Typography variant="body1" align="center">
                <HelpButtonContainer>
                  <HelpButton variant="contained" color="primary" >FAQ</HelpButton>
                  <HelpButton variant="contained" color="primary" >Support</HelpButton>
                </HelpButtonContainer>
              </Typography>
            </CardContent>
          </SupportCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SupportCard>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>Social Media Integration</Typography>
              <Typography variant="body1" align="center">
                Follow us on social media for updates, promotions, and more!
              </Typography>
              <Typography variant="body1" align="center">
                <SocialMediaButton variant="contained" color="primary">Facebook</SocialMediaButton>
                <SocialMediaButton variant="contained" color="primary">Twitter</SocialMediaButton>
                <SocialMediaButton variant="contained" color="primary">Instagram</SocialMediaButton>
              </Typography>
            </CardContent>
          </SupportCard>
        </Grid>
      </Grid>
    </div>
  );
};

