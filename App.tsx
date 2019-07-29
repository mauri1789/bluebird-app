import React, { useState } from 'react'
import {
  createAppContainer,
  NavigationContainer as NavContainer
} from 'react-navigation'
import { CollectionsContext } from './context'
import { bottomNavigation } from './navigation'

const AppNavigator: NavContainer = createAppContainer(bottomNavigation);

function App () {
  const collectionsHook = useState(null)
  return (
    <CollectionsContext.Provider value={collectionsHook}>
      <AppNavigator />
    </CollectionsContext.Provider>
  )
}

export default App
