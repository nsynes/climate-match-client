import React from 'react';

const HelpDeutsche = (props) => {

    return (
        <div>
            <h3>Climate Matching Tool</h3>
            Die 'Basic'-Version des Climate Matching Tools verwendet die monatliche UKCP18 12 km Auflösung RCP8.5 für zukünftige Klimaprojektionen bis 2080 und simulierte monatliche historische Klimazonen ab 1981. Die klimatischen Suchfaktoren sind monatliche Durchschnittstemperatur, monatlicher Gesamtniederschlag und monatlicher mittlerer Tagestemperaturbereich .
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Wählen Sie einen Ort für Ihr Klimamatch aus, indem Sie auf die Karte klicken</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Modus</h4></li>
                Die Grundeinstellung oder der erweiterte Modus ist ausgewählt.
                <ol type='a'>
                    <li><b>Grundmodus:</b> Die Berechnung der Klimaübereinstimmung wird nur für europäische Daten durchgeführt. Der Berechnungszeitraum beträgt alle 12 Monate. und die Anzahl der Übereinstimmungen beträgt 5000.
                    </li>
                    <li><b>Erweiterter Modus:</b> Die Region für die Berechnung der Klimaübereinstimmung wird ausgewählt (Europa, Pazifischer Nordwesten oder Europa und Pazifischer Nordwesten). Die Monate, für die das Match durchgeführt wird, können ausgewählt werden (das ganze Jahr, die Vegetationsperiode und die Monate). Wenn Sie Monate auswählen, wird ein neues Auswahlraster angezeigt, um die Monate für das Match auszuwählen. Die Anzahl der Übereinstimmungen, die das Programm ausführen wird (begrenzt die Übereinstimmungen in Niedrig [200] und Mittel [1000], um den angezeigten übereinstimmenden Bereich genauer zu bestimmen).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Grundmodusbetrieb</h4></li>
                <ol type='a'>
                    <li><b>Frage</b><br/>
                    Im Basismodus wird das Dialogfeld Frage angezeigt. Auf diese Weise kann der Benutzer eine analoge Übereinstimmung mit einem bestimmten Standort auswählen - oder eine Übereinstimmung des aktuellen Klimas mit Regionen mit einem ähnlichen zukünftigen Klima.
                    </li>
                    <li><b>Zukünftiges Klima</b><br/>
                    Vom Benutzer wählbares zukünftiges Klima für die ausgewählte Frage. Wenn Sie dekadische Daten auswählen, wird ein dekadisches Grundklima verwendet. Wenn der Benutzer ein 30-jähriges Normalklima auswählt, wird ein 30-jähriges Grundklima verwendet.
                    </li>
                    <li><b>Variablen</b><br/>
                    In diesem Dialogfeld kann der Benutzer eine Klimaübereinstimmung sowohl anhand der Temperatur als auch anhand des Niederschlags oder eines dieser Datensätze allein auswählen.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Betrieb im erweiterten Modus</h4></li>
                <ol type='a'>
                    <li><b>Region</b><br/>
                    Wählen Sie Europa - Pazifischer Nordwesten - oder sowohl Europa als auch Pazifischer Nordwesten. Die Auswahl beider Regionen dauert 20 bis 30 Sekunden, bis die Ergebnisse angezeigt werden.
                    </li>
                    <li><b>Lokales Klima</b><br/>
                    Auf diese Weise kann der Benutzer auswählen, welche Klimadaten dem interessierenden Punkt zugewiesen werden sollen.
                    Wählen Sie das lokale Klima für den Zeitraum aus, in dem Sie nach Analoga suchen möchten. Dies kann eine zukünftige oder eine vergangene Periode sein. Wenn Sie aktuelle Standorte mit dem Klima suchen möchten, das Ihrem Standort in Zukunft am ähnlichsten ist, wählen Sie in Zukunft einen Bereich für das lokale Klima aus (z. B. 2041-2050).
                    Wählen Sie das lokale Klima für den aktuellen Zeitraum aus, wenn Sie zukünftige Standorte mit einem Klima suchen möchten, das Ihrem Standort am ähnlichsten ist (z. B. wählen Sie den Bereich für das lokale Klima 2011-2020 aus).
                    </li>
                    <li><b>Suchklima</b><br/>
                    Wählen Sie in Zukunft den Bereich Suchklima aus, wenn Sie wissen möchten, wo das Klima Ihres Standorts am besten zu einem zukünftigen Klima passt. Alternativ können Sie dies auf das aktuelle Klima einstellen, wenn Sie einen analogen Bereich zu einem projizierten Klima des von Ihnen ausgewählten Standorts suchen.
                    </li>
                    <li><b>Variablen</b> (wie 3c).<br/>
                    </li>
                    <li><b>Monate</b><br/>
                    Die Monate, für die das Match durchgeführt wird, können ausgewählt werden (ganzjährig, Vegetationsperiode und Monate). Wenn Sie "Monate" auswählen, wird ein neues Auswahlraster angezeigt, um die Monate für das Matching auszuwählen.
                    </li>
                    <li><b>Anzahl der Übereinstimmungen</b><br/>
                    Die Anzahl der Übereinstimmungen, die das Programm ausführen wird (begrenzt die Übereinstimmungen in Niedrig und Mittel, um den angezeigten übereinstimmenden Bereich genauer zu bestimmen).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpDeutsche;