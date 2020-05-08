import React from 'react';

const HelpFrancais = (props) => {

    return (
        <div>
            <h3>Outil de correspondance climatique</h3>
            La version 'Basic' de l'outil de correspondance climatique utilise les projections climatiques mensuelles UKCP18 à 12 km de résolution RCP8.5 jusqu'en 2080 et les climats historiques mensuels simulés à partir de 1981. Les facteurs de recherche climatiques sont la température moyenne mensuelle, les précipitations mensuelles totales et la plage de température diurne moyenne mensuelle.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Sélectionnez un emplacement pour votre correspondance climatique en cliquant sur la carte</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Mode</h4></li>
                Le paramètre du mode de base ou avancé est sélectionné.
                <ol type='a'>
                    <li><b>Mode de base:</b> le calcul de la correspondance climatique est effectué uniquement sur des données européennes; la période sur laquelle les calculs sont effectués correspond à chacun des 12 mois; et le nombre de matchs est fixé à 10 000.
                    </li>
                    <li><b>Mode avancé:</b> la région pour le calcul de la correspondance climatique est sélectionnée (Europe, Pacifique Nord-Ouest ou Europe et Pacifique Nord-Ouest); les mois pour lesquels le match est effectué peuvent être sélectionnés (toute l'année, la saison de croissance et les mois), si le choix des mois une nouvelle grille de sélection est présentée pour sélectionner les mois pour le match; le nombre de correspondances que le programme effectuera (ceci limite les correspondances en Bas et Moyen pour donner plus de précision sur la zone correspondante affichée).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Fonctionnement en mode de base</h4></li>
                <ol type='a'>
                    <li><b>Question</b><br/>
                    En mode de base, la boîte de dialogue Question s'affiche. Cela permet à l'utilisateur de sélectionner une correspondance analogique avec un site spécifique - ou une correspondance du climat actuel avec des régions ayant un climat futur similaire.
                    </li>
                    <li><b>Climat futur</b><br/>
                    Climat futur sélectionnable par l'utilisateur pour la question sélectionnée. Si vous sélectionnez des données décennales, un climat décennal de référence sera utilisé. Si l'utilisateur sélectionne un climat de période normale de 30 ans, un climat de référence de 30 ans sera utilisé.
                    </li>
                    <li><b>Variables</b><br/>
                    Cette boîte de dialogue permet à l'utilisateur de sélectionner une correspondance climatique en utilisant à la fois la température et les précipitations ou l'un de ces ensembles de données seuls.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Fonctionnement en mode avancé</h4></li>
                <ol type='a'>
                    <li><b>Région</b><br/>
                    Sélectionnez Europe - Pacifique Nord-Ouest - ou Europe et Pacifique Nord-Ouest. la sélection des deux régions prendra 20 à 30 secondes pour que les résultats soient affichés.
                    </li>
                    <li><b>Climat local</b><br/>
                    Cela permet à l'utilisateur de sélectionner les données climatiques à attribuer au point d'intérêt.
                    Sélectionnez le climat local à la plage de période sur laquelle vous souhaitez rechercher des analogues. Cela peut être une période future ou une période passée. Si vous souhaitez trouver des emplacements actuels avec le climat le plus similaire à votre emplacement à l'avenir - sélectionnez une plage de période de climat local à l'avenir (par exemple 2041-2050).
                    Sélectionnez le climat local à la plage de période actuelle si vous souhaitez trouver de futurs emplacements avec un climat le plus similaire à votre emplacement - (par exemple, sélectionnez la plage de période de climat local 2011-2020).
                    </li>
                    <li><b>Climat de recherche</b><br/>
                    Sélectionnez la plage de recherche de la période climatique à l'avenir si vous souhaitez comprendre où le climat de votre emplacement correspondra le mieux à un climat futur. Vous pouvez également définir ce paramètre sur le climat actuel si vous recherchez une zone analogique avec un climat projeté de l'emplacement que vous avez sélectionné.
                    </li>
                    <li><b>Variables</b> (identiques à 3c).<br/>
                    </li>
                    <li><b>Mois</b><br/>
                    Les mois pour lesquels le match est effectué peuvent être sélectionnés (toute l'année, la saison de croissance et les mois, si vous choisissez «mois», une nouvelle grille de sélection est présentée pour sélectionner les mois pour le match.
                    </li>
                    <li><b>Nombre de matchs</b><br/>
                    Le nombre de correspondances que le programme effectuera (ceci limite les correspondances en Bas et Moyen pour donner plus de précision sur la zone correspondante affichée).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpFrancais;