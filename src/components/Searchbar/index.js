import React,{useState} from "react";
import {Box,MenuItem,Select,Button,makeStyles,CircularProgress} from '@material-ui/core';


const useStyles = makeStyles({
    wrapper: {
        background_color: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        "& > *":{
            flex: 1,
            height: "45px",
            margin: "8px"
        },
    },
});

export default (props) =>
{
    const [loading, setLoading]=useState(false);
    const [jobSearch,setJobSearch] = useState({
        type:'Full-Time',
        location:'In Office', 
    });


    const handleChange = (e)=>{
        e.persist();
        setJobSearch((oldState) => ({...oldState,[e.target.name]:e.target.value}));
    };

    const search = async () => 
    {
        setLoading(true);
        await props.fetchJobsCustom(jobSearch);
        setLoading(false);
    };

    const classes= useStyles();
    return (
        <Box p={3} mb={2} className={classes.wrapper}>
            <Select onClick={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled" defaultValue="Full-Time">
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
            </Select>
            <Select onClick={handleChange} value={jobSearch.location}  name="location" disableUnderline variant="filled" defaultValue="In Office">
                <MenuItem value="In Office">In Office</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            <Button onClick={search} disabled={loading} variant="contained" color="primary" disableElevation>
                    {loading ? 
                        <CircularProgress color="secondary" size={22}  />
                        : 
                        ("Search")
                    }
            </Button>
        </Box>
    );
};