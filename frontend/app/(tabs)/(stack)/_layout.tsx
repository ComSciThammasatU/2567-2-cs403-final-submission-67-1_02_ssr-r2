import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="event" options={{ headerShown: false }} />
      <Stack.Screen name="song" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout