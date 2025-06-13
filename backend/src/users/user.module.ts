import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { PrismaService } from '../prisma.service'
import { GoogleSheetsService } from '../google-sheets/google-sheets.service'
import { DiscordService } from '../discord/discord.service'

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, GoogleSheetsService, DiscordService]
})
export class UserModule {}
