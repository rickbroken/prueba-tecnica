import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Aside: React.FC = () => {

  const navigate = useNavigate();

  const redirectHome:() => void = () => {
    navigate('/');
  }
  return (
    <Grid 
      container 
      justifyContent="space-between"
      alignItems="center"
      marginBottom="60px"
    >
      <div>
        <Icon className="pointer" width={30} icon="gg:menu-round" />
        <Icon 
          className="pointer" 
          width={25} 
          icon="ic:sharp-home"
          onClick={redirectHome}  
        />
      </div>
      <div>
        <Button className="pointer" variant="contained">
          <Icon icon="ph:key-return-bold" />
          <span style={{paddingLeft: '10px'}}>
            Retorno
          </span>
        </Button>
      </div>
      <div>Seguridad: Laboral</div>
      <Grid>
        <Icon className="pointer" width={30} style={{margin: '0px 10px'}} icon="icon-park-solid:dark-mode" />
        <Icon className="pointer" width={30} style={{margin: '0px 10px'}} icon="mingcute:notification-fill" />
        <Icon className="pointer" width={30} style={{margin: '0px 10px'}} icon="mingcute:alert-line" />
      </Grid>
    </Grid>
  );
}
 
export default Aside;