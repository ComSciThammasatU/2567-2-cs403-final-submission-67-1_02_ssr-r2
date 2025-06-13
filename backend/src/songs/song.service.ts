import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateAndUpdateSongRequestDto } from './dto/create-update-song.dto'

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) { }



  async findAll(eventId: string, userId: string) {
    return await this.prisma.song.findMany({
      select: {
        songId: true,
        songName: true,
        songKey: true,
        songOrder: true,
        users: {
          where: {
            userId: userId
          },
          select: {
            userId: true
          }
        }
      },
      orderBy: {
        songOrder: 'asc'
      },
      where: { eventId }
    }).then(songs => songs.map(song => ({
      ...song,
      isAssigned: song.users.length > 0,
    })))
  }

  async findOne(songId: string, eventId: string) {
    const song = await this.prisma.song.findUnique({
      where: { songId, eventId }
    })

    return song ? {
      ...song,
      totalVocalist: String(song.totalVocalist),
      totalGuitarist: String(song.totalGuitarist),
      totalDrummer: String(song.totalDrummer),
      totalKeyboardist: String(song.totalKeyboardist),
      totalExtra: String(song.totalExtra),
      totalPercussionist: String(song.totalPercussionist),
      totalBassist: String(song.totalBassist),
    } : null
  }

  async findBySongName(songName: string, eventId: string) {
    return await this.prisma.song.findFirst({
      where: {
        songName,
        eventId
      }
    })
  }

  async findByEventId(eventId: string) {
    return this.prisma.song.findMany({
      where: { eventId }
    })
  }

  async create(createSongDto: CreateAndUpdateSongRequestDto, eventId: string) {
    const {
      totalBassist,
      totalDrummer,
      totalExtra,
      totalGuitarist,
      totalKeyboardist,
      totalPercussionist,
      totalVocalist,
    } = createSongDto

    const convertedData = {
      ...createSongDto,
      totalBassist: Number(totalBassist),
      totalDrummer: Number(totalDrummer),
      totalExtra: Number(totalExtra),
      totalGuitarist: Number(totalGuitarist),
      totalKeyboardist: Number(totalKeyboardist),
      totalPercussionist: Number(totalPercussionist),
      totalVocalist: Number(totalVocalist),
    }

    const lastSong = await this.prisma.song.findFirst({
      where: {
        eventId
      },
      orderBy: {
        songOrder: 'desc'
      },
    })

    const nextSongOrder = lastSong ? lastSong.songOrder + 1 : 1

    const newSong = await this.prisma.song.create({
      data: {
        ...convertedData,
        songOrder: nextSongOrder,
        event: {
          connect: {
            eventId: eventId,
          }
        }
      }
    })

    return newSong
  }

  async update(songId: string, songdata: CreateAndUpdateSongRequestDto) {
    const {
      totalBassist,
      totalDrummer,
      totalExtra,
      totalGuitarist,
      totalKeyboardist,
      totalPercussionist,
      totalVocalist
    } = songdata

    const convertedData = {
      ...songdata,
      totalBassist: Number(totalBassist),
      totalDrummer: Number(totalDrummer),
      totalExtra: Number(totalExtra),
      totalGuitarist: Number(totalGuitarist),
      totalKeyboardist: Number(totalKeyboardist),
      totalPercussionist: Number(totalPercussionist),
      totalVocalist: Number(totalVocalist)
    }
    return await this.prisma.song.update({
      where: { songId },
      data: convertedData,
    })
  }

  async remove(songId: string, eventId: string) {
    return await this.prisma.song.delete({
      where: { songId, eventId }
    })
  }

  async reorderSongs(songOrder: { songId: string, songOrder: number }[], eventId: string) {
    const updatePromises = songOrder.map((song) =>
      this.prisma.song.update({
        where: {
          songId: song.songId,
          eventId: eventId
        },
        data: {
          songOrder: song.songOrder,
        },
      })
    )
  
    await Promise.all(updatePromises)
  
    return { success: true }
  }

}
