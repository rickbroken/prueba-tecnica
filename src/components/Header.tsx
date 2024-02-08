import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  return (
    <Grid
      container xs={1} md={2}
      position={'relative'}
      overflow={'hidden'}
      className="header"
      style={{height: '95vh'}} 
      >
      <Grid 
        item
        width={'100%'}
        height={'80px'}
        bgcolor={'#0e4564'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <span style={{color: 'white'}} >LOGO</span>
      </Grid>

      <Grid item className='nav'>
        <ul>
          <Grid 
            item

          >
            <Link
              to={'/administrar-vehiculos'}
            >
              Administrador Vehículo Arrendado
            </Link>
          </Grid>
        </ul>
      </Grid>
    </Grid>
  );
}
 
export default Header;