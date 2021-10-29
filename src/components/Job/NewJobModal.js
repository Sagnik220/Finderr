import React ,{useState} from "react";
import {Typography,Button,Select,MenuItem,Box,DialogActions,makeStyles,Grid,FilledInput,Dialog,DialogTitle,DialogContent,IconButton, CircularProgress} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons'; 


const useStyles =makeStyles(theme => ({

    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        border:' 1px solid ${theme.palette.secondary.main}',
        color:theme.palette.secondary.main,
        cursor:"pointer",

        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
            color:"#fff",
        },
    },
    included:{
        backgroundColor: theme.palette.secondary.main,
        color:"#fff",
    },

}))

const initState={
    title:"",
    type:"Full-Time",
    companyName:"",
    companyUrl:"",
    location:"In-Office",
    link:"",
    description:"",
    skills:[],
};

export default (props) => {

    const [loading,setLoading]=useState(false)
    const [jobDetails,setJobDetails]=useState(initState);

    const handleChange = e =>{
        e.persist();
        setJobDetails(oldState =>({...oldState, [e.target.name] : e.target.value, }))
    }

    const handleSubmit = async () => {
        for (const field in jobDetails) 
        {
            if(typeof jobDetails[field]==="string" && !jobDetails[field]) return;
        }
        if(!jobDetails.skills.length)return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    };


    const closeModal = () => {
        setJobDetails(initState);
        setLoading(false);
        props.closeModal();
    };

    const addRemoveSkill = skill => jobDetails.skills.includes(skill) 
    ? setJobDetails(oldState => ({...oldState, skills:oldState.skills.filter(s => s !== skill),}))
    : setJobDetails(oldState =>({...oldState, skills:oldState.skills.concat(skill),
    }));

    

    const classes=useStyles();



const skills=[
    "C++/Python/Java",
    "Cloud Computing",
    "SQL",
    "MongoDB",
    "React/Angular",
    "Django/Flask",
];


return(
    <Dialog open={props.newJobModal} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton onClick={closeModal}>
                    <CloseIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid conatiner spacing={2}>
                <Grid item xs={12}>
                    <FilledInput onChange={handleChange} name="title" value={jobDetails.title} autoComplete="off" placeholder="Job Title *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Select onChange={handleChange} name="type" value={jobDetails.type} fullWidth disableUnderline variant="filled" >
                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                        <MenuItem value="Part Time">Part Time</MenuItem>
                        <MenuItem value="Internship">Internship</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput onChange={handleChange} name="companyName" value={jobDetails.companyName} autoComplete="off" placeholder="Company Name *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput onChange={handleChange} name="companyUrl" value={jobDetails.companyUrl} autoComplete="off" placeholder="Company URL *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Select onChange={handleChange} name="location" value={jobDetails.location} fullWidth disableUnderline variant="filled" >
                        <MenuItem value="In Office">In Office</MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput onChange={handleChange} name="link" value={jobDetails.link} autoComplete="off" placeholder="Company Location *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput onChange={handleChange}name="description" value={jobDetails.description} autoComplete="off" multiline rows={6} placeholder="Job Description*" disableUnderline fullWidth />
                </Grid>
            </Grid>
            <Box mt={2}>
                <Typography>Skills*</Typography>
                <Box display="flex">
                    {skills.map(skills => (
                    <Box onClick={()=>addRemoveSkill(skills)}className={`${classes.skillChip} ${jobDetails.skills.includes(skills) && classes.included}`} key={skills}>
                        {skills}
                    </Box>
                    ))}
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box color="red" alignItems="center" display="flex" width="100%" justifyContent="space-between">
                <Typography variant="captions">*Required Field</Typography>
                <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading}>
                    {loading ? 
                        <CircularProgress color="secondary" size={22}  />
                        : 
                        ("Post Job")
                    }
                </Button>
            </Box>
        </DialogActions>
    </Dialog>
    );
};


