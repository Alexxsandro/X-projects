fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
        let teste = JSON.stringify(data)
        let localstorage = localStorage.setItem("ipCliente", teste);
    })

function dataAtualiza() {
    let dataHoje = new Date();
    let hora = dataHoje.getHours()
    let minuto = dataHoje.getMinutes();
    let dia = dataHoje.getUTCDay();
    let mes = dataHoje.getUTCMonth() + 1;
    let ano = dataHoje.getFullYear()
    let concat = `Data ${hora}h${minuto}min - ${dia}/${mes}/${ano}`

    let dataAtualizada = document.querySelector(".dataAtualizada").innerHTML = concat;
}

dataAtualiza();


const adcNomePerfil = () => {
    let dba_Cliente = localStorage.getItem("dbaCliente")
    let buscaDados = localStorage.getItem("cadastro")

    let converteDba = JSON.parse(dba_Cliente);
    let converteCds = JSON.parse(buscaDados);

    for (let validaCdastro of converteCds) {
        for (let validaNome of converteDba) {
            if (validaCdastro.email === validaNome.email) {
                let nomePerfil = document.getElementById("nomePerfil")
                nomePerfil.innerHTML = validaCdastro.nome;

                let atulizandoNomeConfig = document.getElementById('atulizandoNomeConfig');
                atulizandoNomeConfig.innerHTML = `<strong>Nome: </strong> ${validaCdastro.nome}`

                let atualizandoEmailConfig = document.getElementById('atualizandoEmailConfig');
                atualizandoEmailConfig.innerHTML = `<strong>E-mail: </strong> ${validaCdastro.email}`

                let atualizandoSenhaConfig = document.getElementById('atualizandoSenhaConfig');
                atualizandoSenhaConfig.innerHTML = `<strong>Senha: </strong> ${validaCdastro.senha}`

            }
        }
    }
}
adcNomePerfil();

let novo = localStorage.getItem("ipCliente");
novo = JSON.parse(novo);


document.querySelector("#teste").innerHTML = `<strong>Meu ip é :</strong> ${novo.ip}`

let btn_localiza_ = document.getElementById("btn_localiza_");
btn_localiza_.addEventListener("click", function () {

    fetch(`http://ip-api.com/json/${novo.ip}`)
        .then((response) => response.json())
        .then((data) => {
            let converteString = JSON.stringify(data)

            let setLocalStorage = localStorage.setItem("localizaCliente", converteString);

            let getLocalStorage = localStorage.getItem("localizaCliente");
            let converteObjt = JSON.parse(getLocalStorage);


            let pega = document.querySelector(".modal_container");
            pega.innerHTML =
                `<p><span>Cidade: </span>${converteObjt.city}</p></br>
       <p><span>Estado: </span>${converteObjt.regionName}</p></br>
       <p><span>País: </span>${converteObjt.country}</p></br>
       <p><span>Codigo do país: </span>${converteObjt.countryCode}</p></br>
       <p><span>Org: </span>${converteObjt.org}</p></br>
       <p><span>Ip: </span>${converteObjt.query}</p></br>
      `;

            document.querySelector(".modal_show").style.opacity = "1";

        })
})

function btn_volta_ip() {
    document.querySelector(".modal_show").style.opacity = "0";
}


const buscandoIpUsers = () => {
    let teste = document.querySelector(".geradorSenha");
    teste.style.display = "none";

    let novo = document.querySelector(".buscaIp");
    novo.style.display = "block"

    let teste1 = document.querySelector(".encurtadorLink");
    teste1.style.display = "none";
}

const dnv_meuIp = () => {
    let teste = document.querySelector(".geradorSenha");
    teste.style.display = "none";

    let novo = document.querySelector(".buscaIp");
    novo.style.display = "none"

    let teste1 = document.querySelector(".encurtadorLink");
    teste1.style.display = "none";
}

const dnv_encurto = () => {
    let teste = document.querySelector(".geradorSenha");
    teste.style.display = "none";

    let novo = document.querySelector(".buscaIp");
    novo.style.display = "none"

    let novoTeste = document.querySelector(".encurtadorLink");
    novoTeste.style.display = "block";
}

const retornoBuscaIp = () => {
    let buscandoIpNovo = document.getElementById("BuscandoIpNovo").value


    if (buscandoIpNovo !== '') {
        const url = `http://ip-api.com/json/${buscandoIpNovo}`
        fetch(url)
            .then((resp) => (resp.json()))
            .then((data) => {
                let pega = document.querySelector(".modal_container");
                pega.innerHTML =
                    `<p><span>Cidade: </span>${data.city}</p></br>
                 <p><span>Estado: </span>${data.regionName}</p></br>
                 <p><span>País: </span>${data.country}</p></br>
                 <p><span>Codigo do país: </span>${data.countryCode}</p></br>
                 <p><span>Org: </span>${data.org}</p></br>
                 <p><span>Ip: </span>${data.query}</p></br>
                 `;

                document.querySelector(".modal_show").style.opacity = "1";

            })
    }
}

const senhaCriadas = [];

const gerandoSenha = () => {

    let teste = document.querySelector(".geradorSenha");
    teste.style.display = "block";

    let teste1 = document.querySelector(".encurtadorLink");
    teste1.style.display = "none";
}
const gerandoNovo = () => {

    let recebeCaractere = document.getElementById("numeroCaractere").value
    let novo;
    switch (recebeCaractere) {
        case '1':
            novo = Math.random().toString(36).substring(12).replace('.', '')
            console.log(novo)
            break;
        case '2':
            novo = Math.random().toString(36).substring(11).replace('.', '')
            break;
        case '3':
            novo = Math.random().toString(36).substring(10).replace('.', '')
            break;
        case '4':
            novo = Math.random().toString(36).substring(9).replace('.', '')
            break;
        case '5':
            novo = Math.random().toString(36).substring(8).replace('.', '')
            break;
        case '6':
            novo = Math.random().toString(36).substring(7).replace('.', '')
            break;
        case "7":
            novo = Math.random().toString(36).substring(6).replace('.', '')
            break;
        case '8':
            novo = Math.random().toString(36).substring(5).replace('.', '')
            break;
        case '9':
            novo = Math.random().toString(36).substring(4).replace('.', '')
            break;
        case '10':
            novo = Math.random().toString(36).substring(3).replace('.', '')
            break;
    }



    senhaCriadas.push(novo);


    for (let i = 0; i < senhaCriadas.length; i++) {
        let pega = document.querySelector(".modal_container");
        pega.innerHTML = `<p id="senhaGeradaEstilo"><span>Senha: </span>"${senhaCriadas[i]}"</p></br>
        <button id="copia_senha" onclick="copiaSenha()"></button>`

        document.querySelector(".modal_show").style.opacity = "1";

    }

}

function encurtadorUrl() {

    let urlEnd = document.getElementById('encurtador_link').value;

    $.getJSON("https://is.gd/create.php?callback=?", {
        url: urlEnd,
        format: 'json'
    }).done(function (data) {
        console.log(data)
        let novo = data.shorturl;

        let pega = document.querySelector(".modal_container");
        pega.innerHTML = `<p id="senhaGeradaEstilo"><span>Senha: </span>"${novo}"</p></br>
        <button id="copia_senha" onclick="copiaSenha()"></button>`

        document.querySelector(".modal_show").style.opacity = "1";

        if (novolink !== undefined) {
            console.log("Erro")
        }

    })

    let urlEnd1 = document.getElementById('encurtador_link').value = '';
}


let sairConta = document.getElementById('sairConta');
sairConta.addEventListener("click", function () {
    window.location.href = "../login.html";
})

let configuraPerfil = document.getElementById('configura_informacao');
configura_informacao.addEventListener("mouseenter", function () {


    setTimeout(function () {
        let abrindoConfiura = document.querySelector(".container_config_perfil");
        abrindoConfiura.style.display = 'block';
    }, 200)

})

let altera_input_email = document.querySelector(".altera_input_email");
altera_input_email.addEventListener("click", function () {


    altera_input_email.style.opacity = "1"

})
let altera_input = document.querySelector(".altera_input");
altera_input.addEventListener("click", function () {

    altera_input.style.opacity = "1"

})
let altera_input_senha = document.querySelector(".altera_input_senha");
altera_input_senha.addEventListener("click", function () {

    altera_input_senha.style.opacity = "1"

})

const novoArray = [];
const alteradadosConfig = () => {

    let configuracaoNome = document.getElementById('configuracaoNome_').value;
    let configuracaoEmail_ = document.getElementById('configuracaoEmail_').value;
    let configuracaoSenha_ = document.getElementById('configuracaoSenha_').value;

    if (configuracaoNome !== '') {
        let getLocalStorage = localStorage.getItem("cadastro");

        let converteObjt = JSON.parse(getLocalStorage);

        let dbaLocalStorage = localStorage.getItem("dbaCliente");

        let dbaconverteObjt = JSON.parse(getLocalStorage);

        for (let dbaEmail of dbaconverteObjt)
            dbaEmail.nome = configuracaoNome;

        let dbaConverteString = JSON.stringify(dbaconverteObjt)

        let dbaSetLocalStorage = localStorage.setItem("dbaCliente", dbaConverteString)

        for (let name of converteObjt) {
            name.nome = configuracaoNome;

        }

        let converteString = JSON.stringify(converteObjt)

        let setLocalStorage = localStorage.setItem("cadastro", converteString)

        adcNomePerfil()

    } else if (configuracaoEmail_ !== '') {

        let dbaLocalStorage = localStorage.getItem("dbaCliente");

        let dbaconverteObjt = JSON.parse(dbaLocalStorage);

        for (let dbaEmail of dbaconverteObjt) {
            dbaEmail.email = configuracaoEmail_;

            let dbaConverteString = JSON.stringify(dbaconverteObjt)

            let dbaSetLocalStorage = localStorage.setItem("dbaCliente", dbaConverteString)

        }
        let getLocalStorage = localStorage.getItem("cadastro");

        let converteObjt = JSON.parse(getLocalStorage);
        console.log(converteObjt)

        for (let retorno of converteObjt) {
            retorno.email = configuracaoEmail_;

            let converteString = JSON.stringify(converteObjt)
            console.log(converteObjt)

            let setLocalStorage = localStorage.setItem("cadastro", converteString)

        }

    } else if (configuracaoSenha_ !== '') {

        let dbaLocalStorage = localStorage.getItem("dbaCliente");

        let dbaconverteObjt = JSON.parse(dbaLocalStorage);

        for (let dbaSenha of dbaconverteObjt) {
            dbaSenha.senha = configuracaoSenha_;

            let dbaConverteString = JSON.stringify(dbaconverteObjt)

            let dbaSetLocalStorage = localStorage.setItem("dbaCliente", dbaConverteString)

        }
        let getLocalStorage = localStorage.getItem("cadastro");

        let converteObjt = JSON.parse(getLocalStorage);


        for (let retorno of converteObjt) {
            retorno.senha = configuracaoSenha_;

            let converteString = JSON.stringify(converteObjt)
            console.log(converteObjt)

            let setLocalStorage = localStorage.setItem("cadastro", converteString)

        }

    }

    let generoMasculino = document.getElementById("generoMasculino").checked;
    let generoFeminino = document.getElementById("generoFeminino").checked

    if (generoMasculino == true) {
        let container = document.querySelector(".container");
        container.style.backgroundColor = "#fff";
    } else if (generoFeminino === true) {
        let container = document.querySelector(".container");
        container.style.backgroundColor = "#0d1117";
    }
    adcNomePerfil()

}

let linkImagemCarangueijo = document.getElementById("linkImagemCarangueijo");
linkImagemCarangueijo.addEventListener("mouseenter", function () {

    let fotoPerfil = document.getElementById("fotoPerfil");
    fotoPerfil.src = '../img/icons8-caranguejo-48.png'
})

let linkImagemGato = document.getElementById("linkImagemGato");
linkImagemGato.addEventListener("mouseenter", function () {

    let fotoPerfil = document.getElementById("fotoPerfil");
    fotoPerfil.src = '../img/icons8-gato-48 (1).png'
})

let linkImagemPanda = document.getElementById("linkImagemPanda");
linkImagemPanda.addEventListener("mouseenter", function () {

    let fotoPerfil = document.getElementById("fotoPerfil");
    fotoPerfil.src = '../img/icons8-panda-48.png'
})

let linkImagemTouro = document.getElementById("linkImagemTouro");
linkImagemTouro.addEventListener("mouseenter", function () {

    let fotoPerfil = document.getElementById("fotoPerfil");
    fotoPerfil.src = '../img/icons8-touro-48.png'
})

let btn_volta_config = document.getElementById("btn_volta_config");
btn_volta_config.addEventListener("click")

function btn_fecha_config() {

    let abrindoConfiura = document.querySelector(".container_config_perfil");
    abrindoConfiura.style.display = 'none';

}


