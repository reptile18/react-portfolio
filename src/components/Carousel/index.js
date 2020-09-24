import React, {useState, useEffect} from 'react';
import Slide from '@material-ui/core/Slide'; 
import { Button, Grid } from '@material-ui/core';

const styles={
  button: {
    color: "white"
  },
  slideActive: {
    display: "block"
  },
  slideInactive: {
    display: "none"
  }
}

function Carousel(props) {
  const [currentSlide,SetCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2000);
    return () => clearTimeout(timer);
  });

  // console.log("timer", timer);
  // if (!timer) {
  //     const timer = setInterval(() => {
  //       console.log("currentSlide", currentSlide)
  //       const nextSlide = currentSlide+1 > props.children.length? 0 : currentSlide+1;
  //       console.log("next slide: ", nextSlide);
  //       SetCurrentSlide(nextSlide)
  //     }, 3000);
  //     console.log("inner timer", timer);
  //     SetTimer(timer);
  // }

  function onPrev() {
    const nextSlide = currentSlide-1 < 0 ? props.children.length-1 : currentSlide-1;
    SetCurrentSlide(nextSlide)
  }

  function onNext() {
    const nextSlide = currentSlide+1 > props.children.length-1? 0 : currentSlide+1;
    SetCurrentSlide(nextSlide)
  }

  return (
    <Grid container justify="center">
      {
        props.children.map((el,index) => {
          const active=currentSlide===index;
          return (
            <Slide style={active?styles.slideActive:styles.slideInactive} in={active} timeout={500} direction="left">
              {el}
            </Slide>
          )
        })
      }
    </Grid>
  )
}

export default Carousel