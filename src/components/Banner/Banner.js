import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>({
  banner:{
    backgroundImage: "url(./nathan-watson-9l98kFByiao-unsplash.jpg)",
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",

    
  },
  bannerContent:{
    height: "55vh",
    display:"flex",
    flexDirection : "column",
    paddingTop: 25,
    justifyContent:"space-around",
    textAlign: "center"

  },
  tagline:{
    display:"flex",
    height:"40%",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
  }
}));
const Banner = () => {
  const classes = useStyles();

  return(
  <div className={classes.banner}>
    <Container className={classes.bannerContent}>
      <div className={classes.tagline}>
        <Typography
        variant="h2"
        style={{
          fontWeight: "bold",
          marginBottom: 15,
          fontFamily: "Plus Jakarta Sans",
          letterSpacing : "0.3rem"
        }}> DeCrypto 

        </Typography>
        <Typography
        variant="h4"
        style={{
          color:"white",
          letterSpacing : "0.2rem",
          fontFamily: "Plus Jakarta Sans"
        }}>
          Find information about Cryptocurrencies.
        </Typography>
      </div>

    </Container>
  </div>
  )
}

export default Banner