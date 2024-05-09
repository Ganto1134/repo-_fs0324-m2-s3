fetch('https://striveschool-api.herokuapp.com/books')
.then(response =>{
    if(response.ok){return response.json()}
    else{throw new Error('Errore generico');}
})
.then((movies) =>{
    console.log(movies);
    movies.forEach((movie) => {
        let col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('col-md-4');
        col.classList.add('col-lg-3');
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('m-1');
        let imgMovie = document.createElement('img');
        imgMovie.classList.add('img-fluid');
        imgMovie.src = movie.img;
        let bodyCard = document.createElement('div');
        bodyCard.classList.add('card-body');
        let titleCard = document.createElement('h5');
        titleCard.classList.add('card-title');
        titleCard.innerHTML = movie.title;
        let priceCard = document.createElement('p');
        priceCard.classList.add('card-text');
        priceCard.innerHTML = movie.price + '$';
        buttonCard = document.createElement('a');
        buttonCard.classList.add('btn');
        buttonCard.classList.add('btn-danger');
        buttonCard.classList.add('me-3');
        buttonCard.innerHTML = 'Scarta'
        buttonCard.addEventListener('click', () => {
            col.remove();});
        let riga = document.getElementById('row');
        riga.appendChild(col);
        col.appendChild(card);
        card.appendChild(imgMovie);
        card.appendChild(bodyCard);
        bodyCard.appendChild(titleCard)
        bodyCard.appendChild(priceCard);
        bodyCard.appendChild(buttonCard);
        
        let shopBtn = document.createElement('a');
        shopBtn.classList.add('btn');
        shopBtn.classList.add('btn-success');
        shopBtn.classList.add('btn-add')
        shopBtn.innerHTML = 'Compra ora'
        bodyCard.appendChild(shopBtn);
        shopBtn.addEventListener('click', () => {
            let kart = sessionStorage.getItem("MOVIES") || "[]";
            kart = JSON.parse(kart)
            kart.push(movie.title);
            kart = JSON.stringify(kart);
            sessionStorage.setItem("MOVIES", kart);
        })
        })

        const addKart = () =>{
            let kart = sessionStorage.getItem("MOVIES") || "[]";
            kart = JSON.parse(kart);
            kart.forEach((el) => {
                let newLi = document.createElement('li');
                newLi.innerHTML = el;
                document.getElementById('carrello').append(newLi);
                
                let deleteBtn = document.createElement('a');
                deleteBtn.classList.add('btn');
                deleteBtn.classList.add('btn-danger');
                deleteBtn.innerHTML = 'Delete';
                let elementoSelezionato = kart.indexOf(el);
                console.log(kart);
                
                deleteBtn.addEventListener('click', () => {
                    newLi.remove();
                    // sessionStorage.removeItem("MOVIES");
                    // kart.indexOf(el);
                    let movie = sessionStorage.getItem("MOVIES")
                    let nuovo = JSON.parse(movie); 
                    nuovo.splice(elementoSelezionato, 1);
                    nuovo = JSON.stringify(nuovo);
                    sessionStorage.setItem("MOVIES", nuovo);

                });
                newLi.appendChild(deleteBtn);

            })
            kart = JSON.stringify(kart);
            sessionStorage.setItem("MOVIES", kart);
        }
        
        document.getElementById('carrello-nav').addEventListener('click',()=>{
            let carrello = document.getElementById('carrello');
            carrello.querySelectorAll('li').forEach((el) => {el.remove()});
            addKart()
        } );

})
.catch(err => console.log(err))