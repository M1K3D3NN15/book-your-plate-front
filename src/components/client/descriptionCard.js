import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function DescriptionCard (props) {
  const classes = useStyles();
  console.log("Props", props)
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.di.image}
            title="Contemplative Reptile"
            onClick={() => props.getId(props.di.id)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.di.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.di.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => props.getId(props.di.id)}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default DescriptionCard