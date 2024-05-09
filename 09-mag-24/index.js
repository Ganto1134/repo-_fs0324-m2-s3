let api = 'XJf6cftmhOrEeWqbgKo6TECxmbWIwofPN47NRKUrbNtyt8UL0rszaUPv'
let load = document.getElementById('loadbtn')
let secondary = document.getElementById('secondary')
let cards = document.querySelectorAll('.card')
let imgOld = document.querySelectorAll('.card img')
let titles = document.querySelectorAll('.card-title')
let par = document.querySelectorAll('.card-text')
let pezzi = document.getElementsByClassName('col-md-4')
let body = document.getElementsByClassName('card-body')
let muted = document.querySelectorAll('.text-muted')

// primo load button

load.addEventListener('click', () =>{
    fetch('https://api.pexels.com/v1/search?query=jdm',{
        method: 'Get',
        headers:{
            Authorization: api
        }
})
.then((response) =>
    {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error('Non va e tu devi attaccarti al ca')
        }
})
.then((dati)=>{
    console.log(dati);
    let foto = dati.photos
    foto.shift()
    console.log(foto)
    for (let i=0; i<cards.length; i++){
        let imgOld = document.querySelectorAll('.card img')
        let link = foto[i].src.portrait
        let container = imgOld[i].parentNode
        let newImg = document.createElement('img')
        newImg.classList.add('w-100')
        newImg.classList.add('d-none')
        newImg.src = link
        if(imgOld.length > 0){
            container.replaceChild(newImg, imgOld[i])
        }else{
            let imgOld = document.querySelectorAll('.card img')
            let container = titles[i].parentNode
            container.replaceChild(newImg, imgOld[i])
        }
        titles[i].innerHTML = foto[i].alt
        par[i].innerHTML = 'Photographer: ' + foto[i].photographer
        cards[i].classList.add('h-100')
        pezzi[i].classList.add('mb-5')
        body[i].classList.add('d-flex')
        body[i].classList.add('flex-column')
        body[i].classList.add('justify-content-between')
        muted[i].innerHTML = foto[i].id
    }
    })
    .catch(error => console.log('Non va e mo è pure colpa tua', error))
    }
)

// secondo bottone che va in base alla search bar

document.getElementById('secondary').addEventListener('click', () => {
    const searchValue = document.getElementById('search-input').value.trim();
    const apiUrl = 'https://api.pexels.com/v1/search?query=' + encodeURIComponent(searchValue);
    fetch(apiUrl ,{
        method: 'GET',
        headers:{
            Authorization: api
        }
})
.then((response) =>
    {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error('Non va e tu devi attaccarti al ca')
        }
})
.then((dati)=>{
    console.log(dati);
    let foto = dati.photos
    console.log(foto)
    for (let i=0; i<cards.length; i++){
        let imgOld = document.querySelectorAll('.card img')
        let link = foto[i].src.portrait
        let container = imgOld[i].parentNode
        let newImg = document.createElement('img')
        newImg.classList.add('w-100')
        newImg.classList.add('d-none')
        newImg.src = link
        if(imgOld.length > 0){
            container.replaceChild(newImg, imgOld[i])
        }else{
            let imgOld = document.querySelectorAll('.card img')
            let container = titles[i].parentNode
            container.replaceChild(newImg, imgOld[i])
        }
        titles[i].innerHTML = foto[i].alt
        par[i].innerHTML = 'Photographer: ' + foto[i].photographer
        cards[i].classList.add('h-100')
        pezzi[i].classList.add('mb-5')
        body[i].classList.add('d-flex')
        body[i].classList.add('flex-column')
        body[i].classList.add('justify-content-between')
        muted[i].innerHTML = foto[i].id
    }
    })
    .catch(error => console.log('Non va e mo è pure colpa tua', error))
    }
)

// cambio del bottone edit con funzione di display none alla colonna per non avere spazio bianco

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
      if (button.textContent.trim() === 'Edit') {
        button.classList.add('edit');
      }
    });
    let editBtn = document.getElementsByClassName('edit')
    for(let i = 0; i < cards.length; i++){
        let eraser = editBtn[i]
        eraser.innerHTML ='Hide';
        eraser.addEventListener('click',()=>{
            cards[i].parentNode.classList.add('d-none')
        })
    }
});

// diplay none di base alle immagini e bottone view che le fa vedere o le toglie

document.addEventListener('DOMContentLoaded', function() {
    let immagini = document.getElementsByTagName('img');
    Array.from(immagini).forEach(function(img) {
        img.classList.add('d-none');
    });
    let buttons2 = document.querySelectorAll('button');
    buttons2.forEach(function(button) {
      if (button.textContent.trim() === 'View') {
        button.classList.add('View');
      }
    });
    let viewBtn = document.getElementsByClassName('View')
    for(let i = 0; i < cards.length; i++){
        let view = viewBtn[i]
        
        view.addEventListener('click',()=>{
            immagini[i].classList.toggle('d-none')
        })
    }
});