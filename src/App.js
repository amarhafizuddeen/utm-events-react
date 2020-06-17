import React from 'react'
import { Grid } from '@material-ui/core'
import EventContainer from './Components/EventContainer/EventContainer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={1} />
        <Grid item xs={12} sm={10}>
          <EventContainer />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  )
}

export default App
