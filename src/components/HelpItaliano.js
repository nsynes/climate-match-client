import React from 'react';

const HelpItaliano = (props) => {

    return (
        <div className='help-content'>
            <h3>Climate Matching Tool</h3>
            La versione 'Basic' di Climate Matching utilizza le previsioni mensili UKCP18 con risoluzione 12 km RCP8.5 future fino al 2080 e simula i climi storici mensili dal 1981. I fattori di ricerca climatica sono la temperatura media mensile, le precipitazioni mensili totali e mensili intervallo di temperatura diurno medio.
            
            <h3>Istruzioni</h3>
            <h4>Per verificare il clima analogico corrente per un sito selezionato</h4>
            <ol>
                <li>Selezionare una posizione con un clic, nel luogo in cui si desidera cercare un clima futuro o passato. La mappa può essere ingrandita con i controlli +/- nella parte in basso a destra per selezionare con maggiore precisione la posizione.</li>
                <li>Selezionare il clima locale per l'intervallo di periodi in cui si desidera cercare analoghi. Questo può essere un periodo futuro o un periodo passato. Se desideri trovare posizioni attuali con il clima più simile alla tua posizione in futuro, seleziona un intervallo di periodi di clima locale in futuro (ad es. 2041-2050).</li>
                <li>Ora seleziona l'intervallo del periodo di ricerca del clima su cui eseguire la ricerca. Se sei interessato a capire dove gli analoghi attuali sono simili al futuro clima selezionato della tua posizione sul clima locale, seleziona il clima attuale (ad es. 2011-2020 o 2021-2030).</li>
                <li>Ora è possibile selezionare l'intervallo mensile su cui viene effettuata la corrispondenza climatica. Le scelte sono tutti i mesi, i mesi della stagione di crescita (aprile-settembre) o i mesi specifici selezionati manualmente. Per quest'ultima selezione apparirà una nuova finestra per consentire di definire i mesi per l'algoritmo di adattamento climatico.</li>
                <li>Le variabili dei dati climatici su cui si basa l'abbinamento climatico possono essere modificate tra: precipitazione, temperatura e intervallo diurno (impostazione predefinita); Precipitazione; Temperatura e intervallo diurno. Ciò consente di separare gli importanti fattori climatici nell'algoritmo di ricerca.</li>
                <li>Infine, fai clic su Calcola per eseguire l'algoritmo di ricerca. I calcoli richiedono alcuni secondi e verrà visualizzata una casella di testo di riepilogo con la mappa dei risultati della ricerca. La casella di testo di riepilogo può essere nascosta o espansa con un pulsante di controllo nell'angolo in alto a destra.</li>
            </ol>

            <h4>Per controllare le posizioni di un clima futuro simile al clima di una posizione selezionata</h4>
            <ol>
                <li>Selezionare una posizione con un clic sul luogo in cui si desidera cercare un clima futuro o passato. La mappa può essere ingrandita con i controlli +/- nella parte in basso a destra per selezionare con maggiore precisione la posizione.</li>
                <li>Selezionare il clima locale per l'intervallo di periodi corrente. Se desideri trovare località future con il clima più simile alla tua posizione, seleziona l'intervallo di periodi Clima locale compreso tra il 2021 e il 2030).</li>
                <li>Ora seleziona l'intervallo del periodo di ricerca del clima. Se sei interessato a capire dove il clima della tua posizione sul clima locale sarà simile in futuro, seleziona Cerca clima per un periodo futuro (ad es. 2051-2060).</li>
                <li>Ora è possibile selezionare l'intervallo mensile su cui viene effettuata la corrispondenza climatica. Le scelte sono tutti i mesi, i mesi della stagione di crescita (aprile-settembre) o i mesi specifici selezionati manualmente. Per quest'ultima selezione apparirà una nuova finestra per consentire di definire i mesi per l'algoritmo di adattamento climatico. </li>
                <li>Le variabili dei dati climatici su cui si basa l'abbinamento climatico possono essere modificate tra: precipitazione, temperatura e intervallo diurno (impostazione predefinita); Precipitazione; Temperatura e intervallo diurno. Ciò consente di separare gli importanti fattori climatici nell'algoritmo di ricerca.</li>
                <li>Infine, fai clic su Calcola per eseguire l'algoritmo di ricerca. I calcoli richiedono alcuni secondi e verrà visualizzata una casella di testo di riepilogo con la mappa dei risultati della ricerca. La casella di testo di riepilogo può essere nascosta o espansa con un pulsante di controllo nell'angolo in alto a destra.</li>
            </ol>
        </div>
    );
}
 
export default HelpItaliano;