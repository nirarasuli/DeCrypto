import React from 'react'
import {AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography} from "@material-ui/core";
import {makeStyles , createTheme} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(()=>({
  title:{
    flex:1,
    color: "#E8CF7D",
    fontFamily: "Plus Jakarta Sans",
    fontWeight:"bold",
    cursor:"pointer"
  },
}));
const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency}=CryptoState();
  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff"
      },
      type:"dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={()=>navigate("/")} className={classes.title} variant="h6">
              DeCrypto
            </Typography>
            <Select
              defaultValue={"CAD"}
              variant='outlined'
              style={{
                width :100,
                height: 40,
                marginRight:15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"CAD"}>CAD</MenuItem>
              <MenuItem  value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header