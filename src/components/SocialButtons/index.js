import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import VizSensor from 'react-visibility-sensor';
import { Fade } from '@material-ui/core';

const GITHUB = "Github";
const LINKEDIN = "LinkedIn";
const FACEBOOK = "Facebook";
const TWITTER = "Twitter";
const INSTAGRAM = "Instagram";

const socials = [
  {
    name: GITHUB,
    link: "https://github.com/reptile18"
  },
  {
    name: LINKEDIN,
    link: "https://www.linkedin.com/in/johnny-li-031b949/"
  },
  {
    name: FACEBOOK,
    link: "https://www.facebook.com/johnny.li.144"
  },
  {
    name: TWITTER,
    link: "https://twitter.com/hotreptile18"
  },
  {
    name: INSTAGRAM,
    link: "https://www.instagram.com/johnnyli8004/"
  }
]

const styles = {
  link: {
    color: "white"
  }
}

function renderSocialIcon(type) {
  switch(type) {
    case GITHUB:
      return <GitHubIcon></GitHubIcon>
    case LINKEDIN:
      return <LinkedInIcon></LinkedInIcon>
    case FACEBOOK:
      return <FacebookIcon></FacebookIcon>
    case TWITTER:
      return <TwitterIcon></TwitterIcon>
    case INSTAGRAM:
      return <InstagramIcon></InstagramIcon>
    default:
      return
  }
}

function SocialButton(props) {
  const [startAnim, SetStartAnim] = useState(false);
  const [inView, SetInView] = useState(false);

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => SetStartAnim(true), 250*props.index);
    }
    return () => clearTimeout(timer);
  }, [inView, props.index])

  return (
    <VizSensor onChange={isVisible=>SetInView(isVisible)}>
      <Fade in={startAnim} timeout={1000}>
        <Grid key={props.item.name} item>
          <Link style={styles.link} href={props.item.link}>
            {renderSocialIcon(props.item.name)}
          </Link>
        </Grid>
      </Fade>
    </VizSensor>
  )
}

function SocialButtons(props) {
  return (
    <Grid xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} container spacing={5} justify="center">
      {socials.map((item, index) => <SocialButton item={item} index={index} />)}
    </Grid>
  )
}

export default SocialButtons