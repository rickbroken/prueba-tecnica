import { Button, Grid } from "@mui/material";
import { eliminarRegistroVehiculo } from "../functions/eliminarRegistroVehiculo.ts";
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


interface Props {
  setAlertEliminar: (stateModal: boolean) => void;
  id_vehiculo_arrendado: number;
}

const AlertEliminar: React.FC<Props> = ({setAlertEliminar,id_vehiculo_arrendado}) => {

  return (
    <div
      id="fondo-bloqueo"
      className="fondo-bloqueo-modal-buscar"
      onClick={()=>setAlertEliminar(false)}
    >
      <Grid
        container
        bgcolor={"white"}
        maxWidth={'400px'}
        borderRadius={"5px"}
        flexDirection={"column"}
      >
        <Grid 
          item
          margin={'10px 10px'}
          fontSize={'20px'}
        >
          ¿Desea elimiar este registro?
        </Grid>
        <Grid item display={'flex'} justifyContent={'center'} gap={10} margin={'20px 10px'}>
          <Button 
            onClick={()=>eliminarRegistroVehiculo({id_vehiculo_arrendado})}
            variant="contained" 
            startIcon={<CheckIcon />} 
            color="success" 
            size="large">Si</Button>
          <Button 
            onClick={()=>setAlertEliminar(false)}
            variant="contained" 
            startIcon={<DoNotDisturbIcon />} 
            color="error" 
            size="large">No</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AlertEliminar;
