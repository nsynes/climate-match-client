import React from 'react';

const HelpItaliano = (props) => {

    return (
        <div>
            <h3>Strumento di adattamento climatico</h3>
            La versione "Basic" del Climate Matching Tool utilizza le previsioni mensili UKCP18 con risoluzione 12 km RCP8.5 future fino al 2080 e simula i climi storici mensili dal 1981. I fattori di ricerca climatica sono la temperatura media mensile, le precipitazioni mensili totali e la gamma di temperatura media giornaliera.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Seleziona una posizione per la tua partita climatica facendo clic sulla mappa</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Modalità</h4></li>
                L'impostazione della modalità Base o Avanzata è selezionata.
                <ol type='a'>
                    <li><b>Modalità base:</b> il calcolo della partita climatica viene eseguito solo su dati europei; il periodo durante il quale vengono effettuati i calcoli è di tutti i 12 mesi; e il numero di partite è 5000.
                    </li>
                    <li><b>Modalità avanzata:</b> viene selezionata la regione per il calcolo della corrispondenza climatica (Europa, Pacifico nord-occidentale o Europa e Pacifico nord-occidentale); i mesi per i quali viene eseguita la partita possono essere selezionati (tutto l'anno, la stagione di crescita e i mesi), se si scelgono i mesi viene presentata una nuova griglia di selezione per selezionare i mesi per la corrispondenza; il numero di corrispondenze che il programma eseguirà (limita le corrispondenze in Basso [200] e Medio [1000] per fornire una maggiore precisione sull'area corrispondente visualizzata).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Funzionamento in modalità base</h4></li>
                <ol type='a'>
                    <li><b>Domanda</b><br/>
                    In modalità Base viene visualizzata la finestra di dialogo Domanda. Ciò consente all'utente di selezionare una corrispondenza analogica con un sito specifico o una corrispondenza del clima corrente con regioni con un clima futuro simile.
                    </li>
                    <li><b>Clima futuro</b><br/>
                    Clima futuro selezionabile dall'utente per la domanda selezionata. Se si selezionano i dati decadali, verrà utilizzato un clima decadale di base. Se l'utente seleziona un clima del periodo normale di 30 anni, verrà utilizzato un clima di base di 30 anni.
                    </li>
                    <li><b>Variabili</b><br/>
                    Questa finestra di dialogo consente all'utente di selezionare una corrispondenza climatica utilizzando sia la temperatura che le precipitazioni o uno solo di questi set di dati.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Funzionamento in modalità avanzata</h4></li>
                <ol type='a'>
                    <li><b>Regione</b><br/>
                    Seleziona Europa - Pacifico nord-occidentale - o Europa e Pacifico nord-occidentale. la selezione di entrambe le regioni richiederà 20-30 secondi per la visualizzazione dei risultati.
                    </li>
                    <li><b>Clima locale</b><br/>
                    Ciò consente all'utente di selezionare quali dati climatici assegnare al punto di interesse.
                    Selezionare il clima locale per l'intervallo di periodi in cui si desidera cercare analoghi. Questo può essere un periodo futuro o un periodo passato. Se desideri trovare posizioni attuali con il clima più simile alla tua posizione in futuro, seleziona un intervallo di periodi di clima locale in futuro (ad es. 2041-2050).
                    Selezionare il Clima locale all'intervallo di periodi corrente se si desidera trovare posizioni future con un clima più simile alla propria posizione (ad es. Selezionare l'intervallo di periodi di Clima locale 2011-2020).
                    </li>
                    <li><b>Cerca clima</b><br/>
                    Seleziona l'intervallo di periodi di ricerca del clima in futuro se sei interessato a capire dove il clima della tua posizione corrisponderà meglio a un clima futuro. In alternativa, impostalo sul clima corrente se stai cercando un'area analogica su un clima proiettato della posizione selezionata.
                    </li>
                    <li><b>Variabili </b> (uguale a 3c).<br/>
                    </li>
                    <li><b>Mesi</b><br/>
                    I mesi per i quali viene eseguita la partita possono essere selezionati (tutto l'anno, la stagione di crescita e i mesi), se si sceglie "mesi" viene presentata una nuova griglia di selezione per selezionare i mesi per la corrispondenza.
                    </li>
                    <li><b>Numero di partite</b><br/>
                    il numero di corrispondenze che il programma eseguirà (limita le corrispondenze in Basso e Medio per dare maggiore precisione sull'area corrispondente visualizzata).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpItaliano;