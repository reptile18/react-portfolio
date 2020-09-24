import React from 'react';
import {AppBar, Toolbar, Typography, Link as MuiLink} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const styles = {
  toolbar: {
    backgroundColor: "#333",
    backgroundImage: "linear-gradient(to top, #222, #777)"
  },
  appName: {
    fontWeight: "bolder"
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "1em",
    fontWeight: "bold"
  },
  nav: {
    textAlign: "right"
  }
}

function Navbar() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <Typography  variant="h6">
            Johnny Li
          </Typography>
          <nav style={styles.nav}>
            <RouterLink style={styles.link} to="/">
              <MuiLink style={styles.link}>
                Home
              </MuiLink>
            </RouterLink>
            <RouterLink style={styles.link} to="/portfolio">
              <MuiLink style={styles.link}>
                Portfolio
              </MuiLink>
            </RouterLink>
            {/*
              <RouterLink style={styles.link} to="/contact">
              <MuiLink style={styles.link}>
                Contact
              </MuiLink>
            </RouterLink>
            */}
          </nav>
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar