
import Navigation from "./componets/Navigation";

import { useEffect, useState } from "react";
import {
  findAll,
  findByPrimaryKey,
  deleteLead,
  updateLead,
} from "./api/LeadApi";


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
  const [currentLead, setCurrentLead] = useState({ ...initialLead });
  const [snackbarStatus, setSnackbarStatus] = useState({
    open: false,
    message: "",
    severity: "success",
    duration: 2000,
  });

  useEffect(() => {
    loadInitialData();
  }, [])

  const loadInitialData = () => {
    findAll({}).then((result) => {
      console.log("Risultato ottenuto dalla FETCH", result);
      setLeadList(result);
    })
  }

  const getLeadDetail = (leadId) => {
    console.log("Chiamata funzione di caricamento dettagli lead", leadId);
    findByPrimaryKey({ id: leadId }).then((result) => {
      setCurrentLead(result);
      console.log(result);
      setShowLeadDetails(true);
    })
  }

  const hideLeadDetails = () => {
    setShowLeadDetails(false);
  };

  const resetForm = () => {
    setCurrentLead({ ...initialLead });
  };

  const deleteSelectedLead = (leadId) => {
    deleteLead({ leadId }).then((result) => {
      loadInitialData();
      setSnackbarStatus({
        open: true,
        message: "Cancellazione avvenuta con successo",
        severity: "success",
        duration: 2000,
      });
    });
  };

  const updateSelectedLead = (lead) => {
    updateLead(lead).then((result) => {
      result?.leadId > 0
        ? setSnackbarStatus({
            open: true,
            message: "Salvataggio avvenuto con successo",
            severity: "success",
            duration: 2000,
          })
        : setSnackbarStatus({
            ...snackbarStatus,
            open: false,
          });
      console.log("Risultato della chiamata rest UPDATE-LEAD", result);
      loadInitialData();
      resetForm();
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentLead({
      ...currentLead,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, ownerName, type, leadId, groupId } = currentLead;
    const lead = {
      name,
      ownerName,
      type,
      leadId,
      groupId,
    };
    if (lead.name !== "" && lead.ownerName !== "" && lead.type !== "") {
      updateSelectedLead(lead);
    } else {
      setSnackbarStatus({
        ...snackbarStatus,
        open: true,
        severity: "error",
        message: "All fields are required.",
      });
    }
  };

  return (
    <>
      <Navigation
        leadList={leadList}
        getLeadDetail={getLeadDetail}
        loadInitialData={loadInitialData}
        deleteLead={deleteSelectedLead}
      />
      
     
     
     
    </>
  );
}

export default App;