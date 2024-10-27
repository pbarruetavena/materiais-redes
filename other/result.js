function atualizaResultado() {
    // Atualizando os valores que já estavam no código

    // backbone 
    document.getElementById("dio1").innerText = primario.total.dio;
    document.getElementById("to1").innerText = primario.total.to;
    document.getElementById("acoplador1").innerText = primario.total.acoplador;
    document.getElementById("especificacao_acoplador1").innerText = primario.total.especificacao_acoplador;
    document.getElementById("pares_fibra1").innerText = primario.total.pares_fibra;
    document.getElementById("pigtail1").innerText = primario.total.pigtail;
    document.getElementById("especificao_pigtail1").innerText = primario.total.especificao_pigtail;
    document.getElementById("cordao1").innerText = primario.total.cordao;
    document.getElementById("especificacao_cordao1").innerText = primario.total.especificacao_cordao;
    document.getElementById("caixa_emenda1").innerText = primario.total.caixa_emenda;
    document.getElementById("tubo1").innerText = primario.total.tubo;

    document.getElementById("dio2").innerText = primario.total.dio;
    document.getElementById("to2").innerText = primario.total.to;
    document.getElementById("acoplador2").innerText = primario.total.acoplador;
    document.getElementById("especificacao_acoplador2").innerText = primario.total.especificacao_acoplador;
    document.getElementById("pares_fibra2").innerText = primario.total.pares_fibra;
    document.getElementById("pigtail2").innerText = primario.total.pigtail;
    document.getElementById("especificao_pigtail2").innerText = primario.total.especificao_pigtail;
    document.getElementById("cordao2").innerText = primario.total.cordao;
    document.getElementById("especificacao_cordao2").innerText = primario.total.especificacao_cordao;
    document.getElementById("caixa_emenda2").innerText = primario.total.caixa_emenda;
    document.getElementById("tubo2").innerText = primario.total.tubo;

    document.querySelector("#container-res").scrollIntoView({ behavior: 'smooth' });

    const backboneSelect = document.getElementById('backbone');
    const resCentral = document.getElementById('res-central');

    if (backboneSelect.value === '1') {
        resCentral.style.display = 'none'; 
    } else {
        resCentral.style.display = 'block'; 
    }
}
