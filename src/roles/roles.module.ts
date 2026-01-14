import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { PrismaUserService } from '../prisma/prisma-user.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaUserService],
  exports: [RolesService],
})
export class RolesModule {}
