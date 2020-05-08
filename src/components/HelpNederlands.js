import React from 'react';

const HelpNederlands = (props) => {

    return (
        <div>
            <h3>Climate Matching Tool</h3>
            De Climate Matching Tool 'Basic' gebruikt de maandelijkse UKCP18 12 km resolutie RCP8.5 toekomstige klimaatprognoses tot 2080 en gesimuleerde maandelijkse historische klimaten vanaf 1981. De klimatologische zoekfactoren zijn de maandelijkse gemiddelde temperatuur, de totale maandelijkse neerslag en het maandelijkse gemiddelde dagelijkse temperatuurbereik.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Selecteer een locatie voor uw klimaatmatch door op de kaart te klikken</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Modus</h4></li>
                De basis- of geavanceerde modusinstelling is geselecteerd.
                <ol type='a'>
                    <li><b>Basismodus:</b> de berekening van de klimaatovereenkomst wordt alleen uitgevoerd op Europese gegevens; de periode waarover berekeningen worden gemaakt is alle 12 maanden; en het aantal wedstrijden is 5000.
                    </li>
                    <li><b>Geavanceerde modus:</b> de regio voor de berekening van de klimaatovereenkomst is geselecteerd (Europa, Pacific North West of Europa en Pacific North West); de maanden waarvoor de wedstrijd wordt uitgevoerd, kunnen worden geselecteerd (het hele jaar, het groeiseizoen en de maanden), als er maanden worden gekozen, wordt er een nieuw selectieraster gepresenteerd om de maanden voor de wedstrijd te selecteren; het aantal wedstrijden dat het programma zal uitvoeren (beperkt overeenkomsten in Laag [200] en Gemiddeld [1000] om meer precisie te geven over het weergegeven overeenkomende gebied).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Basismodus bediening</h4></li>
                <ol type='a'>
                    <li><b>Vraag</b><br/>
                    In de basismodus wordt het vraagdialoogvenster weergegeven. Hierdoor kan de gebruiker een analoge match met een specifieke site selecteren - of een match van het huidige klimaat met regio's met een vergelijkbaar toekomstig klimaat.
                    </li>
                    <li><b>Toekomstig klimaat</b><br/>
                    Door de gebruiker te selecteren toekomstig klimaat voor de geselecteerde vraag. Als u decadale gegevens selecteert, wordt een basaal decadaal klimaat gebruikt. Als de gebruiker kiest voor een klimaat van 30 jaar met een normale periode, wordt een basisklimaat van 30 jaar gebruikt.
                    </li>
                    <li><b>Variabelen</b><br/>
                    In dit dialoogvenster kan de gebruiker een klimaatovereenkomst selecteren met zowel temperatuur als neerslag of een van deze datasets alleen.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Geavanceerde modus</h4></li>
                <ol type='a'>
                    <li><b>Regio</b><br/>
                    Selecteer Europa - Pacific North West - of zowel Europa als Pacific North West. het selecteren van beide regio's duurt 20-30 seconden voordat de resultaten worden weergegeven.
                    </li>
                    <li><b>Lokaal klimaat</b><br/>
                    Hierdoor kan de gebruiker kiezen welke klimaatgegevens aan het interessante punt moeten worden toegewezen.
                    Selecteer het lokale klimaat voor het periodebereik waarop u naar analogen wilt zoeken. Dit kan een toekomstige periode of een afgelopen periode zijn. Als u huidige locaties wilt vinden met het klimaat dat in de toekomst het meest lijkt op uw locatie, selecteert u in de toekomst een bereik voor lokale klimaatperioden (bijv.2041-2050).
                    Selecteer het lokale klimaat voor het huidige periodebereik als u toekomstige locaties wilt vinden met een klimaat dat het meest lijkt op uw locatie - (selecteer bijvoorbeeld het lokale klimaatperiode 2011-2020).
                    </li>
                    <li><b>Zoek klimaat</b><br/>
                    Selecteer het bereik Klimaatperiode zoeken in de toekomst als u wilt weten waar het klimaat van uw locatie het beste past bij een toekomstig klimaat. U kunt dit ook instellen op het huidige klimaat als u op zoek bent naar een analoog gebied naar een geprojecteerd klimaat van de locatie die u hebt geselecteerd.
                    </li>
                    <li><b>Variabelen</b> (hetzelfde als 3c).<br/>
                    </li>
                    <li><b>Maanden</b><br/>
                    De maanden waarvoor de wedstrijd wordt uitgevoerd, kunnen worden geselecteerd (het hele jaar, groeiseizoen en maanden). Als u 'maanden' kiest, wordt er een nieuw selectieraster weergegeven om de maanden te selecteren die u wilt matchen.
                    </li>
                    <li><b>Aantal wedstrijden</b><br/>
                    het aantal overeenkomsten dat het programma zal uitvoeren (beperkt overeenkomsten in Laag en Gemiddeld om meer precisie te geven over het weergegeven overeenkomende gebied).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpNederlands;