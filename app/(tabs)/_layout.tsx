import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'


const TabIcon =({focused, icon, title}:any) => {
  if(focused){
   return (
               <ImageBackground
               source={images.highlight}
               className='flex flex-row w-full flex-1 min-w-[300%] min-h-16 mt-4 ml-0  justify-center items-center rounded-full overflow-hidden  '              >
                  <Image source={icon} tintColor="#151312" className='size-5' />
                  <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
               </ImageBackground>)
               }
   return(
      <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={icon} tintColor="#A8B5DB" className='size-5 mt-4' /> 
      </View>
   )
}


const _layout = () => {
  return (
    <Tabs
      screenOptions={{
         tabBarShowLabel:false,
         tabBarStyle:{
            backgroundColor: '#0f0D23',
            borderRadius: 100,
            marginHorizontal: 20,
            marginBottom: 56,
            paddingTop:7,
            
            height: 60,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor:"primary"
         },
         tabBarItemStyle:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
         }
      }}
    >
       <Tabs.Screen 
        name="index"
         options={{
            headerShown: false, title: '',
            tabBarIcon: ({focused}) => (
               
               <TabIcon 
                  focused={focused}
                  title="home"
                  icon={icons.home} 
                 
               />
               
            )

            }} 
        />
        <Tabs.Screen 
        name="search"
         options={{
            headerShown: false,
             title: '',
            tabBarIcon: ({focused}) => ( 
               <TabIcon 
                  focused={focused}
                  title="Search"
                  icon={icons.search} 
               />
            )

            }}/>
        <Tabs.Screen 
        name="saved"
         options={{
            headerShown: false, title: '',
            tabBarIcon: ({focused}) => ( 
               <TabIcon 
                  focused={focused}
                  title="Watch"
                  icon={icons.play} 
               />
            )

            }}/>   
        <Tabs.Screen 
        name="profile"
         options={{
            headerShown: false, title: '',
            tabBarIcon: ({focused}) => ( 
               <TabIcon 
                  focused={focused}
                  title="profile"
                  icon={icons.person} 
               />
            )
            }}/>

    </Tabs>  )
}

export default _layout