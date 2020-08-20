import React from 'react';
import {AppBar, Toolbar, Typography, Link} from '@material-ui/core';

const styles = {
  toolbar: {
    backgroundColor: "#333"
  },
  appName: {
    fontWeight: "bold"
  },
  link: {
    color: "white",
    marginLeft: "1em"
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
            My Portfolio
          </Typography>
          <nav style={styles.nav}>
            <Link style={styles.link} href="/">
              Home
            </Link>
            <Link style={styles.link} href="/portfolio">
              Portfolio
            </Link>
            <Link style={styles.link} href="/contact">
              Contact
            </Link>
          </nav>
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar