import { defineConfig } from "prisma/config";
import readlineSync from 'readline-sync';
import * as dotenv from 'dotenv';
dotenv.config();

let schemaPath: string;

const input = readlineSync.question('Escribe "main", "user", "professor": ');

if (input === "main") {
  schemaPath = './prisma/schema.prisma';
  process.env.DATABASE_URL = process.env.DATABASE_URL;
} else if (input === "user") {
  schemaPath = './prisma/schema-user.prisma';
  process.env.DATABASE_URL = process.env.USER_DATABASE_URL;
} else if (input === "professor"){
  schemaPath = './prisma/schema-professor.prisma';
  process.env.DATABASE_URL = process.env.PROFESSORS_DATABASE_URL;
} else {
  throw new Error('Entrada no válida');
}

export default defineConfig ({
  schema: schemaPath,
})