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

    // miscelania utp
    etiquetasPortaPatchPanel: null,
    etiquetasPatchCable: null,
    etiquetasPatchPanel: null,
    etiquetasTomadasEspelhos: null,
    etiquetaCaboUTP: null,
    abracadeiraPlastica: null,
    reguaOitoTomadas: null,
    reguaFechamento: null,
    porcaGaiola: null,

    // miscelania fibra
    etiquetasRack: null, // 
    etiquetasSwitchDio: null, //
    abracadeiraVelcro: null, // 
    abracadeiraHellermann: null, //
    filtroDeLinha: null, //



    paresFibra: null,
    switchDio: null,
    dio: null,
    qrack: null,
    tamanhoRack: null,
    acopladores: null,
    pigtail: null,
    acessorios: null,
    cordaoOptico: null,
    terminadorOptico: null,
};



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

    paresFibra: null,
    dio: null,
    qrack: null,
    tamanhoRack: null,
    acopladores: null,
    pigtail: null,
    acessorios: null,
    cordaoOptico: null,
    terminadorOptico: null,


    // miscelania utp
    etiquetasPortaPatchPanel: null,
    etiquetasPatchCable: null,
    etiquetasPatchPanel: null,
    etiquetasTomadasEspelhos: null,
    etiquetaCaboUTP: null,
    abracadeiraPlastica: null,
    reguaOitoTomadas: null,
    reguaFechamento: null,
    porcaGaiola: null,

    // miscelania fibra
    etiquetasRack: null, // 
    etiquetasSwitchDio: null, //
    abracadeiraVelcro: null, // 
    abracadeiraHellermann: null, //
    filtroDeLinha: null, //
};

salaeqp = {
    paresFibra: null,

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

    // miscelania rede
    eqp.etiquetasPortaPatchPanel = eqp.patchPanel * 24;
    eqp.etiquetasPatchCable = (eqp.patchCordAzul + eqp.patchCordVermelho + eqp.patchCordBranco) * 2 // mudança
    eqp.etiquetasPatchPanel = eqp.patchPanel;
    eqp.etiquetasTomadasEspelhos = eqp.tomadas + eqp.espelhos;
    eqp.etiquetaCaboUTP = eqp.tomadas * 2;
    eqp.abracadeiraPlastica = Math.ceil((eqp.patchCordAzul + eqp.patchCordVermelho + eqp.patchCordBranco) / 100);
    eqp.reguaOitoTomadas = 1;
    eqp.reguaFechamento = 0;// Unidades que ficam vazias no calculo do rack
    eqp.porcaGaiola = 0; // COMO RAIOS CALCULA PORCA GAIOLAAAA
    // miscelania fibra
    eqp.etiquetasRack = 0;
    eqp.etiquetasSwitchDio = eqp.switchDio + eqp.dio + (eqp.inputBandeja * eqp.tamanhoBandeja);
    eqp.abracadeiraVelcro = 1; // rolo de 3 metros
    eqp.abracadeiraHellermann = 0;
    eqp.filtroDeLinha = 0;
    //fibra óptica
    eqp.paresFibra = parseInt(document.querySelector("#pfibras"));
    if (qCamera != 0) eqp.paresFibra++;
    if (qVoip != 0) eqp.paresFibra++;
    if (eqp.paresFibra <= 4) {
        eqp.terminadorOptico = 1;
        eqp.dios = 0;
    } else {
        eqp.dios = Math.ceil(eqp.paresFibra * 2 / 24);
        eqp.terminadorOptico = 0;
    }
    eqp.acessorios = 2 * eqp.dios;
    tipoConector = document.querySelector('#tipoConector');
    eqp.acopladorOptico = eqp.paresFibra * 2;


    // total dos n pavimentos
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

    total.etiquetasPortaPatchPanel = eqp.etiquetasPortaPatchPanel * nPav,
    total.etiquetasPatchCable = eqp.etiquetasPatchCable * nPav,
    total.etiquetasPatchPanel = eqp.etiquetasPatchPanel * nPav,
    total.etiquetasTomadasEspelhos = eqp.etiquetasTomadasEspelhos * nPav,
    total.etiquetaCaboUTP = eqp.etiquetaCaboUTP * nPav,
    total.abracadeiraPlastica= eqp.abracadeiraPlastica * nPav,
    total.reguaOitoTomadas = eqp.reguaOitoTomadas * nPav,
    total.reguaFechamento = eqp.reguaFechamento * nPav,
    total.porcaGaiola = eqp.porcaGaiola * nPav,
    
    // miscelania fibra
    etiquetasRack = eqp.etiquetasRack * nPav,
    etiquetasSwitchDio =eqp.etiquetasSwitchDio * nPav,
    abracadeiraVelcro = eqp.abracadeiraVelcro * nPav,
    abracadeiraHellermann = eqp.abracadeiraHellermann * nPav,
    filtroDeLinha = eqp.filtroDeLinha * nPav


    //sala de equipamentos
    salaeqp.paresFibra = eqp.paresFibra * nPav;


    // Exibindo os resultados
    document.querySelector("#result").innerHTML = `
        <h3>Resultados Calculados para cada pavimento:</h3>
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
        <h3>Miscelânea UTP:</h3>
        <p><strong>Etiquetas Porta Patch Panel:</strong> ${eqp.etiquetasPortaPatchPanel}</p>
        <p><strong>Etiquetas Patch Cable:</strong> ${eqp.etiquetasPatchCable}</p>
        <p><strong>Etiquetas Patch Panel:</strong> ${eqp.etiquetasPatchPanel}</p>
        <p><strong>Etiquetas Tomadas Espelhos:</strong> ${eqp.etiquetasTomadasEspelhos}</p>
        <p><strong>Etiqueta Cabo UTP:</strong> ${eqp.etiquetaCaboUTP}</p>
        <p><strong>Abracadeira Plástica:</strong> ${eqp.abracadeiraPlastica}</p>
        <p><strong>Regua Oito Tomadas:</strong> ${eqp.reguaOitoTomadas}</p>
        <p><strong>Regua Fechamento:</strong> ${eqp.reguaFechamento}</p>
        <p><strong>Porca Gaiola:</strong> ${eqp.porcaGaiola}</p>
        <h3>Miscelânea Fibra:</h3>
        <p><strong>Etiquetas Rack:</strong> ${eqp.etiquetasRack}</p>
        <p><strong>Etiquetas Switch Dio:</strong> ${eqp.etiquetasSwitchDio}</p>
        <p><strong>Abracadeira Velcro:</strong> ${eqp.abracadeiraVelcro}</p>
        <p><strong>Abracadeira Hellermann:</strong> ${eqp.abracadeiraHellermann}</p>
        <p><strong>Filtro de Linha:</strong> ${eqp.filtroDeLinha}</p>


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
