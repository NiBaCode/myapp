import FirstForm from "./componets/FirstForm_Validation";
import LeadList from "./componets/LeadList";
import LeadDetails from "./componets/leadDetails";
import { useEffect, useState } from "react";
import {
  findAll,
  findByPrimaryKey,
  deleteLead,
  updateLead,
} from "./api/LeadApi";
import { Alert, Grid, IconButton, Snackbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";



let initialLead = {
  name: "",
  ownerName: "",
  type: "",
  leadId: 0,
  groupId: 0,
};

function App() {
  const [leadList, setLeadList] = useState([]);
  const [showLeadDetails, setShowLeadDetails] = useState(false);
  const [currentLead, setCurrentLead] = useState(initialLead);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = () => {
    findAll({}).then((result) => {
      console.log("Risultato ottenuto dalla FETCH", result);
      setLeadList(result);
    });
  };

  const getLeadDetail = (leadId) => {
    console.log("Chiamata funzione di caricamento dettagli lead", leadId);
    findByPrimaryKey({ id: leadId }).then((result) => {
      setCurrentLead(result);
      console.log(result);
      setShowLeadDetails(true);
    });
  };

  const hideLeadDetails = () => {
    setShowLeadDetails(false);
  };

  const resetForm = () => {
    setCurrentLead(initialLead);
  };

  const deleteSelectedLead = (leadId) => {
    deleteLead({ leadId }).then((result) => {
      loadInitialData();
      setSnackbarMessage("Cancellazione avvenuta con successo");
      setShowSuccessAlert(true);
    });
  };

  const updateSelectedLead = (lead) => {
    updateLead(lead).then((result) => {
      setSnackbarMessage("Salvataggio avvenuto con successo");
      result?.leadId > 0
        ? setShowSuccessAlert(true)
        : setShowSuccessAlert(false);
      console.log("Risultato della chiamata rest UPDATE-LEAD", result);
      loadInitialData();
      resetForm();
    });
  };

  const validateSelectedLead = (lead) => {

    if (lead.name === null || lead.name === "") {
      console.log("Name value is not null");
      setSnackbarMessage("Inserire il nome del lead");
      setShowErrorAlert(true);
    } else if (lead.ownerName === null || lead.ownerName === "") {
      console.log("ownerName value is not null");
      setSnackbarMessage("Inserire l'owner del lead");
      setShowErrorAlert(true);
    } else if (lead.type === null || lead.type === "") {
      console.log("ownerName value is not null");
      setSnackbarMessage("Inserire il tipo del lead");
      setShowErrorAlert(true);
    }
    if (
      lead.name !== null &&
      lead.ownerName !== null &&
      lead.type !== null &&
      lead.name !== "" &&
      lead.ownerName !== "" &&
      lead.type !== ""
    ) {
      console.log("Dati valorizzati correttamente");
      updateSelectedLead(lead);
    } else {
      console.log('Validazione fallita');
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h4" align="center">
            MY APP
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h6" align="center">
            Inserimento Nuovo Lead
          </Typography>
          <FirstForm
            lead={currentLead}
            reset={resetForm}
            validateLead={validateSelectedLead}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h6" align="center">
            Elenco Leads
          </Typography>
          <LeadList
            leadList={leadList}
            getLeadDetail={getLeadDetail}
            handleShowLeadDetails={setShowLeadDetails}
            deleteLead={deleteSelectedLead}
          />
        </Grid>

        <Snackbar
          open={showSuccessAlert}
          autoHideDuration={3000}
          message="Note archived"
          onClose={() => {
            setShowSuccessAlert(false);
          }}
        >
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowSuccessAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <Snackbar
          open={showErrorAlert}
          autoHideDuration={5000}
          message="Note archived"
          onClose={() => {
            setShowErrorAlert(false);
          }}
        >
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowErrorAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Grid>

      <hr />
      {showLeadDetails ? (
        <LeadDetails lead={currentLead} hideLeadDetails={hideLeadDetails} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;