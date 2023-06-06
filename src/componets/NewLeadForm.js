import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { updateLead } from "../api/LeadApi";

let initialLead = {
  name: "",
  ownerName: "",
  type: "",
  leadId: 0,
  groupId: 0,
};
const NewLeadForm = (props) => {

  const [lead, setLead] = useState(initialLead);

  useEffect(() => {
            console.log("dentro al lead", lead);

  }, [lead]);

const handleSave = () => {
            updateLead(lead).then((result) => {
                        props.setStatusUpdate(true);

            });
};
  return (
    <Grid container spacing={3}>
            <Grid item xs={12}>
      <Typography variant="h5" align="center">Inserimento del nuovo lead</Typography></Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="name"
          label="Nome"
          variant="outlined"
          name="name"
          value={lead.name}
          onChange={(e) => setLead({ ...lead, [e.target.value] : e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="ownerName"
          label="Responsabile"
          variant="outlined"
          name="ownerName"
          value={lead.ownerName}
          onChange={(e) => setLead({ ...lead, [e.target.value] : e.target.value })}
          />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="type"
          label="Tipo"
          variant="outlined"
          name="type"
          value={lead.type}
          onChange={(e) => setLead({ ...lead, [e.target.value] : e.target.value })}
          />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => handleSave()}>
            Salva
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewLeadForm;
