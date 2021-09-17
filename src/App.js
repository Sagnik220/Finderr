import React from "react";
import {ThemeProvider,Grid } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import Job from "./components/Job";
import NewJobModal from "./components/Job/NewJobModal";
import jobData from "./dummyData";

export default () => {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <NewJobModal />
    <Grid container justify="center">
      <Grid item xs={10}>
        <Searchbar/>
        {jobData.map(job=>  <Job key={job.id} {...job}/>)};
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};
