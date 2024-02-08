import { Button, Grid } from '@mui/material'
import { Icon } from '@iconify/react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';


function App() {

  return (
    <div className='main'>
      <Grid container  spacing={2}>
        <Header />
        <Grid item xs={1} md={10}>
          <Aside />
          <Grid>
            Main
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default App
