function habilita(dato){
    document.getElementById("select" + dato).style.display = "block";
    document.getElementById("select" + dato).disabled = false;                
}

function deshabilita(dato){
    document.getElementById("select" + dato).style.display = "none";
    document.getElementById("select" + dato).disabled = true;                
}