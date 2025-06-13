import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { DiscordService } from './discord.service'

@Module({})
export class DiscordModule {
    providers: [PrismaService]
    exports: [DiscordService]
}
