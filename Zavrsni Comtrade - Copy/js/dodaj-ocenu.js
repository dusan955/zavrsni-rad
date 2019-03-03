

  function proveraSmera() {
    var idSmera = d("dodajOcenuSmer").value;
    return idSmera;
}

function proveraPredmeta(){   
    var predmet = document.getElementById("dodajOcenuPredmer");
    if(typeof(predmet)==null){

    }else{
        predmetString = document.getElementById("dodajOcenuPredmer").value;
        return predmetString;
       
    }
    
}

function selektListaPredmeti() {
    var myDiv = document.getElementById("selectListaPredmet");
    if (proveraSmera() == "x") {
        myDiv.innerHTML = ""

    } else if (proveraSmera() == "a") {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "dodajOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmera()].predmeti) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);
        }
    } else if (proveraSmera() == "b") {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "dodajOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmera()].predmeti) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);

        }
    } else {
        myDiv.innerHTML = "";
        var selectList = document.createElement("select");
        selectList.id = "dodajOcenuPredmer";
        myDiv.appendChild(selectList);

        for (var i in smer[proveraSmera()].predmeti) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);
    }}
}

selektListaPredmeti();

document.getElementById("dodajOcenuSmer").addEventListener("click", selektListaPredmeti);
document.querySelector("body").addEventListener("click", proveraSmera);
document.querySelector("body").addEventListener("click", proveraPredmeta);




LS.init('studenti');
document.getElementById("dodajStudenta").addEventListener("submit", function (event) {
    event.preventDefault();

    var redniBroj = document.getElementById("dodajStudentaRedniBroj").value;
    var email = document.getElementById("dodajStudentaEmail").value;
    var imePrezime = document.getElementById("dodajStudentaImePrezime").value;
    var sifra = document.getElementById("dodajStudentaSifra").value;
    var godinaUpisa = document.getElementById("dodajStudentaGodinaUpisa").value;
    var smerIzUnosa = document.getElementById("dodajStudentaSmer").value;
    var imeSmera = smer[smerIzUnosa].ime;
    var predmeti = smer[smerIzUnosa].predmeti;
    var brojIndexa = smerIzUnosa+ redniBroj + godinaUpisa;

    var studenti = {
     
        email: email,
        imePrezime: imePrezime,
        sifra: sifra,
        brojIndexa: brojIndexa,
        godinaUpisa: godinaUpisa,
        smer: imeSmera,
        predmeti: predmeti,
        id: redniBroj,
        napomena: "string"
    }
    
    if (LS.getElement('studenti', brojIndexa.email)) {
        alert("Korisnik sa ovim e-mailom vec postoji!")
    } else {
        if (LS.getElement('studenti', brojIndexa)) {
            alert("Korisnik sa ovim brojem indexa vec postoji!")
        } else {
            LS.setElement('studenti', studenti.brojIndexa, studenti)
            alert("Student je uspešno unet u evidenciju!")
        }
    }
    document.getElementById("dodajStudenta").reset();
});



document.getElementById("dodajOcenu").addEventListener("submit", function (event) {
    event.preventDefault();
    var redniBroj=document.getElementById("dodajOcenuRedniBroj").value;
    var smerIzUnosa=document.getElementById("dodajOcenuSmer").value;
    var godinaUpisa=document.getElementById("dodajOcenuGodinaUpisa").value;
    var ocena = document.getElementById("dodajOcenuOcena").value;
    var predmet = proveraPredmeta();
    var brojIndexa=smerIzUnosa + redniBroj + godinaUpisa;
    
    

    var studentiIzStorage = LS.getElement("studenti", brojIndexa);
    var provera=typeof studentiIzStorage.brojIndexa === "string";
    
    if(provera){
        alert("Ocena je uspešno dodata u evidenciju!")
    }else{
        alert("Broj indexa se ne nalazi u sitemu!")
    }
    studentiIzStorage.predmeti[predmet]=ocena;
    LS.setElement('studenti', brojIndexa, studentiIzStorage)
   
    document.getElementById("dodajOcenu").reset();


}
);


