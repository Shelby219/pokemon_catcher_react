import React from 'react'
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import {Container} from './components/Styled'


const App = ({}) => {
  
  return (
    <Container>
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Switch>
            <Route exact path="/" component={Home} />
     
            <Route component={NotFound} />
            </Switch> 
        </BrowserRouter>
    </Container>
  )
}


export default App
