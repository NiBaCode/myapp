//ha bisogno di fare le chiamate dal fetchEndPoint


//abbiamo creato un lead API che per ogni funzione che implementiamo(update;delete,findall,
//findbyprimarykey...)
//per ognuna creiamo una costante che ci darà il backendista e noi la utilizziamo
//per richiamare Il Fetchandpoint passandogli il payload


//utente carica pagina vede form lo riempie sotto mette il form viene
//richiamata funzione che crea nuovo lead
//viene ricaricata la lista che mostrerà lead che c'erano e quello nuovo/i

import { fetchEndPoint } from "./FetchEndPoint";

const BASE_URI = "/crm";
const ENTITY = ".lead";
 const FIND_ALL = BASE_URI + ENTITY + "/find-all";
 const UPDATE_LEAD = BASE_URI + ENTITY + "/update-lead";
 const DELETE_LEAD = BASE_URI + ENTITY + "/delete-lead";
const FIND_BY_PRIMARY_KEY = BASE_URI + ENTITY + "/find-by-primary-key";

export function findAll(payload) {
  return fetchEndPoint(FIND_ALL, payload)
}

export function updateLead(payload) {
  return fetchEndPoint(UPDATE_LEAD, payload)
}

export function deleteLead(payload){
  return fetchEndPoint(DELETE_LEAD, payload);
}

export function findByPrimaryKey (payload){
  return fetchEndPoint(FIND_BY_PRIMARY_KEY, payload);
}