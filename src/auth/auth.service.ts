import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'I am signup' };
  }

  signin() {
    return { message: 'I am signin' };
  }
}
