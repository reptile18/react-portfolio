import React, { useState } from 'react';
import page1 from '../../assets/resume/pg1.png';
import page2 from '../../assets/resume/pg2.png';
import gDrive from '../../assets/resume/drive.png';
import VizSensor from 'react-visibility-sensor';
import { Fade } from '@material-ui/core';

import './style.css';

const paperHeight = 351;

const styles = {
  container: {
    width: "100%",
    position: "relative",
  },
  pg1: {
    boxShadow: "1px 1px 5px #000000",
    // position: "absolute",
    // top: "-351px",
    left: "0px"
  },
  pg2: {
    boxShadow: "1px 1px 5px #000000",
    position: "absolute",
    top: "1vw",
    left: "1vw"
    // left: "5px",
    // top: "20px"
  },
  gDrive: {
    position: "absolute",
    top: "8%",
    left: "0px",
    zIndex: "5"
  }

}

function Resume() {
  const [fadeResume, SetFadeResume] = useState(false);
  return (
    <VizSensor onChange={isVisible=> SetFadeResume(isVisible)}>
      <Fade in={fadeResume} timeout={1500}>
        <div className="resume" style={styles.container}>
          <a href="https://docs.google.com/document/d/1GyMltJNXVUBOTvUrVFJcY8OFBkpBFH6-ftB-W4oGisk/edit">
            <img style={styles.pg2} src={page2} alt="page two of resume" />
            <img style={styles.pg1} src={page1} alt="page one of resume" />  
            <img style={styles.gDrive} src={gDrive} alt="google drive" />
          </a>
        </div>
      </Fade>
    </VizSensor>
  )
}

export default Resume