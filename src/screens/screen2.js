//@flow

import React from 'react'
import { View, Text } from 'react-native'
import { HOMEPAGE } from '../StylesGlobal'

import Svg, { G, Image, Polygon, Defs, ClipPath } from 'react-native-svg'

import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* ------------------------ PropTypes ------------------------ */
// type MyProps = {
//   imageSource: null | string,
//   text: string
// }

// type Props = NavigationContainerProps & {
//   navigation: {
//     navigate: ('screen3', ...MyProps) => void
//   },
//   route: {
//     params: {
//       ...MyProps
//     }
//   }
// }

function Screen2({ route, navigation }) {
  const  imageSource  = route.params.imageSource;
  const  text  = route.params.text;
  // console.log(typeof imageSource)
  // console.log(text)

  function travel3() {
    navigation.navigate('Screen3', { imageSource: imageSource, text: text })
  }

  return (
    <>
      <View style={HOMEPAGE.view1}>
        <Svg height="100%" width="100%" viewBox="0 15 100 100">
          <Polygon
            points="14 40, 22 20, 40 9, 60 9, 78 20, 86 40, 78 60, 60 71, 40 71, 22 60"
            stroke="orange"
            strokeWidth="3"
          />
          <Defs>
            <ClipPath id="clip">
              <G scale="1" x="0">
                <Polygon
                  points="15 40, 23 20, 40 10, 60 10, 77 20, 85 40, 77 60, 60 70, 40 70, 23 60"
                  stroke="purple"
                  strokeWidth="10"
                />
              </G>
            </ClipPath>
          </Defs>
          {imageSource === null ? (
            <Image
              x="0"
              y="0"
              width="100"
              height="100"
              opacity="1"
              href={require('../../public/images/20200323_235533.jpeg')}
              clipPath="url(#clip)"
              onPress={travel3}
            />
          ) : (
            <Image
              x="0"
              y="0"
              width="100"
              height="100"
              opacity="1"
              href={{ uri: imageSource }}
              clipPath="url(#clip)"
              onPress={travel3}
            />
          )}
        </Svg>

        <Text style={HOMEPAGE.bioText}>Competitive Programmer 💻 | Cricket Lover  🏏 | Foodie 🍜  </Text>
      </View>
    </>
  )
}

/*
DECAGON
<Polygon
    points="15 40, 23 20, 40 10, 60 10, 77 20, 85 40, 77 60, 60 70, 40 70, 23 60"
    fill="lime"
    stroke="purple"
    strokeWidth="1"
/>
*/

export default Screen2
