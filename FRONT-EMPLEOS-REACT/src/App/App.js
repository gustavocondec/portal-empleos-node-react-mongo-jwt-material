import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@material-ui/core"
import './App.css';//estilos de la pagina

//Vistas
import Home from "./Home/Home"
import Login from "./Users/Login/Login"
import Register from "./Users/Register/Register"


//Vistas de Empresa
import HomeEmpresas from "./Empresa/Home/Home"
import LoginEmpresas from "./Empresa/Login/Login"
import RegisterEmpresas from "./Empresa/Register/Register"
function App () {

  //  ### para el menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //  ###  fin para el menu
  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button text="true" to="/" component={Link}>Laborum</Button>
            <Button text="true" to="/login" component={Link}>
              Login
            </Button>
            <Button text="true" to="/register" component={Link}>
              Register
            </Button>

            <Button aria-controls="menu-empresas" aria-haspopup="true" onClick={handleClick}>
              Empresas
            </Button>
            <Menu
              id="menu-empresas"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} to="/empresas" component={Link}> Laborum para empresas</MenuItem>
              <MenuItem onClick={handleClose} to="/empresas/login" component={Link}>Inicia Sesion empresas</MenuItem>
              <MenuItem onClick={handleClose} to="/empresas/register" component={Link}>Registra tu empresa</MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route exact path="/empresas" component={HomeEmpresas}></Route>
          <Route path="/empresas/login" component={LoginEmpresas}></Route>
          <Route path="/empresas/register" component={RegisterEmpresas}></Route>
        </Switch>

      </Router>
    </div >
  );
}

export default App;
