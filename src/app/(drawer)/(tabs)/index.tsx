import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { emails } from '@/utils/emails'
import { FloatingButton } from '@/components/floating-button'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder='Pesquisar no e-mail'/>
        <Avatar source={{uri: 'https://github.com/gabrielst03.png'}}/>
      </Input>


      <FlatList
        data={emails}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Email data={item}/>
        )}
        contentContainerClassName='gap-6'
        ListHeaderComponent={() => <Text className='text-sm text-gray-400 uppercase mt-6 font-subtitle'>Entrada</Text>}
      />

      <FloatingButton />
      
    </View>
  )
}