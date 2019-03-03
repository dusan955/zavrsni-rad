function d(id) {
    return document.getElementById(id);
}
LS.init('ulogovan');
LS.init('korisnici');
jelUlogovan();

function jelUlogovan() {
    
    var email = LS.get('ulogovan')[0];
    var logged = typeof email === "object";

   
    if (logged) {
        prikaziDiv("ulogovan");
    } else {
        prikaziDiv("login-form");
    }
}

d("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var korisnik = {
        email: d('email').value,
        ime: d('ime').value,
        prezime: d('prezime').value,
        sifra: d('sifra').value,
        odgovor: d('odgovor').value

    };
    if (d('sifra').value === d('sifra-validacija').value) {
        console.log('korisnik', korisnik);
        LS.setElement('korisnici', korisnik.email, korisnik);
        LS.set("ulogovan", korisnik);
        jelUlogovan();
    } else {
        alert("Šifra i potvrda moraju biti isti");
    }
});

d("logout").addEventListener("click", function (event) {
    event.preventDefault();
    prikaziDiv("login-form");
    LS.remove("ulogovan")
});


d("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = d('email-login').value;
    var pass = d('sifra-login').value;
    var profesori=LS.get('profesori');
    var kljucevi=Object.keys(profesori);

    for(var i=0;i < kljucevi.length;i++){
        if(profesori[kljucevi[i]][0].email === email){
            var proveraEmail=true;
            var broj=i;
        }
    }
    for(var i=0;i < kljucevi.length;i++){
        if(profesori[kljucevi[i]][4].sifra === pass){
            var proveraSifre=true;  
            break;
        }
    }
    var koJeUlogovan=profesori[kljucevi[broj]];
    if (proveraEmail) {
        if (proveraSifre) {
            prikaziDiv("ulogovan");
            LS.set("ulogovan", koJeUlogovan);
            jelUlogovan();
        } else {
            alert("Pogrešna šifra!");
        }
    } else {
        // console.log('getELement',LS.getElement('korisnici',email),email);
        alert("Uneti korisnik ne postoji");
    }
    d("imeUlogovanogKorisnika").innerHTML = email;
    document.getElementById("login-form").reset();
});

d("link-register")
    .addEventListener("click", function (event) {
        event.preventDefault();
        prikaziDiv("register-form");
    });

d("link-reminder").addEventListener("click", function (event) {
    event.preventDefault();
    prikaziDiv("reminder-form");
});

function prikaziDiv(id) {
    var ids = [
        "login-form",
        "register-form",
        "reminder-form",
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

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  