import React from 'react'

import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

export default function TweetCard({ tweet }) {

  const { user, retweeted_status } = tweet

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{uri: user.profile_image_url}} style={styles.cardHeaderImage}></Image>
        <Text>{user.screen_name}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text>{tweet.text}</Text>
        {retweeted_status ? <TweetCard tweet={retweeted_status}></TweetCard> : <></>}
        <WebView style={styles.retweet} source={{uri: 'https://twitter.com/buzzer_beaterbr/status/1225764898619174913'}}></WebView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 4,
          height: 4,
        }
      },
      android: {
        elevation: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 30

      }
    })
  },

  cardHeader: {
    flexDirection: 'row'
  },

  cardHeaderImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#FFF'
  },

  cardBody: {
    flex: 1
  },

  retweet: {
    flex: 1
  }
})