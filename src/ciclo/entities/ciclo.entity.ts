import { Carrera, Materia } from "@prisma/client"

export class Ciclo {
  id_ciclo: number;
  nombre: string;
  numero: number;
  id_carrera: number;

  carrera?: Carrera[]
  materias?: Materia[]
}
