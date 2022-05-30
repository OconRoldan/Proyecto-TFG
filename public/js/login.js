async function doLogin() {
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if (usuario == "") {
        alert("FALTA EL USUARIO");
    } else if (password == "") {
        alert("FALTA LA CONTASEÑA");
    } else { 
    await fetch('http://localhost:4000/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  
            usuario : usuario,
            password : password
        })
        
    })
        .then(response => response.text())
        .then(json => {
            var resultado = JSON.parse(json)
            console.log(resultado);
            switch(resultado.STATUS) {
                case "ERR":
                    alert("SE HA PRODUCIDO UN ERROR");
                    break;
                case "NE":
                    alert("EL USUARIO NO EXISTE");
                    break;
                case "NO":
                    alert("CONTRASEÑA INCORRECTA");
                    break;
                case "ADMIN":
                    window.location = resultado.LINK;
                    break;
                case "OK":
                    window.location = resultado.LINK;
                    break;
                default:
                    alert("SE HA PRODUCIDO UN ERROR");
              } 
        })
    }

}

window.onload = function () {
    document.oncontextmenu = function () { return false }
};     
