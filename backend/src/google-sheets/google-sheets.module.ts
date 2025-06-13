import { Module } from '@nestjs/common'
import { GoogleSheetsService } from './google-sheets.service'
import { PrismaService } from '../prisma.service'
import { DiscordService } from '../discord/discord.service'
import { UserService } from '../users/user.service'

@Module({
  providers: [GoogleSheetsService, PrismaService, DiscordService, UserService],
  controllers: [],
  exports: [GoogleSheetsService],
})
export class GoogleSheetsModule {} 