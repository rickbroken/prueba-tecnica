import React from 'react';

const token = import.meta.env.VITE_API_TOKEN as string;

interface Props {
  id_vehiculo_arrendado: number;
}

export const eliminarRegistroVehiculo: React.FC<Props> = ({id_vehiculo_arrendado}) => {
  console.log(id_vehiculo_arrendado);
  
  try {
    fetch("https://back-end-bia-beta.up.railway.app/api/almacen/vehiculos/registro/vehiculo/arrendado/delete/6/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  } catch (error) {
    console.error(error);
  }
  return null;
}