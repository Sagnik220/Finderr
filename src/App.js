import React,{useState,useEffect} from "react";
import {ThemeProvider,Grid, CircularProgress, Box,Button} from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import Job from "./components/Job";
import NewJobModal from "./components/Job/NewJobModal";
import ViewJobModal from "./components/Job/ViewJobModal";
import {firestore,app,firebase} from './firebase/configure';
import {Close as CloseIcon} from '@material-ui/icons';



export default () => {

  const [ jobs,setJobs ]=useState([]);
  const [ loading,setloading]=useState(true);
  const [ customSearch,setCustomSearch]=useState(false);
  const [newJobModal,setNewJobModal]= useState(false);
  const [viewJob,setViewJob]= useState({});


  const fetchJobs = async () =>
  {
    setCustomSearch(false);
    setloading(true);
    const req= await firestore.collection('jobs').orderBy('postedOn','desc').get();
    const tempJobs=req.docs.map((job) => ({...job.data() , id: job.id , postedOn:job.data().postedOn.toDate()}));
    setJobs(tempJobs);
    setloading(false);
  };
  

  const fetchJobsCustom = async (jobSearch) => {
    setloading(true);
    setCustomSearch(true);
    const req= await firestore.collection('jobs').orderBy('postedOn','desc').where('location','==',jobSearch.location).where('type','==',jobSearch.type).get();
    const tempJobs=req.docs.map((job) => ({...job.data() , id: job.id , postedOn:job.data().postedOn.toDate()}));
    setJobs(tempJobs);
    setloading(false);
  };

  useEffect(() =>{
    fetchJobs();
  },[]);


const postJob =async jobDetails =>{

  await firestore.collection('jobs').add({...jobDetails, postedOn: app.firestore.FieldValue.serverTimestamp(),});
  fetchJobs();
}

  return (
  <ThemeProvider theme={theme}>
    <Header openNewJobModal={() => setNewJobModal(true)} />
    <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal}postJob={postJob}/>
    <ViewJobModal job={viewJob} closeModal={() => setViewJob({})}/>
    <Box mb={3}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar fetchJobsCustom={fetchJobsCustom} />
          {
            loading ? (
              <Box display="flex" justifyContent="center"><CircularProgress /></Box>
            ) : (
                <>
                {customSearch &&
                    (<Box my={2} display="flex" justifyContent="flex-end">
                      <Button onClick={fetchJobs}>
                        <CloseIcon size={20} />
                          Custom Search
                      </Button>
                    </Box>
                  )}
                {jobs.map((job) => (<Job open={()=>setViewJob(job)}key={job.id} {...job} />))}
                </>
            )}
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
  );
};
