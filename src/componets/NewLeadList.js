import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Card,
  CardContent,
  ListItem,
  Grid,
  Button,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  CardHeader,
} from "@mui/material";
import { deleteLead, findAll } from "../api/LeadApi";

const NewLeadList = (props) => {
  const [leadList, setLeadList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [currentLead, setCurrentLead] = useState(null);
  const [mode, setMode] = useState("list");
  const loadInitaliList = () => {
    findAll({}).then((result) => {
      console.log("Risultato ottenuto dalla FETCH", result);
      setLeadList(result);
    });
  };

  useEffect(() => {
    loadInitaliList();
  }, []);

  const handleDeleteConfirm = (id) => {
    deleteLead({ leadId: id }).then((result) => {
      loadInitaliList();
    });
  };
  const handleDeleteButton = (lead) => {
    setCurrentLead(lead);
    setShowDialog(true);
  };

  const showCards = () => {
    return (
      <Grid container spacing={3}>
        {leadList.map((entry) => (
          <Grid item>
            <Card variant='outlined'>
              <CardHeader>{entry.name}</CardHeader>
              <CardContent>
                {entry.leadid} {entry.name}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  const showList = () => {
    return (
      <List>
        {leadList.map((entry) => {
          return (
            <>
              <ListItem key={entry.leadId}>
                <Grid container spacing={3}>
                  <Grid item md={3}>
                    {entry.name}
                  </Grid>
                  <Grid item md={3}>
                    {entry.leadId}
                  </Grid>
                  <Grid item md={6}>
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteButton(entry)}>
                      <DeleteOutlineIcon />
                    </Button>
                    &nbsp;
                    <Button variant="outlined">
                      <EditIcon />
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            </>
          );
        })}
      </List>
    );
  };
  return (
    <>
      <Button onClick={() => setMode("list")}>Mostra Lista</Button>
      <Button onClick={() => setMode("cards")}>Mostra Cards</Button>
      {mode === "list" ? showList() : showCards()}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>cancellazione del lead</DialogTitle>
        <DialogContent>
          <Button onClick={() => handleDeleteConfirm(currentLead.leadId)}>
            Confirm
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewLeadList;
