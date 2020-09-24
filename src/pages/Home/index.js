import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, CircularProgress, DialogTitle, Grid } from '@material-ui/core'
import Hero from '../../components/Hero';
import IntuitiveInterfaces from '../../components/IntuitiveInterfaces';
import MobileFirst from '../../components/MobileFirst';
import ExtensiveSkillset from "../../components/ExtensiveSkillset"
import ConnectWithMe from '../../components/ConnectWithMe';
import './style.css';

function Home(props) {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    console.log("props.loaded", props.loaded);
    console.log("set showLoading to true");
    if (!props.loaded) {
      setShowLoading(true);
    }
  }, []);
  useEffect(() => {
    console.log("start listening for onload");
    if (!props.loaded) {
      window.addEventListener("load", onLoad);
    }
  }, []);

  function onLoad() {
    console.log("onload finished");
    setShowLoading(false);
  }
  return (
    <div>
      <Hero loaded={!showLoading} />
      {/* Intuitive User Interfaces */}
      <IntuitiveInterfaces></IntuitiveInterfaces>
      {/* Mobile-first Design */}
      <MobileFirst></MobileFirst>
      {/* Wide Skillset */}
      <ExtensiveSkillset></ExtensiveSkillset>
      {/* Links to My Story, Projects, Contact(?) */}
      <ConnectWithMe />
      <Dialog open={showLoading}>
        <DialogContent className="dialog">
          <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <CircularProgress />
            <span>Please wait...</span>
          </Grid>
          
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Home