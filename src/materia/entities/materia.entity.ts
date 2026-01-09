import { Ciclo } from "@prisma/client";

export class Materia {
  id_materia: number;
  nombre: string;
  codigo: string;
  creditos: number;
  id_ciclo: number;

  ciclo?: Ciclo[];
  //docentes?: Docente_Materia[]
  //estudiantes?: Estudiante_Materia[]
}
