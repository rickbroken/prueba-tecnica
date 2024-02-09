
export interface Results {
  data: Vehiculo[];
}

export interface Vehiculo {
  id_vehiculo_arrendado?: number;
  nombre:                string;
  descripcion:           string;
  placa:                 string;
  empresa_contratista:   string;
  tiene_hoja_de_vida?:    boolean;
  asignar_hoja_de_vida?: boolean;
  fecha_inicio?: string | null;
  es_agendable?: boolean;
  id_marca:              number;
  fecha_fin?: string;
}

export interface  NuevoVehiculo{
  nombre: string;
  placa: string;
  id_marca: number;
  empresa_contratista: string;
  descripcion: string;
  asignar_hoja_de_vida: boolean;
  es_agendable: boolean;
  fecha_inicio: string | null;
  tiene_hoja_de_vida?: boolean;
  fecha_fin: string;
}