import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const discordId =  process.env.SEED_DISCORD_ID
    const discordUsername = process.env.SEED_DISCORD_USERNAME
    if(!discordId || !discordUsername) throw new Error('Missing discord configuration env')

    // await prisma.role.createMany({
    //     data: [
    //         { role: 'vocalist' },
    //         { role: 'guitarist' },
    //         { role: 'bassist' },
    //         { role: 'drummer' },
    //         { role: 'extra' },
    //         { role: 'percussionist' },
    //         { role: 'Keyboardist' },
    //         { role: 'backstage' },
    //         { role: 'admin' },
    //         { role: 'staff' }
    //     ]
    // })

    // const backstageRole = await prisma.role.findFirst({
    //     where: {
    //         role: 'backstage'
    //     }
    // })

    // const adminRole = await prisma.role.findFirst({
    //     where: {
    //         role: 'admin'
    //     }
    // })


    // await prisma.user.upsert({
    //     where: { discordId: discordId },
    //     update: {},
    //     create: {
    //         firstName: 'seeded first name',
    //         lastName: 'seeded last name',
    //         nickName: 'seeded nick name',
    //         isActive: true,
    //         discordUsername: discordUsername,
    //         discordId: discordId,
    //         roles: {
    //             connect: [
    //                 { roleId: backstageRole.roleId },
    //                 { roleId: adminRole.roleId }
    //             ]
    //         }
    //     }
    // })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })