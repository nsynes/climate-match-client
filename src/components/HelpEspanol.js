import React from 'react';

const HelpEspanol = (props) => {

    return (
        <div className='help-content'>
            <h3>Herramienta de coincidencia climática</h3>
            La versión 'Básica' de la Herramienta de coincidencia climática utiliza las proyecciones climáticas futuras de 20 km del RCP8.5 del Reino Unido con resolución de 12 km mensuales y climas históricos simulados mensuales desde 1981. Los factores climáticos de búsqueda son la temperatura media mensual, la precipitación mensual total y mensual rango de temperatura diurna media.

            <h3>Instrucciones</h3>
            <h4>Para verificar el clima analógico actual para un sitio seleccionado</h4>
            <ol>
                <li>Seleccione una ubicación con un clic, en el lugar donde desea buscar un clima futuro o pasado. El mapa se puede ampliar con los controles +/- en la parte inferior derecha para seleccionar con mayor precisión la ubicación.</li>
                <li>Seleccione el clima local para el rango de período en el que desea buscar análogos. Este puede ser un período futuro o un período pasado. Si desea encontrar ubicaciones actuales con el clima más similar a su ubicación en el futuro, seleccione un período de Clima local en el futuro (por ejemplo, 2041-2050).</li>
                <li>Ahora seleccione el rango del período de búsqueda del clima para ejecutar la búsqueda. Si está interesado en comprender dónde los análogos actuales son similares al clima futuro seleccionado de su ubicación de Clima local, seleccione el clima actual (por ejemplo, 2011-2020 o 2021-2030).</li>
                <li>Ahora puede seleccionar el rango mensual en el que se realiza la coincidencia climática. Las opciones son todos los meses, meses de temporada de crecimiento (abril-septiembre) o Meses específicos seleccionados manualmente. Para la última selección, aparecerá una nueva ventana que le permitirá definir los meses para el algoritmo de coincidencia climática.</li>
                <li>Las variables de datos climáticos en las que se basa la coincidencia climática se pueden cambiar entre: precipitación, temperatura y rango diurno (predeterminado); Precipitación; Temperatura y rango diurno. Esto le permite separar los factores climáticos importantes en el algoritmo de búsqueda.</li>
                <li>Finalmente haga clic en Calcular para ejecutar el algoritmo de búsqueda. Los cálculos demoran unos segundos y aparecerá un cuadro de texto de resumen con el mapa de resultados de la búsqueda. El cuadro de texto de resumen se puede ocultar o expandir con un botón de control en la esquina superior derecha.</li>
            </ol>

            <h4>Para verificar ubicaciones de un clima futuro similar al clima de una ubicación seleccionada </h4>
            <ol>
                <li>Seleccione una ubicación con un clic, en el lugar donde desea buscar un clima futuro o pasado. El mapa se puede ampliar con los controles +/- en la parte inferior derecha para seleccionar con mayor precisión la ubicación.</li>
                <li>Seleccione el clima local para el rango del período actual. Si desea encontrar ubicaciones futuras con el clima más similar a su ubicación, seleccione el rango de período de Clima local 2021-2030).</li>
                <li>Ahora seleccione el rango de búsqueda del período climático Si está interesado en comprender dónde será el clima de su ubicación de Clima local en el futuro, seleccione el clima de búsqueda para un período futuro (por ejemplo, 2051-2060).</li>
                <li>Ahora puede seleccionar el rango mensual en el que se realiza la coincidencia climática. Las opciones son todos los meses, meses de temporada de crecimiento (abril-septiembre) o Meses específicos seleccionados manualmente. Para la última selección, aparecerá una nueva ventana que le permitirá definir los meses para el algoritmo de coincidencia climática.</li>
                <li>Las variables de datos climáticos en las que se basa la coincidencia climática se pueden cambiar entre: precipitación, temperatura y rango diurno (predeterminado); Precipitación; Temperatura y rango diurno. Esto le permite separar los factores climáticos importantes en el algoritmo de búsqueda.</li>
                <li>Finalmente haga clic en Calcular para ejecutar el algoritmo de búsqueda. Los cálculos demoran unos segundos y aparecerá un cuadro de texto de resumen con el mapa de resultados de la búsqueda. El cuadro de texto de resumen se puede ocultar o expandir con un botón de control en la esquina superior derecha.</li>
            </ol>
        </div>
    );
}
 
export default HelpEspanol;