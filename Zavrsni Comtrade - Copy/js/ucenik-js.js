function d(id) {
    return document.getElementById(id);
}
LS.init('ulogovan');
LS.init('korisnici');
LS.init('studenti');
jelUlogovan();




function jelUlogovan() {
    var email = LS.get('ulogovan').email;


    d("imeUlogovanogKorisnika").innerHTML = email;
    if (email) {
        prikaziDiv("ulogovan");
    } else {
        prikaziDiv("login-form");
    }
}
d("logout").addEventListener("click", function (event) {
    event.preventDefault();
    prikaziDiv("login-form");
    LS.remove("ulogovan")
});
d("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var id = d("ucenikLoginRedniBroj").value;
    var smer = d("ucenikLoginSmer").value;
    var godinaUpisa = d("ucenikLoginGodinaUpisa").value;
    var brojIndexa = smer + id + godinaUpisa;
    var pass = d('sifra-login').value;
    var korisnik = LS.getElement('studenti', brojIndexa);
    if (korisnik) {
        if (korisnik.sifra === pass) {
            prikaziDiv("ulogovan");
            LS.set("ulogovan", korisnik);
            jelUlogovan();
        } else {
            alert("Pogrešna šifra!");
        }
    } else {
        alert("Uneti korisnik ne postoji");
    }
    document.getElementById("login-form").reset();
});
function prikaziDiv(id) {
    var ids = [
        "login-form",
        "ulogovan"
    ];
    // prikazuje div sa ovim id-em ostale divove sklanja
    for (var i = 0; i < ids.length; i++) {
        if (id != ids[i]) {
            d(ids[i]).style.display = "none";
        }
    }
    d(id).style.display = "block";
}

