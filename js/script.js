
var url = "https://gym-workout-tcc.herokuapp.com/api/gate";

async function gateOnline(path, body) {

    let uri = url + path;

    return axios({
        method: 'post',
        url: uri,
        data: body
    })
}

function getInGym() {
    let respGate = document.querySelector("#feed-back-gate span");
    let input = document.getElementById("register");
    
    let value = input.value;
    input.value = "";
    let path = "/in";

    gateOnline(path, { registerClient: value })
        .then((response) => {
            respGate.innerHTML = "Liberado.";
        }, (error) => {
            let err = error.response.status;
            if (err == 404) {
                respGate.innerHTML = "Vc já foi Liberado.";
            } else {
                respGate.style.color = "red";
                respGate.innerHTML = "Registro inválido.";
            }
        });

    setTimeout(() => {
        respGate.innerHTML = "";
    }, 3000);
}

function getOutGym() {
    let respGate = document.querySelector("#feed-back-gate span");
    let input = document.getElementById("register");
    let value = input.value;
    input.value = "";
    let path = "/out";

    gateOnline(path, { registerClient: value })
    .then((response) => {
        respGate.innerHTML = "Liberado.";
    }, (error) => {
        let err = error.response.status;
        if (err == 404) {
            respGate.innerHTML = "Vc já foi Liberado.";
        } else {
            respGate.style.color = "red";
            respGate.innerHTML = "Registro inválido.";
        }
    });

    setTimeout(() => {
        respGate.innerHTML = "";
    }, 3000);
}