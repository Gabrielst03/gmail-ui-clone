import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

import '@/styles/global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {

  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold

} from '@expo-google-fonts/roboto'

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded) {
    return <ActivityIndicator className='bg-gray-900 flex-1 items-center justify-center text-white' size={32}/>
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style='light'/>
      <Slot />
    </GestureHandlerRootView>
  )
}