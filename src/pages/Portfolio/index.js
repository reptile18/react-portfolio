import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from '../../components/ProjectCard';

/*
  All cards to have the following props:
  favicon,
  title,
  screenshot,
  blurb,
  description,
  url,
  github,
  tech[]
*/
const cards = [
  {
    favicon: "",
    screenshot: "./assets/portfolio/screenshots/achillesheel.png",
    title: "Achilles Heel",
    blurb: "Greek Mythology Game",
    description: "React Game with Greek Mythology themes",
    url: "https://achilles-heel.herokuapp.com/",
    github: "https://github.com/erin-smith/Achilles-heel",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Material-UI"]
  },
  {
    favicon: "",
    screenshot: "./assets/portfolio/screenshots/reactportfolio.png",
    title: "Portfolio",
    blurb: "React Portfolio",
    description: "React portfolio application featuring a landing page with animations",
    url: "https://reptile18.github.io/",
    github: "https://github.com/reptile18/reptile18.github.io",
    tech: ["React.js", "Material-UI"]
  },
  {
    favicon: "",
    screenshot: "./assets/portfolio/screenshots/covidcanidoit.png",
    title: "Covid - Can I do it?",
    blurb: "Covid-19 Activity Risk Assessment App",
    description: "Vue.js application that displays activity risk information from a Google Firebase realtime database and displays them to the user.",
    url: "https://covidcanidoit.com/",
    github: "https://github.com/covidcanidoit/covidcanidoit",
    tech: ["Vue.js", "Vuetify", "Firebase"]
  },
  {
    favicon: "",
    title: "Skip to the Loo",
    screenshot: "./assets/portfolio/screenshots/SkipToTheLoo.png",
    blurb: "Bathroom Locator",
    description: "Full stack application that uses Google Maps and Places APIs for finding locations and managing bathroom availability, supplies, and cleanliness.",
    url: "https://skip-to-the-loo.herokuapp.com/",
    github: "https://github.com/alexastef/loo",
    tech: ["Google Maps", "Google Places", "Node.js", "Handlebars", "MySQL", "Sequelize", "Bootstrap", "AJAX", "Axios"]
  },
  {
    favicon: "",
    title: "Employee Directory",
    screenshot: "./assets/portfolio/screenshots/employeedirectory.png",
    blurb: "Employee directory app",
    description: "React application for viewing, sorting, and filtering employees.",
    url: "https://safe-journey-04548.herokuapp.com/",
    github: "https://github.com/reptile18/employee-directory",
    tech: ["React.js", "React Hooks", "Class Component", "Functional Component", "Axios", "Bootstrap"]
  },
  {
    favicon: "",
    title: "Purple Pages",
    screenshot: "./assets/portfolio/screenshots/purplepages_sq.png",
    blurb: "Web Entertainment Search App",
    description: "Client application using third party APIs to display streaming services that host specific tv series or movies.",
    url: "https://reptile18.github.io/Purple-Pages/index.html",
    github: "https://github.com/reptile18/Purple-Pages",
    tech: ["Bootstrap", "AJAX", "Javascript", "Utelly"]
  },
  {
    favicon: "",
    title: "Weather Dashboard",
    screenshot: "./assets/portfolio/screenshots/weatherdashboard.png",
    blurb: "Local Weather App",
    description: "Client application using OpenWeather Map API to display weather information for a set of cities and allows adding/deleting of searched cities.",
    url: "https://reptile18.github.io/Weather-Dashboard/",
    github: "https://github.com/reptile18/Weather-Dashboard",
    tech: ["OpenWeather", "jQuery", "AJAX", "Bootstrap", "Local Storage"]
  },
  {
    favicon: "",
    title: "Work Day Scheduler",
    screenshot: "./assets/portfolio/screenshots/workdayscheduler.png",
    blurb: "Time Keeping App",
    description: "Client application using local storage to manage blocks of time and CRUD operations for tasks.",
    url: "https://reptile18.github.io/Work-Day-Scheduler/Develop/index.html",
    github: "https://github.com/reptile18/Work-Day-Scheduler",
    tech: ["Moment.js", "jQuery", "HTML/CSS", "Local Storage"]
  },
  {
    favicon: "",
    title: "Employee Tracker",
    screenshot: "./assets/portfolio/screenshots/employeemanager.png",
    blurb: "Node MySQL Employee Tracker",
    description: "Node.js console application for managing employees, roles, departments, and salaries.",
    url: "https://github.com/reptile18/Employee-Tracker",
    github: "https://github.com/reptile18/Employee-Tracker",
    tech: ["Node.js", "MySQL", "Inquire", "console.table"]
  },
  {
    favicon: "",
    title: "Burger",
    screenshot: "./assets/portfolio/screenshots/burger.png",
    blurb: "Full Stack Burger App",
    description: "Full stack demo application for tracking burgers.",
    url: "https://obscure-forest-63608.herokuapp.com/",
    github: "https://github.com/reptile18/burger",
    tech: ["Node.js", "Handlebars", "MySQL", "ORM", "Heroku"]
  }
]

const styles = {
  container: {
    backgroundColor: "#111",
    backgroundImage: "url(./assets/codingbackground.png)",
    color: "white"
  }
}





function Portfolio() {
  return (
    <Grid container style={styles.container} direction="row" justify="center">
      <Grid item xs={12}>
        <h1>Portfolio</h1>
      </Grid>
      <Grid item xs={12} sm={8} container spacing={10} justify="center" alignItems="center">
        {
          cards.map((card, index) => <ProjectCard key={index} card={card} index={index} />)
        }
      </Grid>
    </Grid>
  )
}

export default Portfolio