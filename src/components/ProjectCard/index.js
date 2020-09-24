import React, {useState} from 'react';
import VizSensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Card, CardActionArea, CardMedia, CardContent, CardActions} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const duration = 2000;

const styles = {
  card: {
    backgroundColor: "#333",
    color: "#DDD",
    textAlign: "left"
  },
  icon: {
    color: "#DDD"
  }
}

function ProjectCard(props) {
  const [animateCard, SetAnimateCard] = useState(false);

  return (

    
      <VizSensor partialVisibility offset={{top: 300}} onChange={(isVisible) => {SetAnimateCard(isVisible);}}>
        
        <Fade in={animateCard} timeout={duration} >
          <Grid item container sm={6} xs={12}>
            <Card style={styles.card}>
              <CardMedia 
                component="img"
                alt={props.card.title}
                image={props.card.screenshot}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.card.title}
                </Typography>
                <Typography gutterBottom variant="caption" component="p">
                  {props.card.blurb}
                </Typography>
                <Typography gutterBottom component="p">
                  {props.card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => {window.location.href=props.card.url}} aria-label={`visit ${props.card.title}`}>
                  <LanguageIcon style={styles.icon} />
                </IconButton>
                <IconButton onClick={() => {window.location.href=props.card.github}} aria-label={`visit ${props.card.title} Github`}>
                  <GitHubIcon style={styles.icon} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Fade>
      </VizSensor>

    
  )
}

export default ProjectCard