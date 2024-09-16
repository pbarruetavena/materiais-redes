function atualizaResultado() {
    // Atualizando os valores que já estavam no código
    document.getElementById("qPontos").innerText = eqp.qPontos;
    document.getElementById("tomadas").innerText = eqp.tomadas;
    document.getElementById("espelhos").innerText = eqp.espelhos;
    document.getElementById('patchcable').innerText = eqp.patchCable;
    document.getElementById("patchCordAzul").innerText = eqp.patchCordAzul;
    document.getElementById("patchCordVermelho").innerText = eqp.patchCordVermelho;
    document.getElementById("patchCordBranco").innerText = eqp.patchCordBranco;
    document.getElementById("patchPanel").innerText = eqp.patchPanel;
    document.getElementById("switchRede").innerText = eqp.switchRede;
    document.getElementById("organizadorCaboFrontal").innerText = eqp.organizadorCaboFrontal;
    document.getElementById("tamanhoBandeja").innerText = eqp.tamanhoBandeja;
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
    document.getElementById('totalFibra').innerText = eqp.totalFibra;
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


    // sala de equipamentos
    document.getElementById("seParesFibra").innerText = salaeqp.paresFibra;
    document.getElementById('seTotalInterno').innerText = eqp.totalFibra;
    document.getElementById('seTipoTransceiver').innerText = fibraInterna.tipoTransceiver;
    document.getElementById('seFibraTransceiver').innerText = fibraInterna.midiaTransceiver;
    document.getElementById('seJanelaFibra').innerText = fibraInterna.janelaTransmissao;
    document.getElementById('seTotalExterno').innerText = salaeqp.totalFibra;
    document.getElementById("seSwitchDio").innerText = salaeqp.switchDio;
    document.getElementById("seDio").innerText = salaeqp.dio;
    document.getElementById("seOrganizadorCaboFrontalFibra").innerText = salaeqp.organizadorCaboFrontalFibra;
    document.getElementById("seAcopladores").innerText = salaeqp.acopladores;
    document.getElementById("sePigtail").innerText = salaeqp.pigtail;
    document.getElementById("seCordaoOptico").innerText = salaeqp.cordaoOptico;
    document.getElementById("seTerminadorOptico").innerText = salaeqp.terminadorOptico;
    document.getElementById("seEtiquetasRack").innerText = salaeqp.etiquetasRack;
    document.getElementById("seEtiquetasSwitchDio").innerText = salaeqp.etiquetasSwitchDio;
    document.getElementById("seAbracadeiraVelcro").innerText = salaeqp.abracadeiraVelcro;
    document.getElementById("seAbracadeiraHellermann").innerText = salaeqp.abracadeiraHellermann;
    document.getElementById("seFiltroDeLinha").innerText = salaeqp.filtroDeLinha;
    document.getElementById("sePorcaGaiola").innerText = salaeqp.porcaGaiola;
    document.getElementById("seReguaFechamento").innerText = salaeqp.reguaFechamento;
    document.getElementById("seTamanho150").innerText = salaeqp.tamanho150;
    document.getElementById("seNRacks").innerText = salaeqp.nRacks;


    // sala do prédio
    document.getElementById("spParesFibra").innerText = salapredio.paresFibra;
    document.getElementById("spTotalFibra").innerText = salapredio.totalFibra;
    document.getElementById('spTipoTransceiver').innerText = fibraExterna.tipoTransceiver;
    document.getElementById('spFibraTransceiver').innerText = fibraExterna.midiaTransceiver;
    document.getElementById('spJanelaFibra').innerText = fibraExterna.janelaTransmissao;
    document.getElementById("spSwitchDio").innerText = salapredio.switchDio;
    document.getElementById("spDio").innerText = salapredio.dio;
    document.getElementById("spOrganizadorCaboFrontalFibra").innerText = salapredio.organizadorCaboFrontalFibra;
    document.getElementById("spAcopladores").innerText = salapredio.acopladores;
    document.getElementById("spPigtail").innerText = salapredio.pigtail;
    document.getElementById("spCordaoOptico").innerText = salapredio.cordaoOptico;
    document.getElementById("spTerminadorOptico").innerText = salapredio.terminadorOptico;
    document.getElementById("spEtiquetasRack").innerText = salapredio.etiquetasRack;
    document.getElementById("spEtiquetasSwitchDio").innerText = salapredio.etiquetasSwitchDio;
    document.getElementById("spAbracadeiraVelcro").innerText = salapredio.abracadeiraVelcro;
    document.getElementById("spAbracadeiraHellermann").innerText = salapredio.abracadeiraHellermann;
    document.getElementById("spFiltroDeLinha").innerText = salapredio.filtroDeLinha;
    document.getElementById("spPorcaGaiola").innerText = salapredio.porcaGaiola;
    document.getElementById("spReguaFechamento").innerText = salapredio.reguaFechamento;
    document.getElementById("spTamanho150").innerText = salapredio.tamanho150;
    document.getElementById("spNRacks").innerText = salapredio.nRacks;


    //total
    document.getElementById("tQPontos").innerText = total.qPontos;
    document.getElementById("tTomadas").innerText = total.tomadas;
    document.getElementById("tEspelhos").innerText = total.espelhos;
    document.getElementById("tPatchCordAzul").innerText = total.patchCordAzul;
    document.getElementById("tPatchCordVermelho").innerText = total.patchCordVermelho;
    document.getElementById("tPatchCordBranco").innerText = total.patchCordBranco;
    document.getElementById("tPatchPanel").innerText = total.patchPanel;
    document.getElementById("tSwitchRede").innerText = total.switchRede;
    document.getElementById("tOrganizadorCaboFrontal").innerText = total.organizadorCaboFrontal;
    document.getElementById("tTamanhoBandeja").innerText = total.tamanhoBandeja;
    document.getElementById("tParesFibra").innerText = total.paresFibra;
    document.getElementById("tTotalFibra").innerText = total.totalFibra;
    document.getElementById('tiTipoTransceiver').innerText = fibraInterna.tipoTransceiver;
    document.getElementById('tiFibraTransceiver').innerText = fibraInterna.midiaTransceiver;
    document.getElementById('tiJanelaFibra').innerText = fibraInterna.janelaTransmissao;
    document.getElementById('tTipoTransceiver').innerText = fibraExterna.tipoTransceiver;
    document.getElementById('tFibraTransceiver').innerText = fibraExterna.midiaTransceiver;
    document.getElementById('tJanelaFibra').innerText = fibraExterna.janelaTransmissao;
    document.getElementById("tSwitchDio").innerText = total.switchDio;
    document.getElementById("tDio").innerText = total.dio;
    document.getElementById("tOrganizadorCaboFrontalFibra").innerText = total.organizadorCaboFrontalFibra;
    document.getElementById("tAcopladores").innerText = total.acopladores;
    document.getElementById("tPigtail").innerText = total.pigtail;
    document.getElementById("tCordaoOptico").innerText = total.cordaoOptico;
    document.getElementById("tTerminadorOptico").innerText = total.terminadorOptico;
    document.getElementById("tEtiquetasRack").innerText = total.etiquetasRack;
    document.getElementById("tEtiquetasSwitchDio").innerText = total.etiquetasSwitchDio;
    document.getElementById("tAbracadeiraVelcro").innerText = total.abracadeiraVelcro;
    document.getElementById("tAbracadeiraHellermann").innerText = total.abracadeiraHellermann;
    document.getElementById("tFiltroDeLinha").innerText = total.filtroDeLinha;
    document.getElementById("tEtiquetasPortaPatchPanel").innerText = total.etiquetasPortaPatchPanel;
    document.getElementById("tEtiquetasPatchCable").innerText = total.etiquetasPatchCable;
    document.getElementById("tEtiquetasPatchPanel").innerText = total.etiquetasPatchPanel;
    document.getElementById("tEtiquetasTomadasEspelhos").innerText = total.etiquetasTomadasEspelhos;
    document.getElementById("tEtiquetaCaboUTP").innerText = total.etiquetaCaboUTP;
    document.getElementById("tAbracadeiraPlastica").innerText = total.abracadeiraPlastica;
    document.getElementById("tReguaOitoTomadas").innerText = total.reguaOitoTomadas;
    document.getElementById("tReguaFechamento").innerText = total.reguaFechamento;
    document.getElementById("tPorcaGaiola").innerText = total.porcaGaiola;
    document.getElementById("tTamanhoRackFibra").innerText = total.tamanhoTotalRackFibra;
    document.getElementById("tNRacksFibra").innerText = total.nRacksFibra;
    document.getElementById("tTamanhoRackMalha").innerText = total.tamanhoTotal;
    document.getElementById("tNRacksMalha").innerText = total.nRacks;

    document.querySelector(".container-res").scrollIntoView({ behavior: 'smooth' });
}