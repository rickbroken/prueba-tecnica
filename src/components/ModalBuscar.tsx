import { Grid, TextField } from "@mui/material";

interface Props {
  setModalBuscar: (stateModal: boolean) => void;
}

const ModalBuscar: React.FC<Props> = ({ setModalBuscar }) => {
  const handleModalMostrar: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
    console.log((e.target as HTMLDivElement).id);
    if((e.target as HTMLDivElement).id === 'fondo-bloqueo'){
      setModalBuscar(false);
    }
  };
  return (
    <div id="fondo-bloqueo" onClick={handleModalMostrar} className="fondo-bloqueo-modal-buscar">
      <Grid
        container
        bgcolor={"white"}
        width={'90%'}
        maxWidth={'700px'}
        borderRadius={'5px'}
        flexDirection={'column'}
      >
        <p>Buscar Arriendo</p>
        <Grid item >
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Nombre *"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalBuscar;
