function validar(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "123") {
        window.location.replace("/conversor.html");
    } 
    else {
        alert('Login ou senha incorreta!');
        return;
    }

}

function redirect() {
    window.location.href = "/conversor.html"
}