import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CicloService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCicloDto: CreateCicloDto) {
    return await this.prisma.ciclo.create({
      data: createCicloDto
  });
}

  async findAll() {
    return await this.prisma.ciclo.findMany();
  }

  async findOne(id: number) {
    const ciclo = await this.prisma.ciclo.findUnique({
          where: { id_ciclo: id }
        });
        if (!ciclo) {
          throw new NotFoundException(`Ciclo with ID ${id} not found`);
        }
        return ciclo;
  }

/*
  update(id: number, updateCicloDto: UpdateCicloDto) {
    return `This action updates a #${id} ciclo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciclo`;
  }
*/

}