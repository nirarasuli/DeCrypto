import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from "@material-ui/core"

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor: "#000220",
      color:"white",
      minHeight: "100vh",

    },
  }));
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path='/' component={Home} element={<Home/>} exact/>
          <Route path="/coins/:id" element={<CoinPage/>} component={CoinPage}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
