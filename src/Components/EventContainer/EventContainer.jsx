import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import EventCard from '../EventCard/EventCard'

const EventContainer = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const response = await axios.get('https://events.utm.my/json_event_future')
    setEvents(response.data)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <Grid container spacing={4}>
      {/* {events.length > 0 && events.map(event => <EventItem event={event} />)} */}
      {events.length > 0 &&
        events.map(event => (
          <Grid key={event.id} item xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
    </Grid>
  )
}

export default EventContainer
