import { Grid } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { eliminarRegistroVehiculo } from "../functions/eliminarRegistroVehiculo.ts";

interface Props {
  id_vehiculo_arrendado: number;
}

const DeleteRegistroVehiculo: React.FC<Props> = ({ id_vehiculo_arrendado }) => {
  return (
    <Grid>
      <DeleteForeverIcon 
        onClick={()=>eliminarRegistroVehiculo({ id_vehiculo_arrendado })}
        color="error" 
        className="pointer"/>
    </Grid>
  );
};
 
export default DeleteRegistroVehiculo;