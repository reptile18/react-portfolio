import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import VizSensor from 'react-visibility-sensor';
import Carousel from '../Carousel';
import interfacesImg from '../../assets/interfaces.jpg';
import interface0 from '../../assets/interface0.png';
import interface1 from '../../assets/interface1.png';
import interface2 from '../../assets/interface2.png';
import "./style.css";

const styles = {
  container: {
    backgroundImage: `url(${interfacesImg})`,
    backgroundSize: "cover",
    color: "white",
    height: "100vh",
    maxHeight: "100vh"
  },
  header: {
    marginLeft: "10vw",
    marginTop: "10vw"
  },
  ccidi: {
    zIndex: "5",
    boxShadow: "-1px 1px 5px 1px rgba(100,100,100,0.5)",
    marginBottom: "5vh"
  },
  loo: {
    zIndex: "10",
    boxShadow: "-1px 1px 5px 1px rgba(100,100,100,0.5)",
    marginBottom: "5vh"
  },
  purple: {
    zIndex: "0",
    marginBottom: "5vh"
  },
  carousel: {
    
  }

}

function IntuitiveInterfaces() {
  const [fade0, setFade0] = useState(false);

  return (
    <Grid container style={styles.container} justify="center">
      <Grid container item justify="flex-start">
        <h1 style={styles.header}>Intuitive Interfaces</h1>
      </Grid>
      <Grid container item justify="center" align-items="center" xs={12} lg={8}>
        <VizSensor onChange={(isVisible) => setFade0(isVisible) }>
          <Fade in={fade0} timeout={2000}>
            <Carousel style={styles.carousel}>
              {/* Skip to the Loo */}
                <img className="img" focused={"true"} style={styles.loo} src={interface0} alt="skip to the loo" />
              {/* CCIDI */}
                <img className="img" focused={"true"} style={styles.ccidi} src={interface1} alt="covid can i do it" />
              {/* Portfolio */}
                <img className="img" focused={"true"} style={styles.purple} src={interface2} alt="purple pages" />
            </Carousel>
          </Fade>
        </VizSensor>
      </Grid>
    </Grid>
  )
}

export default IntuitiveInterfaces