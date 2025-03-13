function calculated() {

    let cfm = document.getElementById("cfm").value;

    let hpd = document.getElementById("hpd").value;
    let dps = document.getElementById("dps").value;
    let htpm = hpd * dps * 4;

    let etc = document.getElementById("etc").value;
    let he = document.getElementById("he").value;
    let cphv = etc / he;

    let ml = document.getElementById("ml").value;
    ml = ml / 100;

    let ti = document.getElementById("ti").value;
    ti = ti / 100;


    let result = ((cfm / htpm) + cphv) * he * (1 + ml) / (1 - ti);

    if (result <= 0) {
        document.getElementById("resulttitle").innerHTML = "Erro";
    } else if(result > 0) {
        document.getElementById("resulttitle").innerHTML = "Uma sugestão de valor a cobrar pelo seu serviço seria + ou - :";
        document.getElementById("result").innerHTML = "R$ " + result.toFixed(2); 
    }
}
