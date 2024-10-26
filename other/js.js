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
    const containerRes = document.getElementById('container-res');
    containerRes.classList.remove('oculto');

    // Pegando os valores dos inputs
    const nPav = parseInt(document.querySelector("#nPav").value, 10);
    const pfibras = parseInt(document.querySelector("#pfibras").value, 10);
    const tPavimento = parseInt(document.querySelector("#tPavimento").value, 10);
    const pPredio = parseInt(document.querySelector("#pPredio").value, 10);


    
    if (tipoBackbone == 1) {
        
        primario.central.pares_fibra = pfibras;
        primario.especificacao_fibra = "Fibra MM 50x125µm - Tight Buffer";
        var tamanho = 0;
        for(var i = 1; i <= nPav; i++) {
            tamanho += (i+1)*tPavimento;
        }
        primario.tamanho_fibra = tamanho * 1.2;
        primario.central.dio = Math.ceil(pfibras*nPav / 12);
        primario.central.acoplador = pfibras*nPav;
        primario.central.especificacao_acoplador = "Acoplador Duplo LC (50x125µm) MM";
        primario.central.pigtail = pfibras*2*nPav;
        primario.central.especificao_pigtail = "Pigtail MM (50x125µm) - LC - Simples - 1m";
        primario.central.cordao = pfibras*nPav;
        primario.central.especificacao_cordao = "Cordão Óptico MM (50x125µm) - LC - Duplo - 3m"
        primario.central.caixa_emenda = Math.ceil(pfibras*nPav/12);
        primario.central.tubo = Math.ceil(pfibras*2/18);
        
        if(pfibras <= 4) {
            primario.periferico.to = 1;
            primario.periferico.pigtail = pfibras * nPav;
            primario.periferico.especificao_pigtail = "Pigtail MM (50x125µm) - LC - Duplo - 1m";
            primario.periferico.tubo = Math.ceil(pfibras*2/18);
            primario.periferico.cordao = 0;
            primario.periferico.acoplador = 0;
            primario.periferico.caixa_emenda = 0;
        } else {
            primario.periferico.dio = Math.ceil(pfibras*nPav / 12);
            primario.periferico.acoplador = pfibras*nPav;
            primario.periferico.especificacao_acoplador = "Acoplador Duplo LC (50x125µm) MM";
            primario.periferico.pigtail = pfibras*2*nPav;
            primario.periferico.especificao_pigtail = "Pigtail MM (50x125µm) - LC - Simples - 1m";
            primario.periferico.cordao = pfibras*nPav;
            primario.periferico.especificacao_cordao = "Cordão Óptico MM (50x125µm) - LC - Duplo - 3m"
            primario.periferico.caixa_emenda = Math.ceil(pfibras*nPav/12);
            primario.periferico.tubo = Math.ceil(pfibras*2/18);
        }


    } else { // tipo backbone = 2
        
        const secundarioHtml = document.querySelectorAll;

        for(i = 0; i<secundarioHtml.length; i++){
            secundarioHtml[i].style.display = 'block';
        }


        secundario.central.pares_fibra = pfibras * pPredio;
        secundario.central.especificacao_fibra = "Fibra SM (9x125µm) - Tight Buffer";
        

        secundario.central.pigtail = pfibras * 2 * pPredio;
        secundario.central.acoplador = (pfibras * 2 * pPredio)/2;
        secundario.central.especificacao_acoplador = "Acoplador SM (9x125µm) - LC - Duplo "
        secundario.central.cordao = (pfibras * 2 * pPredio)/2;
        secundario.central.especificacao_cordao = "Cordão Óptico SM (9x125µm) - LC - Duplo - 3m"
        
        secundario.central.dio = Math.ceil(pfibras * nPredio/12);
        secundario.central.caixa_emenda = secundario.central.dio * 2;

        secundario.central.tubo = Math.ceil(pfibras*2*pPredio/18);
        
    }


    calcularTotal(primario);
    calcularTotal(Secundário);
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
    } else if (valor === '1') {
        mostrar(elementosPrimario, true);
        mostrar(elementosSecundario, false);
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
    const labelPavimento = document.querySelector('label[for="tPavimento"]');

    if (nPav === "1") {
      labelPavimento.textContent = "Distância do pavimento (em metros):";
    } else {
      labelPavimento.textContent = "Altura do pavimento (em metros):";
    }
}
document.getElementById("nPav").addEventListener("input", atualizarTexto);
