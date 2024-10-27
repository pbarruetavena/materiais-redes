// Definindo o objeto para armazenar os dados

primario = {
    tamanho_fibra: null,
    especificacao_fibra: null,
    central: {
        dio: null,
        to: null,
        acoplador: null,
        especificacao_acoplador: null,
        pares_fibra: null,
        pigtail: null,
        especificao_pigtail: null,
        cordao: null,
        especificacao_cordao: null,
        caixa_emenda: null,
        tubo: null,
    },
    periferico: {
        dio: null,
        to: null,
        acoplador: null,
        especificacao_acoplador: null,
        pares_fibra: null,
        pigtail: null,
        especificao_pigtail: null,
        cordao: null,
        especificacao_cordao: null,
        caixa_emenda: null,
        tubo: null,
    },
    total: {
        
    }
}

secundario = {
    central: {
        dio: null,
        to: null,
        acoplador: null,
        especificacao_acoplador: null,
        pares_fibra: null,
        especificacao_fibra: null,
        tamanho_fibra: null,
        pigtail: null,
        especificao_pigtail: null,
        cordao: null,
        especificacao_cordao: null,
        caixa_emenda: null,
        tubo: null,
    },
    periferico: {
        dio: null,
        to: null,
        acoplador: null,
        especificacao_acoplador: null,
        pares_fibra: null,
        especificacao_fibra: null,
        tamanho_fibra: null,
        pigtail: null,
        especificao_pigtail: null,
        cordao: null,
        especificacao_cordao: null,
        caixa_emenda: null,
        tubo: null,
    }
}


tipoBackbone = null;

// Função para calcular os materiais
function calcularMateriais() {
    tipoBackbone = parseInt(document.querySelector("#backbone").value, 10);
    var containerRes = document.getElementById('container-res');
    containerRes.classList.remove('oculto');

    // Pegando os valores dos inputs
    const nPavValue = document.querySelector("#nPav").value;
    const nPav = nPavValue != null ? parseInt(nPavValue, 10) - 1 : null;
    const pfibrasValue = document.querySelector("#pfibras").value;
    const pfibras = pfibrasValue != null ? parseInt(pfibrasValue, 10) : null;
    const tPavimentoValue = document.querySelector("#tPavimento").value;
    const tPavimento = tPavimentoValue != null ? parseInt(tPavimentoValue, 10) : null;
    const pPredioValue = document.querySelector("#pPredio").value;
    const pPredio = pPredioValue != null ? parseInt(pPredioValue, 10) : null;
    const tipoInput = document.querySelector('#tipoAcoplador').value;



    if (tipoBackbone == 1) {

        primario.central.pares_fibra = pfibras;
        primario.especificacao_fibra = document.getElementById("fibraprimaria").value;
        var especificacaoTamanhoAcopladores = "";
        if (primario.especificacao_fibra == 'monomodo')
            especificacaoTamanhoAcopladores = " 9 X 125µm";
        else if (primario.especificacao_fibra == 'multimodo50')
            especificacaoTamanhoAcopladores = " 50 X 125µm";
        if (primario.especificacao_fibra == 'multimodo625')
            especificacaoTamanhoAcopladores = " 62.5 X 125µm";

        var tamanho = 0;
        for (var i = 2; i <= nPav+1; i++) {
            tamanho += (i + 1) * tPavimento;
        }
        primario.tamanho_fibra = tamanho * 1.2;
        primario.central.dio = Math.ceil(pfibras * nPav / 12);
        primario.central.acoplador = pfibras * nPav;
        if (tipoAcoplador == 'duplo') {
            primario.central.especificacao_acoplador = "Acoplador Duplo LC " + especificacaoTamanhoAcopladores;
            primario.central.pigtail = pfibras * nPav;
        } else {
            primario.central.especificacao_acoplador = "Acoplador Simples LC " + especificacaoTamanhoAcopladores;
            primario.central.pigtail = pfibras * 2 * nPav;
        }
        primario.central.especificao_pigtail = "Pigtail LC - Simples - 1m " + especificacaoTamanhoAcopladores;
        primario.central.cordao = pfibras * nPav;
        primario.central.especificacao_cordao = "Cordão Óptico - LC - Duplo - 3m " + especificacaoTamanhoAcopladores;
        primario.central.caixa_emenda = Math.ceil(pfibras * nPav / 12);
        primario.central.tubo = Math.ceil(pfibras * 2 / 18);

        if (pfibras <= 4) {
            primario.periferico.to = 1;
            primario.periferico.pigtail = pfibras * nPav;
            primario.periferico.especificao_pigtail = "Pigtail - LC - Duplo - 1m " + especificacaoTamanhoAcopladores;
            primario.periferico.tubo = Math.ceil(pfibras * 2 / 18);
            primario.periferico.cordao = 0;
            primario.periferico.acoplador = 0;
            primario.periferico.caixa_emenda = 0;
        } else {
            primario.periferico.dio = Math.ceil(pfibras * nPav / 12);
            primario.periferico.acoplador = pfibras * nPav;
            primario.periferico.especificacao_acoplador = "Acoplador Duplo LC " + especificacaoTamanhoAcopladores;
            primario.periferico.pigtail = pfibras * 2 * nPav;
            primario.periferico.especificao_pigtail = "Pigtail - LC - Simples - 1m " + especificacaoTamanhoAcopladores;
            primario.periferico.cordao = pfibras * nPav;
            primario.periferico.especificacao_cordao = "Cordão Óptico - LC - Duplo - 3m " + especificacaoTamanhoAcopladores;
            primario.periferico.caixa_emenda = Math.ceil(pfibras * nPav / 12);
            primario.periferico.tubo = Math.ceil(pfibras * 2 / 18);
        }


    } else { // tipo backbone = 2



        secundario.central.pares_fibra = pfibras * pPredio;
        secundario.central.especificacao_fibra = document.getElementById("fibrasecundaria").value;
        var especificacaoTamanhoAcopladores = "";
        if (secundario.especificacao_fibra == 'monomodo')
            especificacaoTamanhoAcopladores =  " 9 X 125µm";
        else if (secundario.especificacao_fibra == 'multimodo50')
            especificacaoTamanhoAcopladores =  " 50 X 125µm";
        if (secundario.especificacao_fibra == 'multimodo625')
            especificacaoTamanhoAcopladores =  " 62.5 X 125µm";


        secundario.central.pigtail = pfibras * 2 * pPredio;
        secundario.central.acoplador = (pfibras * 2 * pPredio) / 2;
        secundario.central.especificacao_acoplador = "Acoplador - LC - Duplo " + especificacaoTamanhoAcopladores;
        secundario.central.cordao = (pfibras * 2 * pPredio) / 2;
        secundario.central.especificacao_cordao = "Cordão Óptico - LC - Duplo - 3m " + especificacaoTamanhoAcopladores;

        secundario.central.dio = Math.ceil(pfibras * pPredio / 12);
        secundario.central.caixa_emenda = secundario.central.dio * 2;

        secundario.central.tubo = Math.ceil(pfibras * 2 * pPredio / 18);

    }


    calcularTotal(primario);
    calcularTotal(secundario);
    atualizaResultado();
}

// icone de ajuda
const infoIcon = document.querySelector('.info-icon');
const tooltip = document.getElementById('tooltip');

infoIcon.addEventListener('mouseenter', function () {
    tooltip.style.display = 'block';
});

infoIcon.addEventListener('mousemove', function (event) {
    tooltip.style.top = (event.clientY - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = (event.clientX) + 'px';
});

infoIcon.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none';
});


// backbone secundário
document.getElementById('backbone').addEventListener('change', function () {
    const valor = this.value;
    const elementosPrimario = document.querySelectorAll('.primario');
    const elementosSecundario = document.querySelectorAll('.secundario');

    const mostrar = (elementos, exibir) => {
        elementos.forEach(element => {
            element.style.display = exibir ? 'block' : 'none';
        });
    };

    if (valor === '2') {
        mostrar(elementosSecundario, true);
        mostrar(elementosPrimario, false);
        const labelPavimento = document.querySelector('#txtPav');
        labelPavimento.textContent = 'Distância do pavimento (em metros):';
    } else if (valor === '1') {
        mostrar(elementosPrimario, true);
        mostrar(elementosSecundario, false);
        atualizarTexto();
    }
});


function calcularTotal(obj) {
    const { central, periferico, total = {} } = obj;

    for (const chave in central) {
        const valorCentral = central[chave] || 0;
        const valorPeriferico = periferico[chave] || 0;

        total[chave] = valorCentral + valorPeriferico;
    }

    obj.total = total;
}


//texto do pavimento 
function atualizarTexto() {
    const nPav = document.getElementById("nPav").value;
    const labelPavimento = document.querySelector('#txtPav');

    if(nPav == null) {return;}
    if (nPav === "1") {
        labelPavimento.textContent = 'Distância do pavimento (em metros):';
    } else {
        labelPavimento.textContent = 'Altura do pavimento (em metros):' ;
    }
}
document.getElementById("nPav").addEventListener("input", atualizarTexto);
