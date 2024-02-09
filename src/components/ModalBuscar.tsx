import { Button, Grid, Pagination, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TitleMain from "./TitleMain";
import { Dispatch, SetStateAction, useState } from "react";
import { type Vehiculo } from "../types";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

const token = import.meta.env.VITE_API_TOKEN as string;

interface Props {
  setModalBuscar: (stateModal: boolean) => void;
  setNuevoVehiculo: Dispatch<SetStateAction<Vehiculo>>;
}

interface Params {
  nombre: string;
  placa: string;
}


const ModalBuscar: React.FC<Props> = ({ setModalBuscar, setNuevoVehiculo }) => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[] | null>([]);

  const [params, setParams] = useState<Params>({
    nombre: "",
    placa: "",
  });

  const handleModalMostrar: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
    if ((e.target as HTMLDivElement).id === "fondo-bloqueo") {
      setModalBuscar(false);
    }
  };

  const buscarRegistro = async () => {
    try {
      fetch(
        `https://back-end-bia-beta.up.railway.app/api/almacen/vehiculos/busqueda/vehiculo/arrendado/?nombre=${params.nombre}&placa=${params.placa}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => setVehiculos(res.data))
        .catch((err) => console.log("Error interno CODE: " + err));
    } catch (error) {
      console.log("tienes un error " + error);
    }
  };

  const seleccionarVehiculo = () => {
    if (vehiculos && vehiculos.length > 0) {
      setNuevoVehiculo(vehiculos[0]);
    }
  }

  console.log(vehiculos);
  

  return (
    <div
      id="fondo-bloqueo"
      onClick={handleModalMostrar}
      className="fondo-bloqueo-modal-buscar"
    >
      <Grid
        container
        bgcolor={"white"}
        width={"90%"}
        maxWidth={"800px"}
        borderRadius={"5px"}
        flexDirection={"column"}
      >
        <p style={{ textAlign: "start", margin: "10px 20px" }}>
          Buscar Arriendo
        </p>
        <Grid item display={"flex"} gap={2} padding={"10px 15px"}>
          <Grid item xs={3}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Nombre *"
              variant="outlined"
              onChange={(e) =>
                setParams((prev) => ({ ...prev, nombre: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Placa *"
              variant="outlined"
              onChange={(e) =>
                setParams((prev) => ({ ...prev, placa: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Marca *"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Empresa Proveedora *"
              variant="outlined"
            />
          </Grid>
          <Button 
            onClick={buscarRegistro}
            variant="contained" 
            startIcon={<SearchIcon />}>
            Buscar
          </Button>
        </Grid>

        <Grid container width={"90%"} margin={"10px auto"}>
          <TitleMain title="Resultados" />
          <Grid
            item
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <table width={"100%"} style={{ marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Placa</th>
                  <th>Empresa Contratista</th>
                </tr>
              </thead>
              <tbody>
                {vehiculos?.map((vehiculo) => {
                  return (
                    <tr key={vehiculo.id_vehiculo_arrendado}>
                      <td>{vehiculo.nombre}</td>
                      <td>{vehiculo.placa}</td>
                      <td>{vehiculo.empresa_contratista}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination count={5} />
          </Grid>

          <Grid
            item
            width={"100%"}
            display={"flex"}
            gap={2}
            justifyContent={"end"}
            margin={"10px 0px"}
          >
            <Button
              variant="contained"
              style={{ background: "gray" }}
              startIcon={<CloseIcon />}
              onClick={() => setModalBuscar(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
            >
              Seleccionar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalBuscar;
