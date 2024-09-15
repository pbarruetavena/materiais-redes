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

    // miscelania fibra
    eqp.etiquetasRack = 0;
    eqp.etiquetasSwitchDio = eqp.switchDio + eqp.dio + (eqp.inputBandeja * eqp.tamanhoBandeja);
    eqp.abracadeiraVelcro = 1; // rolo de 3 metros
    eqp.abracadeiraHellermann = 0;
    eqp.filtroDeLinha = 0;
    

    
    //fibra óptica
    eqp.paresFibra = parseInt(document.querySelector("#pfibras"));
    eqp.qCamera = parseInt(document.querySelector('#qCameras'));
    eqp.qVoip = parseInt(document.querySelector('#qVoip'));
    if (eqp.qCamera != 0) eqp.paresFibra++;
    if (eqp.qVoip != 0) eqp.paresFibra++;
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
    eqp.organizadorCaboFrontalFibra =  eqp.switchDio + eqp.dio;

    // rack

    eqp.unidadesUsadas = eqp.patchPanel + eqp.switchRede + eqp.organizadorCaboFrontal + eqp.switchDio + eqp.dio + eqp.organizadorCaboFrontalFibra + (eqp.inputBandeja * eqp.tamanhoBandeja) + 2 + 2; // 2U NVR, 2U DVR
    eqp.tamanho150 = eqp.unidadesUsadas *1.5

    if(eqp.tamanho150 <= 16){   
        eqp.tamanhoTotal = 16;
        eqp.nRacks = 1;

    }
    else if(eqp.tamanho150 <= 36){
        eqp.tamanhoTotal = 36;
        eqp.nRacks = 1;
    }
    else if(eqp.tamanho150 <= 44){
        eqp.tamanhoTotal = 44;
        eqp.nRacks = 1;
    }
    else if(eqp.tamanho150 > 44){
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

    // Exibindo os resultados
    // document.querySelector("#result").innerHTML = `
    //     <h3>Resultados Calculados para cada pavimento:</h3>
    //     <p><strong>Pontos:</strong> ${eqp.qPontos}</p>
    //     <p><strong>Tomadas:</strong> ${eqp.tomadas}</p>
    //     <p><strong>Espelhos:</strong> ${eqp.espelhos}</p>
    //     <p><strong>Patch Cord Azul:</strong> ${eqp.patchCordAzul}</p>
    //     <p><strong>Patch Cord Vermelho:</strong> ${eqp.patchCordVermelho}</p>
    //     <p><strong>Patch Cord Branco:</strong> ${eqp.patchCordBranco}</p>
    //     <p><strong>Patch Panel:</strong> ${eqp.patchPanel}</p>
    //     <p><strong>Switch Rede:</strong> ${eqp.switchRede}</p>
    //     <p><strong>Organizador Cabo Frontal:</strong> ${eqp.organizadorCaboFrontal}</p>
    //     <p><strong>Tamanho Bandeja:</strong> ${eqp.tamanhoBandeja}</p>
    //     <h3>Miscelânea UTP:</h3>
    //     <p><strong>Etiquetas Porta Patch Panel:</strong> ${eqp.etiquetasPortaPatchPanel}</p>
    //     <p><strong>Etiquetas Patch Cable:</strong> ${eqp.etiquetasPatchCable}</p>
    //     <p><strong>Etiquetas Patch Panel:</strong> ${eqp.etiquetasPatchPanel}</p>
    //     <p><strong>Etiquetas Tomadas Espelhos:</strong> ${eqp.etiquetasTomadasEspelhos}</p>
    //     <p><strong>Etiqueta Cabo UTP:</strong> ${eqp.etiquetaCaboUTP}</p>
    //     <p><strong>Abracadeira Plástica:</strong> ${eqp.abracadeiraPlastica}</p>
    //     <p><strong>Regua Oito Tomadas:</strong> ${eqp.reguaOitoTomadas}</p>
    //     <p><strong>Regua Fechamento:</strong> ${eqp.reguaFechamento}</p>
    //     <p><strong>Porca Gaiola:</strong> ${eqp.porcaGaiola}</p>
    //     <h3>Miscelânea Fibra:</h3>
    //     <p><strong>Etiquetas Rack:</strong> ${eqp.etiquetasRack}</p>
    //     <p><strong>Etiquetas Switch Dio:</strong> ${eqp.etiquetasSwitchDio}</p>
    //     <p><strong>Abracadeira Velcro:</strong> ${eqp.abracadeiraVelcro}</p>
    //     <p><strong>Abracadeira Hellermann:</strong> ${eqp.abracadeiraHellermann}</p>
    //     <p><strong>Filtro de Linha:</strong> ${eqp.filtroDeLinha}</p>


    //     <h3>Resultados Totais para ${nPav} Pavimentos:</h3>
    //     <p><strong>Total de Pontos:</strong> ${total.qPontos}</p>
    //     <p><strong>Total de Tomadas:</strong> ${total.tomadas}</p>
    //     <p><strong>Total de Espelhos:</strong> ${total.espelhos}</p>
    //     <p><strong>Total de Patch Cord Azul:</strong> ${total.patchCordAzul}</p>
    //     <p><strong>Total de Patch Cord Vermelho:</strong> ${total.patchCordVermelho}</p>
    //     <p><strong>Total de Patch Cord Branco:</strong> ${total.patchCordBranco}</p>
    //     <p><strong>Total de Patch Panels:</strong> ${total.patchPanel}</p>
    //     <p><strong>Total de Switches Rede:</strong> ${total.switchRede}</p>
    //     <p><strong>Total de Organizadores de Cabo Frontal:</strong> ${total.organizadorCaboFrontal}</p>
    //     <p><strong>Tamanho Bandeja:</strong> ${total.tamanhoBandeja}</p>
    // `;
}

function atualizaResultado() {
    document.getElementById("qPontos").innerText = eqp.qPontos;
    document.getElementById("tomadas").innerText = eqp.tomadas;
    document.getElementById("espelhos").innerText = eqp.espelhos;
    document.getElementById("patchCordAzul").innerText = eqp.patchCordAzul;
    document.getElementById("patchCordVermelho").innerText = eqp.patchCordVermelho;
    document.getElementById("patchCordBranco").innerText = eqp.patchCordBranco;
    document.getElementById("patchPanel").innerText = eqp.patchPanel;
    document.getElementById("switchRede").innerText = eqp.switchRede;
    document.getElementById("organizadorCaboFrontal").innerText = eqp.organizadorCaboFrontal;
    document.getElementById("tamanhoBandeja").innerText = eqp.tamanhoBandeja;
    document.getElementById("unidadesRack").innerText = eqp.tamanhoTotal;
    document.getElementById("nRack").innerText = eqp.nRacks;



    // Atualizando os valores totais
    document.getElementById("totalPontos").innerText = total.qPontos;
    document.getElementById("totalTomadas").innerText = total.tomadas;
    document.getElementById("totalEspelhos").innerText = total.espelhos;
    document.getElementById("totalPatchCordAzul").innerText = total.patchCordAzul;
    document.getElementById("totalPatchCordVermelho").innerText = total.patchCordVermelho;
    document.getElementById("totalPatchCordBranco").innerText = total.patchCordBranco;
    document.getElementById("totalPatchPanel").innerText = total.patchPanel;
    document.getElementById("totalSwitchRede").innerText = total.switchRede;
    document.getElementById("totalOrganizadorCaboFrontal").innerText = total.organizadorCaboFrontal;
    document.getElementById("totalTamanhoBandeja").innerText = total.tamanhoBandeja;
    document.getElementById("totalUnidadesRack").innerText = total.tamanhoTotal;
    document.getElementById("totalNRack").innerText = total.nRacks;


    document.querySelector(".container-res").scrollIntoView({ behavior: 'smooth' });
}

const infoIcon = document.querySelector('.info-icon');
const tooltip = document.getElementById('tooltip');

infoIcon.addEventListener('mouseenter', function() {
    tooltip.style.display = 'block';
});

infoIcon.addEventListener('mousemove', function(event) {
    // Ajusta a posição do tooltip centralizado acima do mouse
    tooltip.style.top = (event.clientY - tooltip.offsetHeight - 10) + 'px'; // 10px acima do cursor
    tooltip.style.left = (event.clientX) + 'px'; // Centraliza horizontalmente
});

infoIcon.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
});

infoIcon.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
});

document.getElementById('backbone').addEventListener('change', function() {
    const predioLabel = document.getElementById('predioLabel');
    if (this.value === '2') {
        predioLabel.style.display = 'block';
    } else {
        predioLabel.style.display = 'none';
    }
});