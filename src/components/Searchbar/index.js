import React from "react";
import {Box,MenuItem,Select,Button,makeStyles} from '@material-ui/core';


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

export default (props) =>{
    const classes= useStyles();
    return (
        <Box p={3} mb={2} className={classes.wrapper}>
            <Select disableUnderline variant="filled" defaultValue="Full-Time">
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
            </Select>
            <Select disableUnderline variant="filled" defaultValue="In Office">
                <MenuItem value="In Office">In Office</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation>Search</Button>
        </Box>
    );
};