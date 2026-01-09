import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MateriaService {
  constructor(private readonly prisma: PrismaService){}

  async create(createMateriaDto: CreateMateriaDto) {
    return await this.prisma.materia.create({
      data: createMateriaDto
    });
  }

  async findAll() {
    return await this.prisma.materia.findMany();
  }

  async findOne(id: number) {
      const materia = await this.prisma.materia.findUnique({
      where: { id_materia: id }
    });
    if (!materia) {
      throw new NotFoundException(`Materia with ID ${id} not found`);
    }
    return materia;
  }

/*
  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return `This action removes a #${id} materia`;
*/

}
