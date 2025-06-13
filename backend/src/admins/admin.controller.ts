import { Controller, Patch, Body, UseGuards, Request as Req, Post } from '@nestjs/common'
import { Request } from 'express'
import { AdminService } from './admin.service'
import { TransferAdminRequestDto } from './dto/transfer-admin.dto'
import { AdminGuard } from '../guards/admin.guard'
import { UserService } from '../users/user.service'
import { GoogleSheetsService } from '../google-sheets/google-sheets.service'
import { DiscordService } from '../discord/discord.service'
import { SwaggerActivateUser, SwaggerDeactivateUser, SwaggerTransferAdminPrivileges } from './swaggers/admin-swagger'

@Controller('admin')
export class AdminController {
  constructor(
    private readonly googleSheetService: GoogleSheetsService,
    private readonly discordService: DiscordService,
    private readonly userService: UserService,
    private readonly adminService: AdminService
  ) { }

  @Post('/activate-user')
  @UseGuards(AdminGuard)
  @SwaggerActivateUser()
  async activeUser() {
    const googleSheetResponse = await this.googleSheetService.readSheet()
    const discordUsernameToIdMap = await this.discordService.getDiscordUsernameToIdMap()

    googleSheetResponse.data.values.map(async curr => {
      const discordUsername = curr[9]
      const userRoleInGoogleSheet = curr[10]
      const discordId = discordUsernameToIdMap[discordUsername]
      const firstname = curr[1].split(' ')[0]
      const lastname = curr[1].split(' ')[1]
      const nickname = curr[2]
      const newUser = {
        discordId: discordId,
        discordUsername: discordUsername,
        firstname: firstname,
        lastname: lastname,
        nickname: nickname,
        userRoleInGoogleSheet: userRoleInGoogleSheet
      }
      this.userService.activateUser(newUser)
    })
  }

  @Patch('transfer')
  @UseGuards(AdminGuard)
  @SwaggerTransferAdminPrivileges()
  async transferAdmin(
    @Req() req: Request,
    @Body() dto: TransferAdminRequestDto
  ) {
    const currentAdminId = req.user.userId
    return await this.adminService.transferAdminPrivileges(dto.newAdminId, currentAdminId)
  }

  @Patch('/deactivate')
  @SwaggerDeactivateUser()
  async deactivateUsers(@Body() body: { userId: string[] }) {
    await this.userService.deactivateUsers(body.userId)
  }
}