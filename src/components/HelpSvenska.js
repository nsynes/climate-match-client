import React from 'react';

const HelpSvenska = (props) => {

    return (
        <div>
            <h3>Klimatmatchningsverktyg</h3>
            "Basic" -versionen av klimatmatchningsverktyget använder den månatliga UKCP18 12 km-upplösningen RCP8.5 framtida klimatprognoser till 2080 och simulerade månatliga historiska klimat från 1981. De klimatiska sökfaktorerna är månadstemperatur, total månadsutfällning och månadsmedelvärde för dagstidstemperatur.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Välj en plats för din klimatmatch genom att klicka på kartan</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>läge</h4></li>
                Grundinställningen eller avancerat läge är vald.
                <ol type='a'>
                    <li><b>Grundläge:</b> klimatmatchberäkningen utförs endast på europeiska data; perioden för vilken beräkningarna görs är alla 12 månader. och antalet matcher är 5000.
                    </li>
                    <li><b>Avancerat läge:</b> egionen för beräkningen av klimatmatch väljs (Europa, Stillahavsområdet Nordväst eller Europa och Stillahavsområdet Nordväst); de månader som matchen utförs för kan väljas (hela året, växtsäsong och månader), om man väljer månader presenteras ett nytt marknät för att välja månader för matchning; antalet matcher som programmet kommer att utföra (begränsar matchningar i Låg [200] och Medium [1000] för att ge mer precision på det matchade området som visas).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Grundläge Drift</h4></li>
                <ol type='a'>
                    <li><b>Fråga</b><br/>
                    I grundläget visas dialogrutan Fråga. Detta gör att användaren kan välja en analog matchning till en specifik webbplats - eller en matchning av det nuvarande klimatet till regioner med liknande framtida klimat.
                    </li>
                    <li><b>Framtida klimat</b><br/>
                    Användarvalbart framtida klimat för den valda frågan. Om du väljer en decadaldata används ett basdekadadklimat. Om användaren väljer ett 30-årigt normalt klimat kommer ett 30-årigt basklimat att användas.
                    </li>
                    <li><b>Variabler</b><br/>
                    Denna dialog ger användaren möjlighet att välja en klimatmatchning med både temperatur och nederbörd eller någon av dessa datasätt ensam.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Avancerad lägesdrift</h4></li>
                <ol type='a'>
                    <li><b>Region</b><br/>
                    Välj Europa - Pacific North West - eller både Europa och Pacific North West. att välja båda regionerna tar 20-30 sekunder innan resultaten ska visas.
                    </li>
                    <li><b>Lokalt klimat</b><br/>
                    Detta gör att användaren kan välja vilka klimatdata som ska tilldelas till intressepunkten.
                    Välj Lokalt klimat till det periodintervall som du vill söka efter analoger på. Detta kan vara en framtida period eller en tidigare period. Om du vill hitta aktuella platser med klimatet som mest liknar din plats i framtiden - än välj ett lokalt klimatintervall i framtiden (t.ex. 2041-2050).
                    Välj Lokalt klimat till det aktuella periodintervallet om du vill hitta framtida platser med ett klimat som liknar din plats - (välj t.ex. Lokalt klimatintervall 2011-2020).
                    </li>
                    <li><b>Sök klimat</b><br/>
                    Välj periodklimatet Sökklimat i framtiden om du är intresserad av att förstå var klimat på din plats bäst matchar ett framtida klimat. Alternativt kan du ställa in detta på det nuvarande klimatet om du letar efter ett analogt område till ett projicerat klimat för den plats du har valt.
                    </li>
                    <li><b>Variabler</b> (Samma som 3c).<br/>
                    </li>
                    <li><b>Månader</b><br/>
                    Månaderna för vilken matchen utförs kan väljas (hela året, växtsäsong och månader), om du väljer "månader" presenteras ett nytt rutnät för att välja månader för matchning.
                    </li>
                    <li><b>Antal matcher</b><br/>
                    antalet matcher som programmet kommer att utföra (begränsar matchningar i Låg och Medium för att ge mer precision på det matchade området som visas).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpSvenska;