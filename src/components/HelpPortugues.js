import React from 'react';

const HelpPortugues = (props) => {

    return (
        <div>
            <h3>Ferramenta de correspondência climática</h3>
            A versão 'Basic' da Climate Matching Tool usa as projeções climáticas futuras do UKCP18 com resolução de 12 km RCP8.5 para 2080 e climas históricos mensais simulados a partir de 1981. Os fatores de pesquisa climática são temperatura média mensal, precipitação mensal total e faixa de temperatura diurna média mensal.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Selecione um local para a sua correspondência climática clicando no mapa</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Modo</h4></li>
                A configuração do modo Básico ou Avançado está selecionada.
                <ol type='a'>
                    <li><b>Modo básico:</b> o cálculo da correspondência climática é realizado apenas em dados europeus; o período durante o qual os cálculos são feitos é de 12 meses; e o número de correspondências é 5000.
                    </li>
                    <li><b>Modo avançado:</b> a região para o cálculo da correspondência climática é selecionada (Europa, Noroeste Pacífico ou Europa e Noroeste Pacífico); os meses para os quais a partida é realizada podem ser selecionados (todo o ano, estação de cultivo e meses), se escolher meses, uma nova grade de seleção é apresentada para selecionar meses para a correspondência; o número de correspondências que o programa executará (limita as correspondências em Baixa [200] e Média [1000] para fornecer mais precisão na área correspondente exibida).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Operação no Modo Básico</h4></li>
                <ol type='a'>
                    <li><b>Pergunta</b><br/>
                    No modo Básico, a caixa de diálogo Pergunta é exibida. Isso permite que o usuário selecione uma correspondência analógica para um site específico - ou uma correspondência do clima atual para regiões com um clima futuro semelhante.
                    </li>
                    <li><b>Clima futuro</b><br/>
                    Clima futuro selecionável pelo usuário para a pergunta selecionada. Se você selecionar um dado decadal, um clima decadal da linha de base será usado. Se o usuário selecionar um clima de período normal de 30 anos, será usado um clima de linha de base de 30 anos.
                    </li>
                    <li><b>Variáveis</b><br/>
                    Essa caixa de diálogo permite ao usuário selecionar uma correspondência climática usando temperatura e precipitação ou qualquer um desses conjuntos de dados sozinho.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Operação em Modo Avançado</h4></li>
                <ol type='a'>
                    <li><b>Região</b><br/>
                    Selecione Europa - Noroeste Pacífico - ou Europa e Noroeste Pacífico. selecionar as duas regiões levará de 20 a 30 segundos para que os resultados sejam exibidos.
                    </li>
                    <li><b>Clima local</b><br/>
                    Isso permite ao usuário selecionar quais dados climáticos atribuir ao ponto de interesse.
                    Selecione o clima local para o período em que deseja procurar análogos. Este pode ser um período futuro ou um período passado. Se você deseja encontrar locais atuais com o clima mais semelhante ao seu local no futuro - selecione um período de período de clima local no futuro (por exemplo, 2041-2050).
                    Selecione o Clima local para o período atual se desejar encontrar locais futuros com um clima mais semelhante ao seu local (por exemplo, selecione o período de clima local 2011-2020).
                    </li>
                    <li><b>Pesquisar clima</b><br/>
                    Selecione o período do período Pesquisar clima no futuro, se estiver interessado em entender onde o clima da sua localização corresponderá melhor ao futuro. Como alternativa, defina isso como o clima atual se estiver procurando uma área analógica para um clima projetado do local que você selecionou.
                    </li>
                    <li><b>Variáveis</b> (o mesmo que 3c).<br/>
                    </li>
                    <li><b>meses</b><br/>
                    Os meses para os quais a correspondência é realizada podem ser selecionados (todo o ano, estação de cultivo e meses). Se escolher "meses", uma nova grade de seleção é apresentada para selecionar meses para correspondência.
                    </li>
                    <li><b>Número de correspondências</b><br/>
                    o número de correspondências que o programa executará (limita as correspondências em Baixa e Média para fornecer mais precisão na área correspondente exibida).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpPortugues;