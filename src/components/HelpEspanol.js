import React from 'react';

const HelpSpanish = (props) => {

    return (
        <div>
            <h3>Herramienta de correspondencia climática</h3>
            La versión 'Basic' de la herramienta Climate Matching Tool utiliza las proyecciones climáticas futuras de la resolución de 12 km UKCP18 RCP8.5 para 2080 y climas históricos simulados mensuales desde 1981. Los factores climáticos de búsqueda son temperatura media mensual, precipitación mensual total y rango de temperatura diurna media mensual.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Seleccione una ubicación para su coincidencia climática haciendo clic en el mapa</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Modo</h4></li>
                Se selecciona la configuración del modo Básico o Avanzado.
                <ol type='a'>
                    <li><b>Modo básico:</b> el cálculo de la coincidencia climática se realiza solo en datos europeos; el período durante el cual se realizan los cálculos es de 12 meses; y el número de partidos es 5000.
                    </li>
                    <li><b>Modo avanzado:</b> se selecciona la región para el cálculo de coincidencia climática (Europa, Noroeste del Pacífico o Europa y Noroeste del Pacífico); se pueden seleccionar los meses para los que se realiza la coincidencia (todo el año, temporada de crecimiento y meses), si se eligen meses, se presenta una nueva cuadrícula de selección para seleccionar los meses para la coincidencia; el número de coincidencias que realizará el programa (limita las coincidencias en Bajo [200] y Medio [1000] para dar más precisión en el área coincidente mostrada).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Operación en modo básico</h4></li>
                <ol type='a'>
                    <li><b>Pregunta</b><br/>
                    En el modo básico, se muestra el cuadro de diálogo Pregunta. Esto permite al usuario seleccionar una coincidencia analógica con un sitio específico, o una coincidencia del clima actual con regiones con un clima futuro similar.
                    </li>
                    <li><b>Clima futuro</b><br/>
                    Clima futuro seleccionable por el usuario para la pregunta seleccionada. Si selecciona un dato decadal, se utilizará un clima decadal de referencia. Si el usuario selecciona un clima de período normal de 30 años, se utilizará un clima de referencia de 30 años.
                    </li>
                    <li><b>Variables</b><br/>
                    Este cuadro de diálogo permite al usuario seleccionar una coincidencia climática utilizando la temperatura y la precipitación o cualquiera de estos conjuntos de datos solo.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Operación en modo avanzado</h4></li>
                <ol type='a'>
                    <li><b>Región</b><br/>
                    Seleccione Europa - Pacífico Noroeste - o Europa y Pacífico Noroeste. seleccionar ambas regiones tomará 20-30 segundos para que se muestren los resultados.
                    </li>
                    <li><b>Clima local</b><br/>
                    Esto permite al usuario seleccionar qué datos climáticos asignar al punto de interés.
                    Seleccione el clima local para el rango de período en el que desea buscar análogos. Este puede ser un período futuro o un período pasado. Si desea encontrar ubicaciones actuales con el clima más similar a su ubicación en el futuro, seleccione un rango de período de Clima local en el futuro (por ejemplo, 2041-2050).
                    Seleccione el clima local para el rango del período actual si desea encontrar ubicaciones futuras con un clima más similar a su ubicación (por ejemplo, seleccione el rango del período del clima local 2011-2020).
                    </li>
                    <li><b>Buscar clima</b><br/>
                    Seleccione el rango del período Buscar clima en el futuro si está interesado en comprender dónde se adaptará mejor el clima de su ubicación con un clima futuro. Alternativamente, establezca esto en el clima actual si está buscando un área análoga a un clima proyectado de la ubicación que ha seleccionado.
                    </li>
                    <li><b>Variables</b> (igual que 3c).<br/>
                    </li>
                    <li><b>meses</b><br/>
                    Se pueden seleccionar los meses para los que se realiza la coincidencia (todo el año, temporada de crecimiento y meses), si se elige "meses", se presenta una nueva cuadrícula de selección para seleccionar los meses para la coincidencia.
                    </li>
                    <li><b>Número de coincidencias</b><br/>
                    el número de coincidencias que realizará el programa (limita las coincidencias en Bajo y Medio para dar más precisión en el área coincidente mostrada).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpSpanish;