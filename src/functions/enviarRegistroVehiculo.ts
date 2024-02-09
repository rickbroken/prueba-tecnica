import {type Vehiculo} from '../types.ts';

const token = import.meta.env.VITE_API_TOKEN as string;

export const enviarRegistroVehiculo = (nuevoVehiculo: Vehiculo) => {
  try {
    fetch('https://back-end-bia-beta.up.railway.app/api/almacen/vehiculos/registrar/vehiculo/arrendado/create/',
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoVehiculo)
    })
    .then((res)=> res.json())
    .then((res)=>console.log(res))
  } catch (error) {
    console.error(error);
  }
}