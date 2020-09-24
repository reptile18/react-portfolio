import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import CellphonesImg from '../../assets/cellphones-min.jpg';
import Mobile1 from '../../assets/pixel2_ccidi.png';
import Mobile2 from '../../assets/pixel2_sttl.png';
import './style.css';

const styles = {
  container: {
    backgroundImage: `url(${CellphonesImg})`,
    height: "100vh"
  },
  header: {
    right: "10vw",
    top: "0vw",
    position: "relative",
    color: "white"
  },
  mobiles: {
  }
}

function MobileFirst() {
  const [showMobiles,setShowMobiles] = useState(false);

  return (
    <Grid container style={styles.container} justify="flex-end" alignItems="center">
      <h1 style={styles.header}>Mobile-First Design</h1>
      <Grid item container justify="space-around">
        <VizSensor onChange={(isVisible) => setShowMobiles(isVisible)}>
          <Grow in={showMobiles} timeout={1000}>
            <Fade in={showMobiles} timeout={1000}>
              <img className="mobile" style={styles.mobiles} src={Mobile1} alt="covid can i do it, on mobile"></img>
            </Fade>
          </Grow>
        </VizSensor>
        <VizSensor onChange={(isVisible) => setShowMobiles(isVisible)}>
          <Grow in={showMobiles} timeout={1000}>
            <Fade in={showMobiles} timeout={1000}>
              <img className="mobile" style={styles.mobiles} src={Mobile2} alt="skip to the loo, on mobile"></img>
            </Fade>
          </Grow>
        </VizSensor>
      </Grid>
    </Grid>
  )
}

export default MobileFirst