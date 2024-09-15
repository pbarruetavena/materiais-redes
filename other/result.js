function atualizaResultado() {
    // Atualizando os valores que já estavam no código
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
    document.getElementById("qCamera").innerText = eqp.qCamera;
    document.getElementById("qVoip").innerText = eqp.qVoip;

    // Miscelânia UTP
    document.getElementById("etiquetasPortaPatchPanel").innerText = eqp.etiquetasPortaPatchPanel;
    document.getElementById("etiquetasPatchCable").innerText = eqp.etiquetasPatchCable;
    document.getElementById("etiquetasPatchPanel").innerText = eqp.etiquetasPatchPanel;
    document.getElementById("etiquetasTomadasEspelhos").innerText = eqp.etiquetasTomadasEspelhos;
    document.getElementById("etiquetaCaboUTP").innerText = eqp.etiquetaCaboUTP;
    document.getElementById("abracadeiraPlastica").innerText = eqp.abracadeiraPlastica;
    document.getElementById("reguaOitoTomadas").innerText = eqp.reguaOitoTomadas;
    document.getElementById("reguaFechamento").innerText = eqp.reguaFechamento;
    document.getElementById("porcaGaiola").innerText = eqp.porcaGaiola;

    // Miscelânia fibra
    document.getElementById("etiquetasRack").innerText = eqp.etiquetasRack;
    document.getElementById("etiquetasSwitchDio").innerText = eqp.etiquetasSwitchDio;
    document.getElementById("abracadeiraVelcro").innerText = eqp.abracadeiraVelcro;
    document.getElementById("abracadeiraHellermann").innerText = eqp.abracadeiraHellermann;
    document.getElementById("filtroDeLinha").innerText = eqp.filtroDeLinha;

    // Fibra óptica
    document.getElementById("paresFibra").innerText = eqp.paresFibra;
    document.getElementById("switchDio").innerText = eqp.switchDio;
    document.getElementById("dio").innerText = eqp.dio;
    document.getElementById("organizadorCaboFrontalFibra").innerText = eqp.organizadorCaboFrontalFibra;
    document.getElementById("acopladores").innerText = eqp.acopladores;
    document.getElementById("pigtail").innerText = eqp.pigtail;
    document.getElementById("cordaoOptico").innerText = eqp.cordaoOptico;
    document.getElementById("terminadorOptico").innerText = eqp.terminadorOptico;

    // Rack
    document.getElementById("tamanhoTotal").innerText = eqp.tamanhoTotal;
    document.getElementById("nRack").innerText = eqp.nRacks;



    document.querySelector(".container-res").scrollIntoView({ behavior: 'smooth' });
}