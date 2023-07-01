import bgimage from "../assets/bgimage.jpg";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import bg from "../assets/bg.jpg";
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import { useState } from "react";
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import WeatherAtYourDestination from "./WeatherAtYourDestination";
import { Link } from "react-router-dom";

//commited something



const Home = () => {
  const [plan, setPlan] = useState([]);
  const [city, setCity] = useState("");
  const [days, setDays] = useState(0);
  const[weather, setWeather] = useState([])
  

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
const handleClick=()=>{
  Give();
  togglePopup();

}
  const Give=async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.split(",")[0]}&units=metric&appid=2b8712cef6f04bdefbfc6afc5cd56615`
    const response= await fetch(url)
    const results= await response.json()
  
    setWeather(results.main)
  }

  const Fun = () => {
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${days}&destination=${
      city.split(",")[0]
    }%2${city.split(",")[1]}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": 'fda3a6627amshbdeab15cca81ee5p1997aajsnf94d9f48e53d',
        "X-RapidAPI-Host": "ai-trip-planner.p.rapidapi.com",
      },
    };
    console.log(url)
    

    fetch(url, options)
      .then((data) => data.json())
      .then((result) => setPlan(result.plan))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      component="div"
      display="flex"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: "100% auto",
        overflow: "clip",
        direction: "column",
        overflowY:'auto'
      }}
    >
      <Stack alignItems="center">
        <Typography
          sx={{
            color: "white",
            fontWeight: "600",
            fontFamily: "cursive",
            fontSize: "40px",
          }}
        >
          TRAVEL FREAK <br />
        </Typography>

        <Typography
          fontWeight="800"
          pt="20px"
          sx={{
            color: "#aaaaaa",

            fontSize: "25px",
            fontFamily: "cursive",
          }}
        >
          <Typewriter
            options={{
              strings: ["Need Therapy?", "Travel!"],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "..",
            }}
          />
        </Typography>
        <Stack direction='row' sx={{
          gap:'10px'
        }}>
        <Box
          component="form"
          marginTop="50px"
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: {
              xs: "70vw",
              sm: "60vw",
              md: "50vw",
              lg: "30vw",
            },
            background: "rgba(0,0,0,0.8)",
          }}
          autoComplete="off"
        >
          <TextField
            value={city}
            placeholder=" Enter in this format (City,Country)"
            onChange={(e) => setCity(e.target.value)}
            sx={{
              width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
              color: "white",
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Box>

        <Box
          component="form"
          marginTop="50px"
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: {
              xs: "30vw",
              sm: "26vw",
              md: "22vw",
              lg: "20vw",
            },
            background: "rgba(0,0,0,0.8)",
          }}
          autoComplete="off"
        >
          <TextField
            value={days}
            onChange={(e) => setDays(e.target.value)}
            sx={{
              width: { xs: "70vw", sm: "60vw", md: "50vw", lg: "55vw" },
              color: "white",
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Box>
        </Stack>
        
<Stack direction='row'>
<Button
          variant="contained"
          onClick={()=>{Fun()}}
          sx={{
            mt: "20px",
            mr:'60px',
            backgroundColor: "black",
            ":hover": {
              backgroundColor: "#2e2e2e",
            },
          }}
        >
          Plan it
        </Button > 
       
        <Button onClick={handleClick}
          variant="contained"
         
          sx={{
            mt: "20px",
            mr:'60px',
            backgroundColor: "black",
            ":hover": {
              backgroundColor: "#2e2e2e",
            },
          }}
        >
          Check Weather
        </Button >
      

</Stack>
<Box marginTop='30px' alignContent='center' typography='h8' marginBottom='10px'
        sx={{
          color:'white',
          background: "rgba(0,0,0,0.8)",
          width:{
            xs: "40vw",
            sm: "46vw",
            md: "60vw",
            lg: "60vw",
            mb:'20px'
          },
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          {showPopup && <div>          {!weather?(<h5>no data found</h5>):(<h5 style={{
            fontFamily:'cursive',
            fontSize:'20px'
          }}>Temperature at your desitination is : {weather.temp} degree celsius</h5>)}</div>}

          </Box>
        <Box marginTop='30px' alignContent='center' typography='h8' marginBottom='10px'
        sx={{
          color:'white',
          background: "rgba(0,0,0,0.8)",
          width:{
            xs: "40vw",
            sm: "46vw",
            md: "60vw",
            lg: "60vw",
            mb:'20px'
          },
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        {
        plan?.map((obj, i) => (
          <div key={i}>
            <h1 style={{
              marginLeft:'20px'
            }}>Day : {obj.day}</h1>
            <div>
              {obj?.activities.map((activity, j) => (
                <p key={j}>
                <dt style={{
                  marginLeft:'40px'
                }}> <AccessTimeFilledOutlinedIcon/> At {activity.time}</dt>    <dd style={{
                  marginLeft:'100px'
                }}>{activity.description}</dd>
                </p>
              ))}
            </div>
          </div>
        ))}
      </Box>
    
      </Stack>


      
    </Box>
  );
};
export default Home;

{
  /* <TextField 
  
InputProps={{
  style: {
    background: 'transparent',
    border: 'none',
    width:{xs:'70vw',
    sm:'60vw',
    md:'50vw',
    lg:'55vw'},
  },
}}
InputLabelProps={{
  shrink: true,
}}
/> */
}
