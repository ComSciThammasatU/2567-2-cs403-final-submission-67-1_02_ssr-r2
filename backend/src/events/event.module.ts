import { Module } from '@nestjs/common'
import { EventService } from './event.service'
import { EventController } from './event.controller'
import { PrismaService } from '../prisma.service'
import { AuthService } from '../auth/auth.service'

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService, AuthService]
})
export class EventModule { }
