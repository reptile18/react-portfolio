import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import './index.css';
import VizSensor from 'react-visibility-sensor';
import SkillBrick from '../SkillBrick';

const skills = [
  "React",
  "Material-UI",
  "Vue",
  "Vuetify",
  "MongoDB",
  "MySQL",
  "Express",
  "Node",
  "ES6",
  "JQuery",
  "Javascript",
  "Bootstrap",
  "Foundation",
  "CSS3",
  "HTML5",
  "C#",
  "Java",
  "Caché",
  "Python",
  "GDScript",
  "VB6"
]

const styles = {
  brick: {
    backgroundColor: "#BB4545",
    backgroundImage: "url(./assets/brick.png)",
    width: "100%",
    height: "5vw",
    padding: "10px 10px 10px 10px",
    margin: "5px 5px 5px 5px",
    fontWeight: "bolder",
    verticalAlign:"middle",
    color: "white"
  },
  wall: {
    marginLeft: "0vw"
  }
}

const oddRows = 3;
const evenRows = 4;
const animationDuration = 150;

function renderContainer(index, startAnimation) {
  const skillIndex = Math.floor((index)/2)*7 + ((index)%2)*3; // 0: 3, 1: 7, 2: 10, 3: 14, 4: 17, 5: 21
  // if odd containerIndex, render 3, if even, render 4
  if (index%2===0) {
    return (
      <Grid key={index} container direction="row" alignItems="center" justify="center">
        {
          [skills[skillIndex], skills[skillIndex+1], skills[skillIndex+2], skills[skillIndex+3]].map((skill,index)=> {
            return <SkillBrick key={skillIndex+index} skill={skill} index={skillIndex+index} animate={startAnimation} time={(skills.length-skillIndex+index)*animationDuration} />
          })
        }
      </Grid>
    )
  }
  else {
    return (
      <Grid key={index} container direction="row" alignItems="center" justify="center">
        {
          [skills[skillIndex+1], skills[skillIndex+2], skills[skillIndex+3]].map((skill,index)=> {
            return <SkillBrick key={skillIndex+1+index} skill={skill} index={skillIndex+1+index} animate={startAnimation} time={(skills.length-skillIndex+1+index)*animationDuration}  />
          })
        }
      </Grid>
    )
  }
  
}

function renderLayers(startAnimation) {
  let containerIndices = [];

  let numContainers = (skills.length / (evenRows+oddRows))*2;
  for (let i = 0; i < numContainers; i++) {
    containerIndices.push(i);
  }
  return containerIndices.map((containerIndex) => {
    return renderContainer(containerIndex, startAnimation);
  });

}

function SkillBricks() {
  const [startAnimation,setStartAnimation] = useState(false);
  return (
    <VizSensor onChange={(isVisible) => {setStartAnimation(isVisible)}} partialVisibility>
      <Grid 
        item 
        xs={12} sm={12} md={10} 
        container spacing={0} direction="column"
        alignItems="center" justify="center"
        style={styles.wall}>
        {renderLayers(startAnimation)}
      </Grid>
    </VizSensor>
  )
}

export default SkillBricks