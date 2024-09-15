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
    qCamera: null,
    qVoip: null,

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
    organizadorCaboFrontalFibra: null,
    acopladores: null,
    pigtail: null,
    acessorios: null,
    cordaoOptico: null,
    terminadorOptico: null,

    // Rack
    unidadesUsadas: null,
    tamanhoTotal: null,
    tamanho150: null,
    nRacks: null,
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


    // RACK
    tamanhoTotal: null,
    nRacks: null,
};

salaeqp = {
    paresFibra: null,
    switchDio: null,
    dio: null,
    organizadorCaboFrontalFibra: null,
    acopladores: null,
    pigtail: null,
    acessorios: null,
    cordaoOptico: null,
    terminadorOptico: null,
    etiquetasRack: null,
    etiquetasSwitchDio: null,
    abracadeiraVelcro: null,
    abracadeiraHellermann: null,
    filtroDeLinha: null,

    unidadesUsadas: null,
    tamanhoTotal: null,
    tamanho150: null,
    nRacks: null,
};

// Função para calcular os materiais
function calcularMateriais() {
    // Pegando os valores dos inputs
    const nPav = parseInt(document.querySelector("#nPav").value, 10);
    const pontosPavimento = parseInt(document.querySelector("#pontosPavimento").value, 10);
    const qCameras = parseInt(document.querySelector("#qCameras").value, 10);
    const qVoip = parseInt(document.querySelector("#qVoip").value, 10);
    const tamanhoBandeja = parseInt(document.querySelector("#bandeja").value, 10);

    // Calculando os valores rede
    eqp.qPontos = pontosPavimento;
    eqp.tomadas = eqp.qPontos * 2;
    eqp.espelhos = eqp.qPontos;
    eqp.patchCordAzul = eqp.tomadas;
    eqp.patchCordVermelho = qCameras;
    eqp.patchCordBranco = qVoip;
    eqp.qCamera = qCameras;
    eqp.qVoip = qVoip;
    eqp.patchPanel = Math.ceil(eqp.tomadas / 24);
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

    //fibra óptica
    eqp.paresFibra = parseInt(document.querySelector("#pfibras"));
    eqp.qCamera = parseInt(document.querySelector('#qCameras'));
    eqp.qVoip = parseInt(document.querySelector('#qVoip'));
    if (eqp.qCamera != 0) eqp.paresFibra++;
    if (eqp.qVoip != 0) eqp.paresFibra++;
    if (eqp.paresFibra <= 4) {
        eqp.terminadorOptico = 1;
        eqp.dio = 0;
    } else {
        eqp.dio = Math.ceil(eqp.paresFibra * 2 / 24);
        eqp.terminadorOptico = 0;
    }
    eqp.acessorios = 2 * eqp.dio;
    tipoConector = document.querySelector('#tipoConector');
    eqp.acopladorOptico = eqp.paresFibra * 2;
    eqp.organizadorCaboFrontalFibra = eqp.switchDio + eqp.dio;
    eqp.pigtail = eqp.paresFibra;
    tipoConector = document.querySelector('#tipoPigtail');
    if (tipoConector.value == "duplo")
        eqp.pigtail *= 2;
    eqp.switchDio = eqp.dio;

    // miscelania fibra
    eqp.etiquetasRack = 0;
    eqp.etiquetasSwitchDio = eqp.switchDio + eqp.dio + (eqp.inputBandeja * eqp.tamanhoBandeja);
    eqp.abracadeiraVelcro = 1; // rolo de 3 metros
    eqp.abracadeiraHellermann = 0;
    eqp.filtroDeLinha = 0;

    // rack

    eqp.unidadesUsadas = eqp.patchPanel + eqp.switchRede + eqp.organizadorCaboFrontal + eqp.switchDio + eqp.dio + eqp.organizadorCaboFrontalFibra + (eqp.inputBandeja * eqp.tamanhoBandeja) + 2 + 2; // 2U NVR, 2U DVR
    eqp.tamanho150 = eqp.unidadesUsadas * 1.5

    if (eqp.tamanho150 <= 16) {
        eqp.tamanhoTotal = 16;
        eqp.nRacks = 1;

    }
    else if (eqp.tamanho150 <= 36) {
        eqp.tamanhoTotal = 36;
        eqp.nRacks = 1;
    }
    else if (eqp.tamanho150 <= 44) {
        eqp.tamanhoTotal = 44;
        eqp.nRacks = 1;
    }
    else if (eqp.tamanho150 > 44) {
        eqp.tamanhoTotal = 44;
        eqp.nRacks = Math.ceil(tamanho150 / 44);
    }
    // continuacao miscelania
    eqp.reguaFechamento = eqp.tamanhoTotal - eqp.unidadesUsadas;
    eqp.porcaGaiola = 4 * eqp.tamanhoTotal;


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

    // miscelania rede
    total.etiquetasPortaPatchPanel = eqp.etiquetasPortaPatchPanel * nPav,
        total.etiquetasPatchCable = eqp.etiquetasPatchCable * nPav,
        total.etiquetasPatchPanel = eqp.etiquetasPatchPanel * nPav,
        total.etiquetasTomadasEspelhos = eqp.etiquetasTomadasEspelhos * nPav,
        total.etiquetaCaboUTP = eqp.etiquetaCaboUTP * nPav,
        total.abracadeiraPlastica = eqp.abracadeiraPlastica * nPav,
        total.reguaOitoTomadas = eqp.reguaOitoTomadas * nPav,
        total.reguaFechamento = eqp.reguaFechamento * nPav,
        total.porcaGaiola = eqp.porcaGaiola * nPav,

        // miscelania fibra
        total.etiquetasRack = eqp.etiquetasRack * nPav,
        total.etiquetasSwitchDio = eqp.etiquetasSwitchDio * nPav,
        total.abracadeiraVelcro = eqp.abracadeiraVelcro * nPav,
        total.abracadeiraHellermann = eqp.abracadeiraHellermann * nPav,
        total.filtroDeLinha = eqp.filtroDeLinha * nPav
    // rack
    total.tamanhoTotal = eqp.tamanhoTotal; // tamanho p/rack
    total.nRacks = eqp.nRacks * nPav;

    //sala de equipamentos
    salaeqp.paresFibra = eqp.paresFibra * nPav + 1;

    atualizaResultado();
}

const infoIcon = document.querySelector('.info-icon');
const tooltip = document.getElementById('tooltip');

infoIcon.addEventListener('mouseenter', function () {
    tooltip.style.display = 'block';
});

infoIcon.addEventListener('mousemove', function (event) {
    // Ajusta a posição do tooltip centralizado acima do mouse
    tooltip.style.top = (event.clientY - tooltip.offsetHeight - 10) + 'px'; // 10px acima do cursor
    tooltip.style.left = (event.clientX) + 'px'; // Centraliza horizontalmente
});

infoIcon.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none';
});

infoIcon.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none';
});

document.getElementById('backbone').addEventListener('change', function () {
    const predioLabel = document.getElementById('predioLabel');
    if (this.value === '2') {
        predioLabel.style.display = 'block';
    } else {
        predioLabel.style.display = 'none';
    }
});