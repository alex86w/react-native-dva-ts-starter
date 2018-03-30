import * as React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router from './router'

//import appModel from './models/app'
import routerModel from './models/router'

const app = dva({
  initialState: {},
  models: [routerModel],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

AppRegistry.registerComponent("TSRnFirst", () => App) 
