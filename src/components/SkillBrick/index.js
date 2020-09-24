import React, { useEffect, useState } from 'react';
import { Grid, Typography} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Brick from '../../assets/brick.png';

const styles = {
  brick: {
    backgroundColor: "#BB4545",
    backgroundImage: `url(${Brick})`,
    width: "100%",
    height: "5vw",
    padding: "10px 10px 10px 10px",
    margin: "5px 5px 5px 5px",
    verticalAlign:"middle",
  },
  brickText: {
    fontWeight: "bold",
    color: "white"
  }
}

function SkillBrick(props) {
  const [slideBrick,SetSlideBrick] = useState(false);

  useEffect(() => {
    const time = props.time;
    setTimeout(() => {
      SetSlideBrick(props.animate)
    }, time);
    
  },[props.animate, props.time])

  return (
    <Slide in={slideBrick} direction="down" exit={false} timeout={200}>
      <Grid key={props.index} item xs={3} container justify="center" alignItems="center">
        <Grid className="brick" container item justify="center" alignItems="center" style={styles.brick}>
          <div>
            <Typography style={styles.brickText} variant="h4" component="h1">
              {props.skill}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Slide>

  )
}

export default SkillBrick