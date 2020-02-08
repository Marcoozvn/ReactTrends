import React from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, Platform } from 'react-native'

import TopicCard from '../components/TopicCard'
import { reallity } from '../../assets/reallity'

export default function Main({ navigation }) {
  const brothers = reallity;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Assuntos</Text>
        <View style={styles.container}>
          {brothers.map( brother => (
            <TouchableOpacity key={brother.name} onPress={() => navigation.navigate('Timeline', { brother: brother.name})} style={styles.touchable}>
              <TopicCard brother={brother} />
            </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },

  touchable: {
    width: '46%'
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 4,
          height: 4,
        }
      },
      android: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        elevation: 20
      }
    })    
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#7159c1',
    justifyContent: 'space-evenly',
  },

  scrollView: {
    paddingTop: 10,
    backgroundColor: '#7159c1'
  }
})