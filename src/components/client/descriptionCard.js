import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Time from "../../lib/time";

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 140,
  },
});

function DescriptionCard (props) {
  const classes = useStyles();
  const currentDay = Time.getUnixTimestamp()

  console.log('Current Date', currentDay, props.di.date);

  const flagDate = props.di.date > currentDay

  console.log("Flag date", flagDate)

  let footerCard = null

  if (flagDate) {
    footerCard =
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.getId(props.di.id)}>
          Buy
        </Button>
      </CardActions>
  }else{
    footerCard = <CardActions>
      <Typography variant="body2" color="textSecondary" component="p">
        It's too late!
      </Typography>
      <Button size="small" color="primary" disabled>
        Buy
      </Button>
    </CardActions>
  }

  return (
    <div style={{paddingBottom: 10}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.di.image}
            onClick={() => props.getId(props.di.id)}
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {Time.getTimeByUnixTimestamp(props.di.date)}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {props.di.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.di.description}
            </Typography>
          </CardContent>
        </CardActionArea>
          {footerCard}
      </Card>
    </div>
  )
}

export default DescriptionCard