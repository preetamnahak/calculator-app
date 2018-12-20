import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import ScrollViewExample from './ScrollView.js'
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about1" component = {About} title = "About" />
         <Scene key = "scroll" component = {ScrollView} title = "List Of Idiots"/>
      </Scene>
   </Router>
)
export default Routes