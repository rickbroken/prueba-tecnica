import { Grid } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import AlertEliminar from "./AlertEliminar.tsx";

interface Props {
  id_vehiculo_arrendado: number;
}

const DeleteRegistroVehiculo: React.FC<Props> = ({ id_vehiculo_arrendado }) => {
  const [alertEliminar, setAlertEliminar] = useState<boolean>(false);


  return (
    <Grid>
      { alertEliminar && <AlertEliminar id_vehiculo_arrendado={id_vehiculo_arrendado} setAlertEliminar={setAlertEliminar} />}
      <DeleteForeverIcon 
        onClick={()=>setAlertEliminar(true)}
        color="error" 
        className="pointer"/>
    </Grid>
  );
};
 
export default DeleteRegistroVehiculo;