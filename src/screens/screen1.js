//@flow
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image as Img,
  TouchableHighlight,
  Modal
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import ButtonImg from '../components/ButtonImg.js'
import { HOMEPAGE, STYLES } from '../StylesGlobal'
import Svg, { G, Image, Polygon, Defs, ClipPath } from 'react-native-svg'

import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* ------------------------ PropTypes ------------------------ */
type Props = NavigationContainerProps & {}

function HomeScreen({ navigation }: Props) {
  const [imageSource, setImageSource] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)
  const [text, setText] = useState('')

  // buttonimg
  function myfunc() {
    setModal2Visible(true)
  }

  function mytravel() {
    setModal2Visible(!modal2Visible)
    navigation.navigate('Screen2', { imageSource: imageSource, text: text })
  }

  function selectChoice() {
    setModalVisible(true)
  }

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker')
        Alert.alert('You did not select any image')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // ADD THIS
        setImageSource(source.uri)
        setModalVisible(!modalVisible)
      }
    })
  }

  function selectImageCamera() {
    let options = {
      title: 'You can choose image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    }

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker')
        Alert.alert('You did not select any image')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // ADD THIS
        setImageSource(source.uri)
        setModalVisible(!modalVisible)
      }
    })
  }

  return (
    <>
      <View style={HOMEPAGE.view1}>
        <Svg height="100%" width="100%" viewBox="0 15 100 100">
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
              onLongPress={selectChoice}
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
              onLongPress={selectChoice}
            />
          )}
        </Svg>
        <ButtonImg 
          label="Go to Details"
          onLongPress={() => console.log('long pressed')}
          onPress={myfunc}
        />
        <Text style={HOMEPAGE.bioText}>Competitive Programmer 💻 | Cricket Lover  🏏 | Foodie 🍜 </Text>
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // eslint-disable-next-line semi
            Alert.alert('Modal has been closed.')
          }}>
          <View style={STYLES.centeredView}>
            <View style={STYLES.modalView}>
              <TouchableHighlight
                style={STYLES.openButton2}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}>
                <Text style={STYLES.textStyle}> X </Text>
              </TouchableHighlight>
              <Text style={STYLES.modalText}>Choose Option</Text>
              <TouchableOpacity onPress={selectImage} style={STYLES.inliner}>
                <Img
                  style={STYLES.inlineImg}
                  source={require('../../public/images/ic_photo_18pt_2x.png')}
                />
                
              <Text >Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={selectImageCamera} style={STYLES.inlinel}>
                <Img
                  style={STYLES.inlineImg}
                  source={require('../../public/images/ic_photo_camera_2x.png')}
                  //sampleapp\public\images\ic_photo_camera_2x.png
                  //../../public/images/ic_photo_18pt_2x.png
                />
              <Text >Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* MODAL 2 */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}>
          <View style={STYLES.centeredView}>
            <View style={STYLES.modalView}>
              <TouchableHighlight
                style={STYLES.openButton2}
                onPress={() => {
                  setModal2Visible(!modal2Visible)
                }}>
                <Text style={STYLES.textStyle}> X </Text>
              </TouchableHighlight>
              <Text style={STYLES.modalText}>Add Story ...</Text>
              <View style={STYLES.view2}>
                <TextInput
                  style={STYLES.view3}
                  placeholder="Type here to Post"
                  onChangeText={(e) => setText(e)}
                  defaultValue={''}
                />
              </View>
              <TouchableOpacity onPress={mytravel} style={STYLES.inliner}>
                <Img
                  style={STYLES.inlineok}
                  source={require('../../public/images/ic_check_white_2x.png')}
                  //sampleapp\public\images\ic_photo_camera_2x.png
                  //../../public/images/ic_photo_18pt_2x.png
                  // sampleapp\public\images\ic_check_white_2x.png
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  )
}

/*
DECAGON
<Polygon
    points="15 20, 23 0, 40 -10, 60 -10, 77 0, 85 20, 77 40, 60 50, 40 50, 23 40"
    fill="lime"
    stroke="purple"
    strokeWidth="1"
/>
*/

export default HomeScreen
