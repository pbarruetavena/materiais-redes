// Definindo o objeto para armazenar os dados
 eqp = {
    qPontos: null,
    tomadas: null,
    espelhos: null,
    patchCordAzul: null,
    patchCordVermelho: null,
    patchCordBranco: null,
    patchPanel: null,
    switchRede: null,
    organizadorCaboFrontal: null,
    inputBandeja: null,
    tamanhoBandeja: null,
    etiquetasPortaPatchPanel: null,
    etiquetasPatchPanel: null,
    etiquetasTomadasEspelhos: null,
    etiquetaCaboUTP: null,
    abracadeiraPlastica: null,
    abracadeiraVelcro: null,
    filtroDeLinha: null,
    reguaFechamento: null,
    porcaGaiola: null
};

qPav = 0;


 total = {
    qPontos: null,
    tomadas: null,
    espelhos: null,
    patchCordAzul: null,
    patchCordVermelho: null,
    patchCordBranco: null,
    patchPanel: null,
    switchRede: null,
    organizadorCaboFrontal: null,
    tamanhoBandeja: null,
};

// Função para calcular os materiais
function calcularMateriais() {
    // Pegando os valores dos inputs
    const nPav = parseInt(document.querySelector("#nPav").value, 10);
    const pontosPavimento = parseInt(document.querySelector("#pontosPavimento").value, 10);
    const qCameras = parseInt(document.querySelector("#qCameras").value, 10);
    const qVoip = parseInt(document.querySelector("#qVoip").value, 10);
    const tamanhoBandeja = parseInt(document.querySelector("#bandeja").value, 10);

    // Calculando os valores
    eqp.qPontos = pontosPavimento;
    eqp.tomadas = eqp.qPontos * 2;
    eqp.espelhos = eqp.qPontos;
    eqp.patchCordAzul = eqp.qPontos;
    eqp.patchCordVermelho = qCameras;
    eqp.patchCordBranco = qVoip;
    eqp.patchPanel = Math.ceil(eqp.qPontos / 24);
    eqp.switchRede = eqp.patchPanel;
    eqp.organizadorCaboFrontal = eqp.switchRede + eqp.patchPanel;
    eqp.tamanhoBandeja = tamanhoBandeja;
    eqp.etiquetasPortaPatchPanel = eqp.patchPanel * 24;
    eqp.etiquetasPatchPanel = eqp.patchPanel;
    eqp.etiquetasTomadasEspelhos = eqp.tomadas + eqp.espelhos;
    eqp.etiquetaCaboUTP = eqp.tomadas * 2;
    // miscelania
    

    total.qPontos = eqp.qPontos * nPav;
    total.tomadas = eqp.tomadas * nPav;
    total.espelhos = eqp.espelhos * nPav;
    total.patchCordAzul = eqp.patchCordAzul * nPav;
    total.patchCordVermelho = eqp.patchCordVermelho * nPav;
    total.patchCordBranco = eqp.patchCordBranco * nPav;
    total.patchPanel = eqp.patchPanel * nPav;
    total.switchRede = eqp.switchRede * nPav;
    total.organizadorCaboFrontal = eqp.organizadorCaboFrontal * nPav;
    total.tamanhoBandeja = eqp.tamanhoBandeja;
    

    // Exibindo os resultados
    document.querySelector("#result").innerHTML = `
        <h3>Resultados Calculados:</h3>
        <p><strong>Pontos:</strong> ${eqp.qPontos}</p>
        <p><strong>Tomadas:</strong> ${eqp.tomadas}</p>
        <p><strong>Espelhos:</strong> ${eqp.espelhos}</p>
        <p><strong>Patch Cord Azul:</strong> ${eqp.patchCordAzul}</p>
        <p><strong>Patch Cord Vermelho:</strong> ${eqp.patchCordVermelho}</p>
        <p><strong>Patch Cord Branco:</strong> ${eqp.patchCordBranco}</p>
        <p><strong>Patch Panel:</strong> ${eqp.patchPanel}</p>
        <p><strong>Switch Rede:</strong> ${eqp.switchRede}</p>
        <p><strong>Organizador Cabo Frontal:</strong> ${eqp.organizadorCaboFrontal}</p>
        <p><strong>Tamanho Bandeja:</strong> ${eqp.tamanhoBandeja}</p>

        <h3>Resultados Totais para ${nPav} Pavimentos:</h3>
        <p><strong>Total de Pontos:</strong> ${total.qPontos}</p>
        <p><strong>Total de Tomadas:</strong> ${total.tomadas}</p>
        <p><strong>Total de Espelhos:</strong> ${total.espelhos}</p>
        <p><strong>Total de Patch Cord Azul:</strong> ${total.patchCordAzul}</p>
        <p><strong>Total de Patch Cord Vermelho:</strong> ${total.patchCordVermelho}</p>
        <p><strong>Total de Patch Cord Branco:</strong> ${total.patchCordBranco}</p>
        <p><strong>Total de Patch Panels:</strong> ${total.patchPanel}</p>
        <p><strong>Total de Switches Rede:</strong> ${total.switchRede}</p>
        <p><strong>Total de Organizadores de Cabo Frontal:</strong> ${total.organizadorCaboFrontal}</p>
        <p><strong>Tamanho Bandeja:</strong> ${total.tamanhoBandeja}</p>
    `;
}
