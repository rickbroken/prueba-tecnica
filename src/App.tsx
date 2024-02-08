import { Button, Grid } from '@mui/material'
import { Icon } from '@iconify/react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import { Route, Routes } from 'react-router-dom';
import Home from './common/Home';
import AdministrarVehiculos from './common/AdministrarVehiculos';


function App() {

  return (
    <div className='main'>
      <Grid container  spacing={2}>
        <Header />
        <Grid item xs={1} md={10}>
        <Aside />

        <Routes>
          <Route path='/'  element={
              <Home />
            }/>
          <Route path='/administrar-vehiculos'  element={
              <AdministrarVehiculos />
            }/>
          <Route path='*'  element={
            <Home />
          }/>
        </Routes>
          
        </Grid>
        
      </Grid>
    </div>
  )
}

export default App
