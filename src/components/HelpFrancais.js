import React from 'react';

const HelpFrancais = (props) => {

    return (
        <div className='help-content'>
            <h3>Climate Matching Tool </h3>
            Outil de correspondance climatique La version «de base» de l'outil de correspondance climatique utilise les projections climatiques mensuelles UKCP18 à 12 km de résolution RCP8.5 jusqu'en 2080 et les climats historiques mensuels simulés à partir de 1981. Les facteurs de recherche climatiques sont la température moyenne mensuelle, les précipitations mensuelles totales et mensuelles. plage de température diurne moyenne.
            
            <h3>Instructions</h3>
            <h4>Pour vérifier le climat analogique actuel pour un site sélectionné </h4>
            <ol>
                <li>Sélectionnez un emplacement avec un clic, sur l'endroit où vous souhaitez rechercher un climat futur ou passé. La carte peut être agrandie avec les commandes +/- dans le coin inférieur droit pour sélectionner plus précisément l'emplacement.</li>
                <li>Sélectionnez le climat local dans la plage de périodes sur laquelle vous souhaitez rechercher des analogues. Cela peut être une période future ou une période passée. Si vous souhaitez trouver des emplacements actuels avec le climat le plus similaire à votre emplacement à l'avenir - sélectionnez une plage de période de climat local à l'avenir (par exemple 2041-2050).</li>
                <li>Sélectionnez maintenant la plage de périodes de recherche climatique pour exécuter la recherche. Si vous souhaitez comprendre où les analogues actuels sont similaires au futur climat sélectionné de votre emplacement de climat local - sélectionnez le climat actuel (par exemple, 2011-2020 ou 2021-2030).</li>
                <li>Vous pouvez maintenant sélectionner la plage mensuelle sur laquelle la correspondance climatique est effectuée. Les choix sont tous les mois, les mois de la saison de croissance (avril-septembre) ou les mois spécifiques sélectionnés manuellement. Pour cette dernière sélection, une nouvelle fenêtre apparaîtra pour vous permettre de définir les mois pour l'algorithme de correspondance climatique.</li>
                <li>Les variables des données climatiques sur lesquelles la correspondance climatique est basée peuvent être modifiées entre: précipitations, température et plage diurne (par défaut); Précipitation; Température et plage diurne. Cela vous permet de séparer les facteurs climatiques importants dans l'algorithme de recherche.</li>
                <li>Enfin, cliquez sur Calculer pour exécuter l'algorithme de recherche. Les calculs prennent quelques secondes et une zone de texte récapitulative apparaîtra avec la carte des résultats de la recherche. La zone de texte récapitulative peut être masquée ou développée avec un bouton de commande dans le coin supérieur droit.</li>
            </ol>

            <h4>Pour vérifier les emplacements d'un climat futur similaire au climat d'un emplacement sélectionné</h4>
            <ol>
                <li>Sélectionnez un emplacement avec un clic, sur l'endroit que vous souhaitez rechercher pour un climat futur ou passé. La carte peut être agrandie avec les commandes +/- dans le coin inférieur droit pour sélectionner plus précisément l'emplacement.</li>
                <li>Sélectionnez le climat local dans la plage de période actuelle. Si vous souhaitez trouver des emplacements futurs avec le climat le plus similaire à votre emplacement - sélectionnez la plage de période de climat local 2021-2030). </li>
                <li>Sélectionnez maintenant la plage de période de recherche climatique. Si vous souhaitez comprendre où le climat de votre emplacement de climat local sera similaire à l'avenir, sélectionnez le climat de recherche pour une période future (par exemple 2051-2060).</li>
                <li>Vous pouvez maintenant sélectionner la plage mensuelle sur laquelle la correspondance climatique est effectuée. Les choix sont tous les mois, les mois de la saison de croissance (avril-septembre) ou les mois spécifiques sélectionnés manuellement. Pour cette dernière sélection, une nouvelle fenêtre apparaîtra pour vous permettre de définir les mois pour l'algorithme de correspondance climatique</li>
                <li>Les variables des données climatiques sur lesquelles la correspondance climatique est basée peuvent être modifiées entre: précipitations, température et plage diurne (par défaut); Précipitation; Température et plage diurne. Cela vous permet de séparer les facteurs climatiques importants dans l'algorithme de recherche.</li>
                <li>Enfin, cliquez sur Calculer pour exécuter l'algorithme de recherche. Les calculs prennent quelques secondes et une zone de texte récapitulative apparaîtra avec la carte des résultats de la recherche. La zone de texte récapitulative peut être masquée ou développée avec un bouton de commande dans le coin supérieur droit.</li>
            </ol>
        </div>
    );
}
 
export default HelpFrancais;