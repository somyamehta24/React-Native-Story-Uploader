// @flow
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

// type MyProps = {
//   label: string,
//   onPress: ({}) => void,
//   onLongPress: ({}) => void
// }

const ButtonImg = (props) => {
  const { buttonStyle } = styles
  return (
    <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress} style={buttonStyle}>
      <Image
        style={styles.image}
        source={require('../../public/images/ic_add_circle_outline_36pt_2x.png')}
        //sampleapp\public\images\ic_add_a_photo_white_36pt.png
        //../../public/images/ic_add_a_photo_18pt_2x.png
        //sampleapp\public\images\ic_add_circle_outline_36pt_2x.png
      />
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    position: 'absolute',
    right: 60,
    top: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#38ba7d',
    borderWidth: 1,
    padding: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100
  },
  image: {
    width: 40,
    height: 40
  }
}

export default ButtonImg
