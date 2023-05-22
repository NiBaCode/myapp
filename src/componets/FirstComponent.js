
/*Questo codice React definisce un componente chiamato "FirstComponent". La funzione arrow "const" definisce il componente 
e il suo contenuto, che consiste in un tag "h1" che mostra il testo "My first component" e un tag "div" che mostra il testo "questo è il corpo del mio primo componente".
Il componente è esportato alla fine del codice per essere utilizzato in altre parti dell'applicazione.*/


import React from "react";

/*definizione del componente*/
/*La funzione arrow const in questo codice rappresenta la definizione del componente.
In particolare, la sintassi const nomeComponente = () => {} indica che stiamo creando una funzione arrow con nomeComponente come nome del componente.
All'interno delle parentesi graffe, viene definito il contenuto del componente. In questo caso, viene restituito un frammento di codice che contiene
un titolo h1 e un div con un testo al suo interno.
*/


const FirstComponent = () => { 

            return (
            <>
            <h1> My first component  </h1>    

            
            <div>  
                        questo è il corpo del mio primo componente            
            </div>  
            </>
            )

}


export default FirstComponent; /* devo sempre rchiamare con return alla fine dei componenti */


  /*posso anche usare a posto del div H1 e l altro div   utilizzare queswto falso div      <>   </> 
  Infine, attraverso l'espressione "export default nomeComponente", il componente viene esportato e reso disponibile per essere utilizzato in altri file.*/ 