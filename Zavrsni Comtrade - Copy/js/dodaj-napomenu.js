document.getElementById("dodajNapomenu").addEventListener("submit", function (event) {
    event.preventDefault();
    var redniBroj = document.getElementById("dodajNapomenuRedniBroj").value;
    var smerIzUnosa = document.getElementById("dodajNapomenuSmer").value;
    var godinaUpisa = document.getElementById("dodajNapomenuGodinaUpisa").value;
    var napomena = document.getElementById("dodajNapomenuNapomena").value;
    var brojIndexa = smerIzUnosa + redniBroj + godinaUpisa;

    var studentiIzStorage = LS.getElement("studenti", brojIndexa);
    var provera = typeof studentiIzStorage.brojIndexa === "string";

    if (provera) {

        alert("Napomena je uspešno dodata u evidenciju!")
    } else {
        alert("Napomenu nije moguce dodati!")
    }
    studentiIzStorage.napomena = napomena;
    LS.setElement('studenti', brojIndexa, studentiIzStorage)
    document.getElementById("dodajNapomenu").reset();

}
);
