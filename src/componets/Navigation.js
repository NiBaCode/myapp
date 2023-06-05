import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewLeadDetails from "./NewLeadDetails";
import NewLeadList from "./NewLeadList";


const Navigation = (props) => {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/lead-details">Lead Details</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/lead-list">Lead List</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard leadList={props.leadList}
            getLeadDetail={props.getLeadDetail}
            loadInitialData={props.loadInitialData}
            deleteLead={props.deleteSelectedLead}/>}/>
        <Route path="/lead-details" element={<NewLeadDetails />} />
        <Route path="/lead-list" element={<NewLeadList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;
