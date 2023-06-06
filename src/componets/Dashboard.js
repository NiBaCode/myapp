import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import NewLeadForm from "./NewLeadForm";
import NewLeadList from "./NewLeadList";


const Dashboard = (props) => {
  const [statusUpdate, setStatusUpdate] = useState(false);
  useEffect(() => {
    console.log(statusUpdate);
    }, [statusUpdate]);
      
useEffect(() => {
console.log(props);
}, [props]);
  

  return (
   <Grid container spacing={3}>
    <Grid item md={6}>
      <NewLeadForm statusUpdate={setStatusUpdate}/>
    </Grid>
    <Grid item md={6}>
      <NewLeadList statusUpdate={statusUpdate}/>
    </Grid>
   </Grid>
  );
};

export default Dashboard;
