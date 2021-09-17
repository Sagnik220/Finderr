import React from "react";
import {Typography,Button,Select,MenuItem,Box,DialogActions,makeStyles,Grid,FilledInput,Dialog,DialogTitle,DialogContent,IconButton} from '@material-ui/core';
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

}))

export default (props) => {

    const classes=useStyles();


const skills=[
    "Javascript",
    "React",
    "Node",
    "Vue",
    "Firebase",
    "MongoDB",
    "SQL",
];


return(
    <Dialog open={false} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton>
                    <CloseIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid conatiner spacing={2}>
                <Grid item xs={12}>
                    <FilledInput placeholder="Job Title *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Select fullWidth disableUnderline variant="filled" defaultValue="Full-Time">
                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                        <MenuItem value="Part Time">Part Time</MenuItem>
                        <MenuItem value="Internship">Internship</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="Company Name *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="Company URL *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Select fullWidth disableUnderline variant="filled" defaultValue="In-Office">
                        <MenuItem value="In-Office">In-Office</MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="Company Location *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput multiline rows={6} placeholder="Job Description*" disableUnderline fullWidth />
                </Grid>
            </Grid>
            <Box mt={2}>
                <Typography>Skills</Typography>
                <Box display="flex">
                    {skills.map(skills => (
                    <Box className={classes.skillChip} key={skills}>
                        {skills}
                    </Box>
                    ))}
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box color="red" alignItems="center" display="flex" width="100%" justifyContent="space-between">
                <Typography variant="captions">*Required Field</Typography>
                <Button variant="contained" disableElevation color="primary">
                    Post Job
                </Button>
            </Box>
        </DialogActions>
    </Dialog>
    );
};


