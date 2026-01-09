import { Ciclo, Estudiante } from "@prisma/client";

export class Carrera {
  id_carrera: number;
  nombre: string;
  duracion: number;
  facultad: string;
  
  ciclos?: Ciclo[];
  estudiantes?: Estudiante[];
}