import { Button, Checkbox, Grid, TextField } from "@mui/material";
import TitleMain from "../components/TitleMain";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import TablaVehiculosArrendados from "../components/TablaVehiculosArrendados";

const AdministrarVehiculos: React.FC = () => {
  return (
    <>
      <Grid
        container
        width={"100%"}
        padding={"10px 20px"}
        borderRadius={"10px"}
        justifyContent={'center'}
        className="cont-admin-vehiculos"
      >
        <TitleMain title="Administrar vehículo arrendado" />
        <Grid container spacing={2} margin='0'>
          <Grid item xs={2.9}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Nombre *"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Placa *"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Marca *"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Empresa proveedora *"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={11.7} margin={'20px 0'}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Descripcion *"
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>

          <Grid container xs={11.7} alignItems={'center'}>
            <Grid item sm={3}>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker  label="Fecha Inicio *" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item sm={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Fecha Fin *" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <span>Desea Agregarle Hoja de Vida:</span>
              <Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </Grid>
            <Grid item margin={'0px 10px'}>
              <span>Es agendable:</span>
              <Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </Grid>
          </Grid>

          <Grid container xs={11.7} alignItems={'center'} gap={2} justifyContent={'end'} margin={'10px 0px'}>
            <Button variant="contained" startIcon={<SearchIcon />}>
              Buscar
            </Button>
            <Button variant="contained" color="success" startIcon={<SaveIcon />}>
              Guardar
            </Button>
            <Button variant="contained" color="error" startIcon={<CloseIcon />}>
              Salir
            </Button>
            <Button variant="contained" style={{background: 'gray'}} startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Grid>
          
      </Grid>
      
      <TablaVehiculosArrendados />
    </>
  );
};

export default AdministrarVehiculos;
