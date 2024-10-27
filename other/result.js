function atualizaResultado() {
    // Atualizando os valores que já estavam no código

    // backbone 
    document.getElementById("dio").innerText = primario.total.dio;
    document.getElementById("to").innerText = primario.total.to;
    document.getElementById("acoplador").innerText = primario.total.acoplador;
    document.getElementById("especificacao_acoplador").innerText = primario.total.especificacao_acoplador;
    document.getElementById("pares_fibra").innerText = primario.total.pares_fibra;
    document.getElementById("pigtail").innerText = primario.total.pigtail;
    document.getElementById("especificao_pigtail").innerText = primario.total.especificao_pigtail;
    document.getElementById("cordao").innerText = primario.total.cordao;
    document.getElementById("especificacao_cordao").innerText = primario.total.especificacao_cordao;
    document.getElementById("caixa_emenda").innerText = primario.total.caixa_emenda;
    document.getElementById("tubo").innerText = primario.total.tubo;

    document.querySelector(".container-res").scrollIntoView({ behavior: 'smooth' });

    const backboneSelect = document.getElementById('backbone');
    const resCentral = document.getElementById('res-central');

    if (backboneSelect.value === '1') {
        resCentral.style.display = 'none'; 
    } else {
        resCentral.style.display = 'block'; 
    }
}
