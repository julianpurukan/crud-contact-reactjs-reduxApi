import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CreateContactContainer from './containers/CreateContactContainer'
import EditContactContainer from './containers/EditContactContainer'
import DetailContactContainer from './containers/DetailContactContainer'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path='/' exact component={HomeContainer} />

          <Route path='/create' exact component={CreateContactContainer} />

          <Route path='/detail/:id' exact component={DetailContactContainer} />

          <Route path='/edit/:id' exact component={EditContactContainer} />
        </BrowserRouter>
      </div>
    )
  }
}
