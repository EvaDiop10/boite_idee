let liste_idee = 
[
{
    id:1,
    suggestion:"un truc cool",
    statue:true,
    titre:"titre"
},
{
    id:2,
    suggestion:"un truc cool et sympa",
    statue:false,
    titre:"titre"
},
{
    id:3,
    suggestion:"un truc cool et sympa",
    statue:true,
    titre:"titre"
},
{
    id:3,
    suggestion:"un truc cool et sympa",
    statue:false,
    titre:"titre"
}
]
// recuperation des elemnt du DOM
var elements = document.getElementById("proposition")

liste_idee.forEach( (idee) => {

    let divcarte = document.createElement("div")
    divcarte.classList.add("card")
    divcarte.style.width = "18rem"
    divcarte.style.display= "inline-block"

    const divcardbody = document.createElement("div")
    divcardbody.classList.add("card-body")


    var p = document.createElement("p");
    p.classList.add("card-text")

    var h5 = document.createElement("h5")
    h5.classList.add("card-title")

    h5.textContent=idee.titre
    p.textContent=idee.suggestion
    
    divcardbody.appendChild(h5)
    divcardbody.appendChild(p)
    divcarte.appendChild(divcardbody)
    elements.appendChild(divcarte)
    
    


})

// REcuperation des info du formulaire
var valider = document.querySelector(".validation")

valider.addEventListener ('click', (e) => {
    const inputtitre = document.querySelector(".titre").value
    const inputsuggestion = document.querySelector(".suggestion").value

const newidee = {
    id:5,
    suggestion:inputsuggestion,
    titre:inputtitre,
    statue:false
}
liste_idee.push(newidee)
document.querySelector(".form").reset()
let divcarte = document.createElement("div")
divcarte.classList.add("card")
divcarte.style.width = "18rem"
divcarte.style.display= "inline-block"

const divcardbody = document.createElement("div")
divcardbody.classList.add("card-body")


var p = document.createElement("p");
p.classList.add("card-text")

var h5 = document.createElement("h5")
h5.classList.add("card-title")

h5.textContent=newidee.titre
p.textContent=newidee.suggestion

divcardbody.appendChild(h5)
divcardbody.appendChild(p)
divcarte.appendChild(divcardbody)
elements.appendChild(divcarte)

})
