class utente {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  Eta(secondoUtente) {
    if (this.age < secondoUtente.age) {
      return `${secondoUtente.firstName} è più vecchio di ${this.firstName}.`
    } else if (this.age > secondoUtente.age) {
      return `${secondoUtente.firstName} è più giovane di ${this.firstName}.`
    } else {
      return `${secondoUtente.firstName} è della stessa età di ${this.firstName}.`
    }
  }
}

a = new utente('Antonio', 'Gantolea', 22, 'Rozzano');
b = new utente('Luigi', 'Carugati', 21, 'Assago');
c = new utente('Giuseppe', 'Boscolo', 24, 'Venezia');
d = new utente('Giacomo', 'Moro', 22, 'Rozzano')
console.log(a.Eta(b));
console.log(b.Eta(c));
console.log(c.Eta(a));
console.log(d.Eta(a));


let nomeAnimale = document.getElementById('petName')
let nomeProp = document.getElementById('ownerName')
let specie = document.getElementById('species')
let razza = document.getElementById('breed')
let lista = document.getElementById('petList')
let bottone = document.getElementById('agg')

let pets = []

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const renderList = function () {
  petList.innerHTML = ''
  pets.forEach((pet) => {
    const item = document.createElement('li')
    item.innerText =
      'Nome animale: ' + pet.petName + ', proprietario: ' + pet.ownerName
    petList.appendChild(item)
  })
}

bottone.onclick = function () {
  let newPet = new Pet(
    nomeAnimale.value,
    nomeProp.value,
    specie.value,
    razza.value
  )
  pets.push(newPet)
  renderList()
  nomeAnimale.value = '';
  nomeProp.value = '';
  specie.value = '';
  razza.value = '';
}

console.log(pets)
