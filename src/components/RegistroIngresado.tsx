import { Grid } from "@mui/material";
import Ingresado from '../img/Ingresado.svg';


interface Props {
  setModalResgistroIngresado: (stateModal: boolean) => void;
}

const RegistroIngresado: React.FC<Props> = ({setModalResgistroIngresado}) => {
  setTimeout(() => {
    setModalResgistroIngresado(false)
  }, 3000);

  return (
    <div
      id="fondo-bloqueo"
      className="fondo-bloqueo-modal-buscar"
      onClick={()=>setModalResgistroIngresado(false)}
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
          Registro Ingresado Correctamente
        </Grid>
        <Grid item display={'flex'} justifyContent={'center'} gap={10} margin={'20px 10px'}>
          <img src={Ingresado} width={150} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegistroIngresado;
