import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarreraService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCarreraDto: CreateCarreraDto) {
    return await this.prisma.carrera.create({
      data: createCarreraDto
    });
  }

  async findAll() {
    return await this.prisma.carrera.findMany();
  }

  async findOne(id: number) {
      const carrera = await this.prisma.carrera.findUnique({
      where: { id_carrera: id }
    });
    if (!carrera) {
      throw new NotFoundException(`Carrera with ID ${id} not found`);
    }
    return carrera;
  }

/*
  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
*/

}