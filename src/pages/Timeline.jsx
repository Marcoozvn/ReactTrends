import React from 'react'
import { WebView } from 'react-native-webview'

export default function Timeline({ navigation }) {

  const brother = navigation.getParam('brother')

  return (
    <WebView style={{flex: 1}} source={{uri: `https://twitter.com/search?q=${brother}%20%23bbb20&src=typd`}}></WebView>
  )
}