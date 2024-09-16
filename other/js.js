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
    switchDio: null,
    dio: null,
    organizadorCaboFrontalFibra: null,
    acopladores: null,
    pigtail: null,

    cordaoOptico: null,
    terminadorOptico: null,


    etiquetasRack: null, // 
    etiquetasSwitchDio: null, //
    abracadeiraVelcro: null, // 
    abracadeiraHellermann: null, //
    filtroDeLinha: null, //


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


    // RACK FIBRA
    tamanhoTotalRackFibra: null,
    nRacksFibra: null,
};

salaeqp = {
    paresFibra: null,
    switchDio: null,
    dio: null,
    organizadorCaboFrontalFibra: null,
    acopladores: null,
    pigtail: null,

    cordaoOptico: null,
    terminadorOptico: null,
    etiquetasRack: null, // 
    etiquetasSwitchDio: null, //
    abracadeiraVelcro: null, // 
    abracadeiraHellermann: null, //
    filtroDeLinha: null, //
    porcaGaiola: null,
    reguaFechamento: null,

    unidadesUsadas: null,
    tamanhoTotal: null,
    tamanho150: null,
    nRacks: null,
};
salapredio = {
    paresFibra: null,
    switchDio: null,
    dio: null,
    organizadorCaboFrontalFibra: null,
    acopladores: null,
    pigtail: null,
    cordaoOptico: null,
    terminadorOptico: null,
    etiquetasRack: null, // 
    etiquetasSwitchDio: null, //
    abracadeiraVelcro: null, // 
    abracadeiraHellermann: null, //
    filtroDeLinha: null, //
    porcaGaiola: null,
    reguaFechamento: null,

    unidadesUsadas: null,
    tamanhoTotal: null,
    tamanho150: null,
    nRacks: null,
};

tipoBackbone = null;
// Função para calcular os materiais
function calcularMateriais() {
    tipoBackbone = parseInt(document.querySelector("#backbone").value, 10);
    if (tipoBackbone == 1) {
        document.getElementById("opcao-predio-principal").style.display = "none";
        document.getElementById("opcao-sala-eqp1").textContent = "Sala de Equipamentos";
        document.querySelector('#sala-eqp h2').textContent = "Resultado da sala de equipamentos";
    } else {
        document.getElementById('opcao-predio-principal').style.display = "block";
        document.getElementById("opcao-sala-eqp1").textContent = "Sala de equipamentos - Backbone secundário"
        document.querySelector('#sala-eqp h2').textContent = "Resultado da sala de equipamentos secundária";
    }

    // Pegando os valores dos inputs
    const nPav = parseInt(document.querySelector("#nPav").value, 10);
    const pontosPavimento = parseInt(document.querySelector("#pontosPavimento").value, 10);
    eqp.qCamera = parseInt(document.querySelector("#qCameras").value, 10);
    eqp.qVoip = parseInt(document.querySelector("#qVoip").value, 10);
    const tamanhoBandeja = parseInt(document.querySelector("#bandeja").value, 10);
    eqp.paresFibra = parseInt(document.querySelector("#pfibras").value, 10);

    // Calculando os valores rede
    eqp.qPontos = pontosPavimento;
    eqp.tomadas = eqp.qPontos * 2;
    eqp.espelhos = eqp.qPontos;
    eqp.patchCordAzul = eqp.tomadas;
    eqp.patchCordVermelho = eqp.qCamera;
    eqp.patchCordBranco = eqp.qVoip;
    eqp.patchCable = eqp.tomadas;
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
    eqp.acopladores = eqp.paresFibra * 2;
    eqp.cordaoOptico = eqp.acopladores;
    eqp.switchDio = eqp.dio;
    eqp.organizadorCaboFrontalFibra = eqp.switchDio + eqp.dio;
    eqp.pigtail = eqp.paresFibra;

    // miscelania fibra
    eqp.etiquetasSwitchDio = eqp.switchDio + eqp.dio + eqp.tamanhoBandeja;
    eqp.abracadeiraVelcro = 1; // rolo de 3 metros
    eqp.abracadeiraHellermann = 1;
    eqp.filtroDeLinha = 2;

    // rack

    eqp.unidadesUsadas = eqp.patchPanel + eqp.switchRede + eqp.organizadorCaboFrontal + eqp.switchDio + eqp.dio + eqp.organizadorCaboFrontalFibra + eqp.tamanhoBandeja + 2 + 2; // 2U NVR, 2U DVR
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
        eqp.nRacks = Math.ceil(eqp.tamanho150 / 44);
    }
    // continuacao miscelania
    eqp.etiquetasRack = eqp.nRacks;
    eqp.reguaFechamento = eqp.tamanhoTotal * eqp.nRacks - eqp.unidadesUsadas;
    eqp.porcaGaiola = 4 * eqp.tamanhoTotal * eqp.nRacks;


    //sala de equipamentos

    salaeqp.paresFibra = eqp.paresFibra * nPav + 1;
    if (salaeqp.paresFibra <= 4) {
        salaeqp.terminadorOptico = 1;
        salaeqp.dio = 0;
    } else {
        salaeqp.dio = Math.ceil(salaeqp.paresFibra * 2 / 24);
        salaeqp.terminadorOptico = 0;
    }
    salaeqp.acopladores = salaeqp.paresFibra * 2;
    salaeqp.cordaoOptico = salaeqp.acopladores;
    salaeqp.switchDio = salaeqp.dio;
    salaeqp.organizadorCaboFrontalFibra = salaeqp.switchDio + salaeqp.dio;
    salaeqp.pigtail = salaeqp.paresFibra;

    salaeqp.etiquetasSwitchDio = salaeqp.switchDio + salaeqp.dio + eqp.tamanhoBandeja;
    salaeqp.abracadeiraVelcro = 1; // rolo de 3 metros
    salaeqp.abracadeiraHellermann = 1;
    salaeqp.filtroDeLinha = 2;
    salaeqp.unidadesUsadas = salaeqp.switchDio + salaeqp.dio + salaeqp.organizadorCaboFrontalFibra + eqp.tamanhoBandeja + 2; // 2U DVR
    salaeqp.tamanho150 = salaeqp.unidadesUsadas * 1.5

    if (salaeqp.tamanho150 <= 16) {
        salaeqp.tamanhoTotal = 16;
        salaeqp.nRacks = 1;

    }
    else if (salaeqp.tamanho150 <= 36) {
        salaeqp.tamanhoTotal = 36;
        salaeqp.nRacks = 1;
    }
    else if (salaeqp.tamanho150 <= 44) {
        salaeqp.tamanhoTotal = 44;
        salaeqp.nRacks = 1;
    }
    else if (salaeqp.tamanho150 > 44) {
        salaeqp.tamanhoTotal = 44;
        salaeqp.nRacks = Math.ceil(tamanho150 / 44);
    }
    // continuacao miscelania
    salaeqp.etiquetasRack = salaeqp.nRacks;
    salaeqp.reguaFechamento = salaeqp.tamanhoTotal * salaeqp.nRacks - salaeqp.unidadesUsadas;
    salaeqp.porcaGaiola = 4 * salaeqp.tamanhoTotal * salaeqp.nRacks;

    // sala do prédio
    if (tipoBackbone == 2) {
        predio = document.querySelector('#pPredio');
        numeroPredios = predio.value;
        salapredio.paresFibra = numeroPredios * salaeqp.paresFibra * nPav + 1;
        if (salapredio.paresFibra <= 4) {
            salapredio.terminadorOptico = numeroPredios;
            salapredio.dio = 0;
        } else {
            salapredio.dio = Math.ceil(salapredio.paresFibra * 2 / 24);
            salapredio.terminadorOptico = 0;
        }
        salapredio.acopladores = salapredio.paresFibra * 2;
        salapredio.cordaoOptico = salapredio.acopladores;
        salapredio.switchDio = salapredio.dio;
        salapredio.organizadorCaboFrontalFibra = salapredio.switchDio + salapredio.dio;
        salapredio.pigtail = salaeqp.paresFibra;
        salapredio.etiquetasSwitchDio = salapredio.switchDio + salapredio.dio + eqp.tamanhoBandeja;
        salapredio.abracadeiraVelcro = 1; // rolo de 3 metros
        salapredio.abracadeiraHellermann = 1;
        salapredio.filtroDeLinha = 2;

        salapredio.unidadesUsadas = salapredio.switchDio + salapredio.dio + salapredio.organizadorCaboFrontalFibra + eqp.tamanhoBandeja + 2; // 2U DVR
        salapredio.tamanho150 = salapredio.unidadesUsadas * 1.5

        if (salapredio.tamanho150 <= 16) {
            salapredio.tamanhoTotal = 16;
            salapredio.nRacks = 1;

        }
        else if (salapredio.tamanho150 <= 36) {
            salapredio.tamanhoTotal = 36;
            salapredio.nRacks = 1;
        }
        else if (salapredio.tamanho150 <= 44) {
            salapredio.tamanhoTotal = 44;
            salapredio.nRacks = 1;
        }
        else if (salapredio.tamanho150 > 44) {
            salapredio.tamanhoTotal = 44;
            salapredio.nRacks = Math.ceil(tamanho150 / 44);
        }
        // continuacao miscelania
        salapredio.etiquetasRack = salapredio.nRacks;
        salapredio.reguaFechamento = salapredio.tamanhoTotal * salapredio.nRacks - salapredio.unidadesUsadas;
        salapredio.porcaGaiola = 4 * salapredio.tamanhoTotal * salapredio.nRacks;
    }
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
    total.tamanhoBandeja = eqp.tamanhoBandeja; // se for o mesmo para todos os pavimentos

    //fibra
    total.paresFibra = eqp.paresFibra *nPav;
    total.switchDio = eqp.switchDio *nPav + salaeqp.switchDio + salapredio.switchDio;
    total.dio = eqp.dio *nPav + salaeqp.dio + salapredio.dio;
    total.organizadorCaboFrontalFibra = eqp.organizadorCaboFrontalFibra *nPav + salaeqp.organizadorCaboFrontalFibra + salapredio.organizadorCaboFrontalFibra;
    total.acopladores = eqp.acopladores *nPav + salaeqp.acopladores + salapredio.acopladores;
    total.pigtail = eqp.pigtail *nPav + salaeqp.pigtail + salapredio.pigtail;
    total.cordaoOptico = eqp.cordaoOptico *nPav + salaeqp.cordaoOptico + salapredio.cordaoOptico;
    total.terminadorOptico = eqp.terminadorOptico *nPav + salaeqp.terminadorOptico + salapredio.terminadorOptico;

    // miscelania rede
    total.etiquetasPortaPatchPanel = eqp.etiquetasPortaPatchPanel * nPav;
    total.etiquetasPatchCable = eqp.etiquetasPatchCable * nPav;
    total.etiquetasPatchPanel = eqp.etiquetasPatchPanel * nPav;
    total.etiquetasTomadasEspelhos = eqp.etiquetasTomadasEspelhos * nPav;
    total.etiquetaCaboUTP = eqp.etiquetaCaboUTP * nPav;
    total.abracadeiraPlastica = eqp.abracadeiraPlastica * nPav;
    total.reguaOitoTomadas = eqp.reguaOitoTomadas * nPav;
    

    // miscelania fibra
    total.etiquetasRack = eqp.etiquetasRack * nPav  + salaeqp.etiquetasRack + salapredio.etiquetasRack;
    total.etiquetasSwitchDio = eqp.etiquetasSwitchDio * nPav  + salaeqp.etiquetasSwitchDio + salapredio.etiquetasSwitchDio;
    total.abracadeiraVelcro = eqp.abracadeiraVelcro * nPav + salaeqp.abracadeiraVelcro + salapredio.abracadeiraVelcro;
    total.abracadeiraHellermann = eqp.abracadeiraHellermann * nPav + salaeqp.abracadeiraHellermann + salapredio.abracadeiraHellermann;
    total.filtroDeLinha = eqp.filtroDeLinha * nPav + salaeqp.filtroDeLinha + salapredio.filtroDeLinha;

    // rack
    total.tamanhoTotal = eqp.tamanhoTotal;
    total.nRacks = eqp.nRacks * nPav;
    total.reguaFechamento = eqp.reguaFechamento * nPav + salaeqp.reguaFechamento + salapredio.reguaFechamento;
    total.porcaGaiola = eqp.porcaGaiola * nPav + salaeqp.porcaGaiola + salapredio.porcaGaiola;

    // rack de fibra 

    total.tamanhoTotalRackFibra = salaeqp.tamanhoTotal + salapredio.tamanhoTotal;
    total.nRacksFibra = salaeqp.nRacks + salapredio.nRacks;


    if (tipoBackbone == 2) {
        total.paresFibra += salapredio.paresFibra;
        total.dio += salapredio.dio;
        total.acopladores += salapredio.acopladores;
        total.pigtail += salapredio.pigtail;
        total.cordaoOptico += salapredio.cordaoOptico;
        total.switchDio += salapredio.switchDio;
        total.organizadorCaboFrontal += salapredio.organizadorCaboFrontalFibra;
        total.etiquetasRack += salapredio.etiquetasRack;
        total.filtroDeLinha += salapredio.filtroDeLinha;
        total.etiquetasPortaPatchPanel *= numeroPredios;
        total.tomadas *= numeroPredios;
        total.espelhos *= numeroPredios;
        total.patchCordAzul *= numeroPredios;
        total.patchCordVermelho *= numeroPredios;
        total.patchCordBranco = eqp.patchCordBranco * nPav;
        total.patchPanel *= numeroPredios;
        total.switchRede *= 2;
        total.organizadorCaboFrontal *= numeroPredios;
        total.tamanhoBandeja *= numeroPredios;
        total.etiquetasPortaPatchPanel *= numeroPredios;
        total.etiquetasPatchCable *= numeroPredios;
        total.etiquetasPatchPanel *= numeroPredios;
        total.etiquetasTomadasEspelhos *= numeroPredios;
        total.etiquetaCaboUTP *= numeroPredios;
        total.abracadeiraPlastica *= numeroPredios;
        total.reguaOitoTomadas *= numeroPredios;
        total.reguaFechamento *= numeroPredios;
        total.porcaGaiola *= numeroPredios;
    
        // miscelania fibra
        total.etiquetasRack *= numeroPredios;
        total.etiquetasSwitchDio *= numeroPredios;
        total.abracadeiraVelcro *= numeroPredios;
        total.abracadeiraHellermann *= numeroPredios;
        total.filtroDeLinha *= numeroPredios;
        total.nRacks = eqp.nRacks * nPav;

    
    }






    atualizaResultado();
}

// icone de ajuda
const infoIcon = document.querySelector('.info-icon');
const tooltip = document.getElementById('tooltip');

infoIcon.addEventListener('mouseenter', function () {
    tooltip.style.display = 'block';
});

infoIcon.addEventListener('mousemove', function (event) {
    tooltip.style.top = (event.clientY - tooltip.offsetHeight - 10) + 'px'; // 10px acima do cursor
    tooltip.style.left = (event.clientX) + 'px'; // Centraliza horizontalmente
});

infoIcon.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none';
});


// backbone secundário
document.getElementById('backbone').addEventListener('change', function () {
    const predioLabel = document.getElementById('predioLabel');
    if (this.value === '2') {
        predioLabel.style.display = 'block';
    } else {
        predioLabel.style.display = 'none';
    }
});


// opções de ver resultado
document.getElementById("res-pavimento").style.display = "none";
document.getElementById("sala-eqp").style.display = "none";
document.getElementById("predio-principal").style.display = "none";
document.getElementById("options").addEventListener("change", function () {
    var selectedValue = this.value;

    document.getElementById("res-pavimento").style.display = "none";
    document.getElementById("sala-eqp").style.display = "none";
    document.getElementById("predio-principal").style.display = "none";
    document.getElementById("res-total").style.display = "none";

    if (selectedValue) {
        document.getElementById(selectedValue).style.display = "block";
    }
});