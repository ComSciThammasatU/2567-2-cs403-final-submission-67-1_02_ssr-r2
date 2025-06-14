import React from 'react'
import { View } from 'react-native'
import { Skeleton } from 'moti/skeleton'
import { useQuery } from '@tanstack/react-query'
import Background from '@/components/ui/background'
import Form from '@/components/event/form'
import { getEventInfoService} from '@/services/event.service'
import { useEventDataStore } from '@/zustand/store'
import EventActions from '@/components/event/event-action-buttons'

const Detail = () => {
    const { eventId } = useEventDataStore()
    const { data: event, isFetching } = useQuery({
        queryKey: ['event-detail', eventId],
        queryFn: async () => {
            return await getEventInfoService(eventId)
        }
    })

    if (isFetching) return <DetailLoading />

    const eventDate = event?.eventDate ? new Date(event.eventDate) : undefined
    const startTime = event?.startTime ? new Date(event.startTime) : undefined
    const endTime = event?.endTime ? new Date(event.endTime) : undefined

    return (
        <Background style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 20,
            padding: 10,
        }}>

            <View style={{ marginTop: -60 }}>
                <Form
                    event={{
                        eventId: event?.eventId!,
                        eventName: event?.eventName!,
                        eventDate: eventDate!,
                        startTime: startTime!,
                        endTime: endTime!,
                        dressCode: event?.dressCode!,
                        additionalDetails: event?.additionalDetails!
                    }}
                />
            </View>

            <EventActions
                eventId={event?.eventId!}
                eventDate={event?.eventDate!}
                status={event?.status!}
            />

        </Background>
    )
}

const DetailLoading = () => {
    return (
        <View style={{
            flexDirection: 'column',
            gap: 20,
            padding: 10,
            marginTop: 70
        }}>
            <Skeleton colorMode='light' height={60} width={380} />
            <Skeleton colorMode='light' height={60} width={380} />
            <Skeleton colorMode='light' height={60} width={380} />
            <Skeleton colorMode='light' height={60} width={380} />
        </View>
    )
}


export default Detail