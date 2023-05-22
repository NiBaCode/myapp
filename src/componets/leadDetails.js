import React from "react";

const LeadDetails = (payload) => {
            return (
            <div>
                        <div>{payload?.lead?.name}</div> 
                        <div>{payload?.lead?.ownerName}</div>
                        <div>{payload?.lead?.type}</div>
                        <button onClick={() => payload.hideLeadDetails()}>nascondi dettagli</button>
            </div>    /* senza il ? ci ridà errore, questo è un piccolo trucchettoè come se dice payload esiste, come glielo
            diciamo PUNTO INTERROGATIVO, quindi lui dice se esiste paylod prendi payload se esiste lead prendi lead
            questo è un modo per blindare il vostro codice, modo per far divengtare resiliente il codice  */
            )
}

export default LeadDetails;