import { images } from '@/constants/images'
import React from 'react'
import { Image, View } from 'react-native'

const saved = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full'/>

    </View>
  )
}

export default saved