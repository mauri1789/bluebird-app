import React from 'react'
import {
  createAppContainer,
  NavigationContainer as NavContainer
} from 'react-navigation'
import { Provider } from 'react-redux'
import store from './reducers/store'
import { bottomNavigation } from './navigation'

const AppNavigator: NavContainer = createAppContainer(bottomNavigation);

function App () {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
