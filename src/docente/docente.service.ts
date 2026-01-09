import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocenteService {
  constructor(private readonly prisma: PrismaService){}

  async create(createDocenteDto: CreateDocenteDto) {
    return await this.prisma.docente.create({
      data: createDocenteDto
    });
  }

  async findAll() {
    return await this.prisma.docente.findMany();
  }

  async findOne(id: number) {
      const docente = await this.prisma.docente.findUnique({
      where: { id_docente: id }
    });
    if (!docente) {
      throw new NotFoundException(`Docente with ID ${id} not found`);
    }
    return docente;
  }

/*
  update(id: number, updateDocenteDto: UpdateDocenteDto) {
    return `This action updates a #${id} docente`;
  }

  remove(id: number) {
    return `This action removes a #${id} docente`;
  }
*/

}
