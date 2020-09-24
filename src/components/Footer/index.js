import React from 'react';
import { Grid, Typography } from '@material-ui/core'

const styles={
  container: {
    backgroundImage: "linear-gradient(to top, #222, #777",
    height: "5vh",
    color: "white"
  }
}

function Footer() {
  return (
    <Grid container item xs={12} style={styles.container} justify="center" alignItems="center">
      <Typography variant="h6">
        Copyright © Johnny Li 2020
      </Typography>
    </Grid>
  )
}

export default Footer