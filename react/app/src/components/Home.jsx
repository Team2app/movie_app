import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../styles/Home.jsx";
import '../styles/Home.css'
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.HeardeWraper} id='Headder'>

      <Box className={classes.Headercontaier}>
        <Typography varinat='h3' component='h4' className={classes.headerTitle}>
          <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={[" Welcome to IncedoFlix", " Book Movie Tickets Here", " Login / Register"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
          Book Your Movie tickets in IncedoFlix Here...
          <br />
          Login and Book .:{")"}
        </Typography>
        <div className="body-arrow">
          <button className="btn" onClick={()=>navigate('/login')}>
            <span className="circle-1"></span>
            <span className="circle-2"></span>
            <span className="text">Login</span>
          </button>
        </div>
      </Box>
    </Box>
  );
}