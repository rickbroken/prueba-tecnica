import { useState } from "react";
import { Button, Checkbox, Grid, TextField } from "@mui/material";
import TitleMain from "../components/TitleMain";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import TablaVehiculosArrendados from "../components/TablaVehiculosArrendados";
import ModalBuscar from '../components/ModalBuscar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type Vehiculo } from "../types";
import { format } from 'date-fns';
import { enviarRegistroVehiculo } from "../functions/enviarRegistroVehiculo";




const AdministrarVehiculos: React.FC = () => {
  const [modalBuscar, setModalBuscar] = useState<boolean>(false);

  const [nuevoVehiculo, setNuevoVehiculo] = useState<Vehiculo>({
      nombre: "",
      placa : "",
      id_marca : 281,
      empresa_contratista : "",
      descripcion : "",
      asignar_hoja_de_vida : false,
      es_agendable : false,
      fecha_inicio:'',
      fecha_fin:""
  });

  const handleFechaInicio = (value:  { format: () => string } | null) => {
    if (value) {
      const fechaInicio = value.format();
      const fechaFormateada = format(new Date(fechaInicio), 'yyyy-MM-dd');
      setNuevoVehiculo((prev)=>({...prev, fecha_inicio: fechaFormateada}));
    } else {
      console.error('El valor proporcionado no contiene $id o es null.');
    }
  };
  
  const handleFechaFin = (value: { format: () => string } | null) => {
    if (value) {
      const fechaInicio = value.format();
      const fechaFormateada = format(new Date(fechaInicio), 'yyyy-MM-dd');
      setNuevoVehiculo((prev)=>({...prev, fecha_fin: fechaFormateada}));
    } else {
      console.error('El valor proporcionado no contiene $id o es null.');
    }
  };


  console.log(nuevoVehiculo);
  

  return (
    <>
      {
        modalBuscar &&
        <ModalBuscar setNuevoVehiculo={setNuevoVehiculo} setModalBuscar={setModalBuscar} />
      }
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
              onChange={(e) => setNuevoVehiculo((prev) => ({ ...prev, nombre: e.target.value }))}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Placa *"
              variant="outlined"
              onChange={(e) => setNuevoVehiculo((prev) => ({ ...prev, placa: e.target.value }))}
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
              onChange={(e) => setNuevoVehiculo((prev) => ({ ...prev, empresa_contratista: e.target.value }))}
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
              onChange={(e) => setNuevoVehiculo((prev) => ({ ...prev, descripcion: e.target.value }))}
            />
          </Grid>

          <Grid container xs={11.7} alignItems={'center'}>
            <Grid item sm={3}>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker 
                    label="Fecha Inicio *"
                    onChange={handleFechaInicio}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item sm={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker 
                    label="Fecha Fin *" 
                    onChange={handleFechaFin}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <span>Desea Agregarle Hoja de Vida:</span>
              <Checkbox
                checked={nuevoVehiculo.asignar_hoja_de_vida}
                onChange={() => setNuevoVehiculo((prev) => ({ ...prev, asignar_hoja_de_vida: !nuevoVehiculo.asignar_hoja_de_vida}))}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </Grid>
            <Grid item margin={'0px 10px'}>
              <span>Es agendable:</span>
              <Checkbox
                checked={nuevoVehiculo.es_agendable}
                onChange={() => setNuevoVehiculo((prev) => ({ ...prev, es_agendable: !nuevoVehiculo.es_agendable}))}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </Grid>
          </Grid>

          <Grid container xs={11.7} alignItems={'center'} gap={2} justifyContent={'end'} margin={'10px 0px'}>
            <Button
              onClick={()=>setModalBuscar(true)}
              variant="contained" 
              startIcon={<SearchIcon />}>
              Buscar
            </Button>
            <Button 
              onClick={()=>enviarRegistroVehiculo(nuevoVehiculo)}
              variant="contained" 
              color="success" 
              startIcon={<SaveIcon />}>
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
