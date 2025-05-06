'use strict'

class Item{
    constructor(naziv, cena, opis){
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

    let items = []
    
function createItemRows(){
    let table = document.querySelector("#items-body")
    table.innerHTML = '';

    for(let i=0;i<items.length;i++){

        let tr = document.createElement("tr")

        tr.addEventListener('click', function(){
            displayItemDetails(items[i])
        })

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


function initializeItems() {
    items = [
        new Item("Majica", 1500, "Majica kratkih rukava od pamuka"),
        new Item("Patike", 7500, "Sportske patike za trčanje")];
  
    createItemRows()
    createNewItem()
  }
  
document.addEventListener('DOMContentLoaded', initializeItems)

function displayItemDetails(item){
    let p = document.createElement('p')
    p.innerHTML = `Naziv: ${item.naziv}<br>Cena: ${item.cena}<br>Opis: ${item.opis}`
    let details = document.querySelector('#itemDetails')

    if(details.firstChild){
        details.firstChild.remove()
    }

    details.appendChild(p)
}

function createNewItem(){

    let submitBtn = document.querySelector('#submitBtn')
    submitBtn.addEventListener("click", function(){
        const form = document.querySelector("#new-item-form")
        const formData = new FormData(form)

        const naziv = formData.get('naziv')
        const cena = formData.get('cena')
        const opis = formData.get('opis')

        const newItem = new Item(naziv,cena,opis)
        items.push(newItem)

        createItemRows()
        form.reset()
    })
}