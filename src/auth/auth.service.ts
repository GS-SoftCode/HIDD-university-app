import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    // Busca el usuario en BD
    const user = await this.prisma.estudiante.findUnique({
      where: { correo: loginDto.email },
    });

    // Validar usuario contraseña (Nota: el modelo Estudiante no tiene campo password)
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Generar payload del token
    const payload = { 
      sub: user.id_estudiante, 
      email: user.correo,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id_estudiante,
        email: user.correo,
        nombre: user.nombre,
      },
    };
  }

  async validateUser(userId: number) {
    const user = await this.prisma.estudiante.findUnique({
      where: { id_estudiante: userId },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}