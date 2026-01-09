import { defineConfig, env } from "prisma/config";
import readlineSync from 'readline-sync';
import * as dotenv from 'dotenv';
dotenv.config();

let schemaPath: string;
let databaseUrl: string;

const input = readlineSync.question('Escribe "main", "user", "professor": ');

if (input === "main") {
  schemaPath = './prisma/schema.prisma';
  databaseUrl = env("DATABASE_URL");
} else if (input === "user") {
  schemaPath = './prisma/schema-user.prisma';
  databaseUrl = env("USER_DATABASE_URL");
} else if (input === "professor"){
  schemaPath = './prisma/schema-professor.prisma';
  databaseUrl = env("PROFESSORS_DATABASE_URL");
}else {
  throw new Error('Entrada no válida');
}

export default defineConfig ({
  schema: schemaPath,
  datasource: {
    url: databaseUrl,
  }
})