'use strict'

class Item{
    constructor(naziv, cena, opis){
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let items = [
    new Item("Majica", 1500, "Majica kratkih rukava od pamuka"),
    new Item("Patike", 7500, "Sportske patike za trčanje")
];


function createItemRows(){
    let table = document.querySelector("#items-body")

    for(let i=0;i<items.length;i++){

        let tr = document.createElement("tr")

        let rb = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")

        rb.textContent = i + 1
        naziv.textContent = items[i].naziv
        cena.textContent = items[i].cena

        
        tr.appendChild(rb)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        table.appendChild(tr)
        
    }
}