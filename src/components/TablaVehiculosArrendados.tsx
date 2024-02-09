import React, { useEffect, useState } from "react";
import { type Vehiculo } from "../types";
import { Button, Grid, Pagination, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DeleteRegistroVehiculo from "./DeleteRegistroVehiculo";

const token = import.meta.env.VITE_API_TOKEN as string;

const TablaVehiculosArrendados: React.FC = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    const obtenerVehiculos = async () => {
      try {
        fetch(
          "https://back-end-bia-beta.up.railway.app/api/almacen/vehiculos/busqueda/vehiculo/arrendado/",
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
    obtenerVehiculos();
  }, [vehiculos]);

  return (
    <Grid container justifyContent={'center'}>
      <Grid container spacing={2} marginTop={"30px"}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Placa"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<SearchIcon />}>
            Buscar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" startIcon={<CleaningServicesIcon />}>
            Limpiar
          </Button>
        </Grid>
      </Grid>
      <table width={"100%"} style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID vehiculo</th>
            <th>ID Marca</th>
            <th>Nombre</th>
            <th>Placa</th>
            <th>Empresa Contratista</th>
            <th>Hoja de vida</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos?.map((vehiculo) => {
            if (vehiculo.id_vehiculo_arrendado !== undefined) {
              return (
                <tr key={vehiculo.id_vehiculo_arrendado}>
                  <td>{vehiculo.id_vehiculo_arrendado}</td>
                  <td>{vehiculo.id_marca}</td>
                  <td>{vehiculo.nombre}</td>
                  <td>{vehiculo.placa}</td>
                  <td>{vehiculo.empresa_contratista}</td>
                  <td>{vehiculo.tiene_hoja_de_vida ? "SI" : "No"}</td>
                  <td style={{textAlign: 'center'}}>
                    <DeleteRegistroVehiculo id_vehiculo_arrendado={vehiculo.id_vehiculo_arrendado}/>
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
      <Pagination count={5} />
    </Grid>
  );
};

export default TablaVehiculosArrendados;
