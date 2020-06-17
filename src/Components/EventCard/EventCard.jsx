import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  CardHeader
} from '@material-ui/core'
import moment from 'moment-timezone'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles({
  image: {
    height: '250px'
  },
  title: {
    margin: 0,
    padding: 0
  },
  pos: {
    marginBottom: 12
  }
})

const EventCard = ({ event: { title, start_date, start_time, end_time, image } }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <CardHeader
          className={classes.title}
          title={title}
          subheader={moment(start_date).format('ddd, DD MMM yyyy')}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
        />
        <Typography className={classes.pos} color="textSecondary">
          {start_time} - {end_time}
        </Typography>
        <CardMedia className={classes.image} image={image} title={title} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default EventCard
