// qui vado a dichiarare il reducer del mio store, ovvero quella funzione PURA (da tot input ottengo sempre tot output)
// il cui compito è generare un nuovo stato ogni volta che viene "dispatchata" un'azione

const initialState = {
  // divido il Redux Store in compartimenti, in modo da tenerlo ordinato e potenzialmente avere una struttura
  // capace di crescere in futuro, se deciderò di ampliare le funzionalità dall'app
  cart: {
    content: [], // l'effettivo array contenente i libri aggiunti al carrello
  },
}

const mainReducer = (
  state = initialState, // lo stato attuale, con un valore di default per inizializzarlo con dei valori prefissati
  action // l'ultima azione "dispatchata"
) => {
  // ora descriviamo la logica di funzionamento del reducer
}
