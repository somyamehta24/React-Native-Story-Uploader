//@flow

import React, { useState, useEffect, useRef } from 'react'
import { Animated, View, Text, Image as Img, StyleSheet } from 'react-native'
import { NEWSPAGE } from '../StylesGlobal'

import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
/* ------------------------ PropTypes ------------------------ */
type Props = NavigationContainerProps & {}
type myCallback = { current: any }

function useInterval(callback: () => void, delay: number) {
  const savedCallback: myCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    if (callback != undefined) savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function Screen3({ route, navigation }: Props) {
  const { imageSource, text } = route.params

  let animation = useRef(new Animated.Value(0))
  const [progress, setProgress] = useState(0)
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 10)
    }
  }, 500)

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false
    }).start()
    if (progress >= 100) {
      navigation.navigate('Screen4', { imageSource: imageSource, text: text })
    }
  }, [progress])

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  })
  return (
    <>
      <View style={NEWSPAGE.flex}>
        <View style={styles.container}>
          <View style={styles.progressBar}>
            <Animated.View
              style={([StyleSheet.absoluteFill], { backgroundColor: '#8BED4F', width })}
            />
          </View>
        </View>
        <Img
          source={require('../../public/images/IMAGE.jpg')}
          //sampleapp\public\images\IMAGE.jpg
          style={NEWSPAGE.Img}
        />
        <Text style={NEWSPAGE.text}>ISRO LAUNCHES NEXT SPACE ROVER</Text>
        <Text style={NEWSPAGE.text}>{text}</Text>
        <Text style={NEWSPAGE.text}> </Text>
      </View>
    </>
  )
}

export default Screen3

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#236',
    padding: 8,
    margin: 0,
    top: 0,
    width: '100%'
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: '#236',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
})
