import { Carrera } from "@prisma/client";

export class Estudiante {
  id_estudiante: number;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  fecha_nacimiento: Date;
  id_carrera: number;

  carrera?: Carrera[];
  //materias?: Estudiante_Materia[]
}
