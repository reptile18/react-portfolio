import React from 'react';
import { Grid, Chip } from '@material-ui/core';
import './style.css';

const styles = {
  container: {
    backgroundColor: "#111",
    color: "white",
    height: "100vh"
  },
  tag: {
    margin: "0 5px 0 5px"
  }
}

const tags = [
  "Line Art",
  "2D Game",
  "Realistic Mockup"
]

function GraphicDesign() {
  function chipClicked(tag) {

  }

  return (
    <Grid container className="container" direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item container xs={12} justify="center" alignItems="center">
        <h1>Graphic Design</h1>
      </Grid>
      <Grid item xs={12} justify="center">
        {
          tags.map((tag) => {
            return (
              <Chip className="tag" onClick={() => chipClicked(tag)} label={tag}/>
            )
          })
        }
      </Grid>
      <Grid item xs={12} sm={8} container spacing={10} justify="center" alignItems="center">
        {/* Stuff goes here */}
      </Grid>
    </Grid>
  )
}

export default GraphicDesign;