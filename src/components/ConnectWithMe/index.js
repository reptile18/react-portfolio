import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import Resume from '../Resume';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './style.css';
import SocialButtons from '../SocialButtons';
import LightTunnelImg from '../../assets/lighttunnel.jpeg'
import { Fade } from '@material-ui/core';

const styles = {
  container: {
    height: "100vh",
    color: "white",
    backgroundImage: `url(${LightTunnelImg})`
  },
  connectContainer: {
  },
  headerGrid: {
  },
  emailLink: {
    color: "white"
  }
}

function ConnectWithMe() {
  const [showFadeBig, SetShowFadeBig] = useState(false);

  return (
    
      <Grid container style={styles.container} justify="center" alignItems="center" direction="column" >
          <Grid style={styles.headerGrid} item xs={3} container justify="center" alignItems="center">
            <h1>Connect with Me</h1>
          </Grid>
          <Grid style={styles.connectContainer} item xs={9} container direction="row" justify="space-between" alignItems="center">
            <Grid style={styles.debugGrid} item xs={3} container direction="row" justify="center" alignItems="center">
              <Resume />
              <h3>Resume</h3>
            </Grid>
            <Grid item xs={3} container justify="center">
              <SocialButtons lg={12} md={8} sm={12} xs={2}/>
            </Grid>
            <Grid item xs={3} direction="column" justify="center" alignItems="center">
              <VizSensor onChange={isVisible => { SetShowFadeBig(isVisible) }}>
                <Fade in={showFadeBig} timeout={1000}>
                  <a style={styles.emailLink} href="mailto:johnny.li.software@gmail.com ">
                    <ContactMailIcon className="email" />
                  </a>
                  
                </Fade>
              </VizSensor>
              <a style={styles.emailLink} href="mailto:johnny.li.software@gmail.com "><h3>Email: johnny.li.software@gmail.com </h3></a>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default ConnectWithMe