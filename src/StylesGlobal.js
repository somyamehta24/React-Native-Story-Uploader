// Global shared styles for screens

import {StyleSheet} from 'react-native';

export const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
  // add below
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5,
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18,
  },
  imageContainer: {
    marginVertical: 20,
    borderWidth: 5,
    borderColor: '#ff5555',
  },
  imageBox: {
    width: 256,
    height: 256,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButton2: {
    alignSelf: 'flex-end',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 100,
    textAlign: 'center',
  },
  inlinel: {
    position: 'absolute',
    left: 50,
    bottom: 5,
  },
  inliner: {
    position: 'absolute',
    right: 50,
    bottom: 5,
  },
  inlineImg: {
    width: 50,
    height: 40,
    borderWidth: 2,
    borderColor: '#666',
    backgroundColor: '#aaa',
    // marginLeft: 10,
    // marginRight: 10,
  },
  inlineok: {
    width: 40,
    height: 30,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  view2: {
    padding: 10,
  },
  view3s: {
    height: 40,
  },
});

export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#f8f8f2',
  primaryRed: '#ff5555',
  primaryPink: '#ff80bf',
  primaryYellow: '#ffff80',
  primaryOrange: '#ff9580',
};

export const HOMEPAGE = {
  bodyText: {
    paddingLeft: 10,
    color: 'blue',
  },
  bioText: {
    position: 'absolute',
    bottom: '35%',
    color: 'white',
    fontSize: 20,
    marginLeft: 60,
    marginRight: 20,
  },
  view1: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#34ebdb',
  },
};

export const NEWSPAGE = {
  flex: {
    backgroundColor: '#236',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  Img: {
    width: '90%',
    height: 200,
  },
  text: {
    fontSize: 30,
    color: '#ddd',
  },
};
