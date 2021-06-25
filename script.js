"use strict"

 let masyvas = [];

document.getElementById("patvirtinti").addEventListener("click",function(){
    let vardas = document.getElementById("vardas").value;
    let pavarde = document.getElementById("pavarde").value;
    let metai = document.getElementById("metai").value;
    let asmensKodas = document.getElementById("asmensKodas").value;

    let ivestasZmogus = new Zmogus(vardas, pavarde, metai, asmensKodas); // paimtas konstruktorius

   

    masyvas.push(ivestasZmogus) // push iterpimas
    console.log(ivestasZmogus.prisistatyk());

    console.log(masyvas);


    console.log(ivestasZmogus); // infromacija ateis is input laukeliu
}
)

// Konstruktoriaus funkcija is didziosios raides
// Sablonas pagal kuri sukuriamas objektas
function Zmogus(vardas, pavarde, metai, asmensKodas) { // () perduodami kintamieji
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.metai = metai;
    this.asmensKodas = asmensKodas;
    this.prisistatyk = function() { // metodas konstruktoriuje
        return this.vardas + " " + this.pavarde;
    }
    this.pakeisk = function(pakeitasVardas) {
        this.vardas = pakeitasVardas;
    }

}

let zmogus1 = new Zmogus("Vardenis", "Pavardenis", "1800", "21326365") // naudojamas sablonas 

// zmogus1 apibudinmas pridedamas i objekta
zmogus1.apibudinimas = "Aukstas"
// galima rasyti ir zmogus1["apibudinimas"]

//metodas kuris isvestu varda ir pavarde
zmogus1.pilnasVardas = function() {
    return this.vardas + " " + this.pavarde
}

console.log(zmogus1);

console.log(zmogus1.pilnasVardas()); // kvieciant metoda gale turi buti ()

let zmogus2 = new Zmogus('Jonas', 'Jonaitis', '1820', '255852321');
console.log(zmogus2);

zmogus1.pakeisk('Petras');
zmogus2.pakeisk('Jonas Petras');

console.log(zmogus1);
console.log(zmogus2);