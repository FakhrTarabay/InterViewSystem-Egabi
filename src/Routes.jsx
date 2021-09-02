import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Forms/Form'
const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact={true} path={'/'} component={Home}/>
            <Route exact={true} path={'/regForm'} component={Form}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes