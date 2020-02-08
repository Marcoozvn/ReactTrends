import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Timeline from './pages/Timeline'
import Constants from 'expo-constants'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Assuntos',
        headerShown: false
      }
    },
    Timeline: {
      screen: Timeline,
      navigationOptions: {
        title: 'Timeline'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: true,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#7159c1',
      }
    }
  })
)

export default Routes