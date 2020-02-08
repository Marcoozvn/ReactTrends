import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function TopicCard({ brother }) {
  return (
    <View style={styles.card}>
      <Image source={{uri: brother.avatar}} style={styles.avatar}/>
      <Text style={styles.name}>{brother.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#FFF'
  },

  name: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666'
  }
})