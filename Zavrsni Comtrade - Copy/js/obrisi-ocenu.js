
function proveraSmeraObrisiOcenu() {
    var idSmera = d("obrisiOcenuSmer").value;
    return idSmera;
}

function proveraPredmetaObrisiOcenu(){   
    var predmet = document.getElementById("obrisiOcenuPredmer");
    if(typeof(predmet)==null){

    }else{
        predmetString = document.getElementById("obrisiOcenuPredmer").value;
        return predmetString;
       
    }
    
}

function selektListaPredmetiObrisiOcenu() {
    var myDiv = document.getElementById("selectListaPredmetObrisiOcenu");
    if (proveraSmeraObrisiOcenu() == "x") {
        myDiv.innerHTML = ""

    } else if (proveraSmeraObrisiOcenu() == "a") {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "obrisiOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmeraObrisiOcenu()].predmeti) {
            var option = document.createElement("option");
            
            option.value = i;
            option.text = i;
            selectList.appendChild(option);
        }
    } else if (proveraSmeraObrisiOcenu() == "b") {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "obrisiOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmeraObrisiOcenu()].predmeti) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);

        }
    } else {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "obrisiOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmeraObrisiOcenu()].predmeti) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);
    }
}}

selektListaPredmetiObrisiOcenu();

document.getElementById("obrisiOcenuSmer").addEventListener("click", selektListaPredmetiObrisiOcenu);
document.querySelector("body").addEventListener("click", proveraSmeraObrisiOcenu);
document.querySelector("body").addEventListener("click", proveraPredmetaObrisiOcenu);

document.getElementById("obrisiOcenu").addEventListener("submit", function (event) {
    event.preventDefault();
    var redniBroj=document.getElementById("obrisiOcenuRedniBroj").value;
    var smerIzUnosa=document.getElementById("obrisiOcenuSmer").value;
    var godinaUpisa=document.getElementById("obrisiOcenuGodinaUpisa").value;
    var predmet = proveraPredmetaObrisiOcenu();
    var brojIndexa=smerIzUnosa + redniBroj + godinaUpisa;
    
    

    var studentiIzStorage = LS.getElement("studenti", brojIndexa);
    var provera=typeof studentiIzStorage.brojIndexa === "string";
    
    if(provera){
        alert("Ocena je uspešno obrisana iz evidencije!")
    }else{
        alert("Nemoguce je obrisati ocenu!")
    }
    studentiIzStorage.predmeti[predmet]=0;
    LS.setElement('studenti', brojIndexa, studentiIzStorage)
   
    document.getElementById("obrisiOcenu").reset();


}
);







