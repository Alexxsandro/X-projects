const cadastro = []

const efetuaCadastro = () => {

    const usuarios = {
        email: this.email,
        nome: this.nome,
        senha: this.senha
    }

    usuarios.email = document.getElementById("cd_email_users").value;
    usuarios.nome = document.getElementById("cd_nomeUsers").value;
    usuarios.senha = document.getElementById("cd_password_users").value;

    if (usuarios.email != '' && usuarios.nome != '' && usuarios.senha != '') {
        cadastro.push(usuarios)

        let convertendoString = JSON.stringify(cadastro);

        let local = localStorage.setItem("cadastro", convertendoString)
        window.location.href = "../login.html";
    } else {
        alert("Preencha todos os campos")
    }





}
const nomeDigitado = [];
const login = () => {

    const dba_cliente = {
        email: this.email,
        senha: this.senha
    }


    dba_cliente.email = document.getElementById("email_users").value;
    dba_cliente.senha = document.getElementById("password_users").value;

    if (dba_cliente.email !== '' && dba_cliente !== '') {
        nomeDigitado.push(dba_cliente);
        let cnv_dbaCliente = JSON.stringify(nomeDigitado)
        let enviaLocalStorage = localStorage.setItem("dbaCliente", cnv_dbaCliente);

        let getLocalStorage = localStorage.getItem("cadastro");

        let convertObjt = JSON.parse(getLocalStorage)



        for (let valida of convertObjt) {
            for (let dgt_cliente of nomeDigitado) {
                if (valida.email === dgt_cliente.email && valida.senha === dgt_cliente.senha) {
                    window.location.href = "../index.html";
                }else{
                    
                }
            }
        }
    }


}