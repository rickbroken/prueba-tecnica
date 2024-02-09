export interface Results {
  data: Vehiculo[];
}

export interface Vehiculo {
  id_vehiculo_arrendado: number;
  nombre:                string;
  descripcion:           string;
  placa:                 string;
  empresa_contratista:   string;
  tiene_hoja_de_vida:    boolean;
  id_marca:              number;
}
