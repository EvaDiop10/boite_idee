let API_URL = "https://bmpiqremuvqolvmpvpfz.supabase.co/rest/v1/boite"
let API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA0MzE4OCwiZXhwIjoxOTU0NjE5MTg4fQ.fmJNY-6CG7UhTDb_ImLRI96RGSEc46oJ43bbYAjVOoE'


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

const creerCarte = (idee) => { 

    const boutonValide ="btn_valide-"+idee.id
    console.log(boutonValide)
    const boutonRefuse ="btn_refuser-"+idee.id
        
    elements.insertAdjacentHTML(
        "afterbegin", 
        
        `   <div class ="d-flex justify-content-between p-4">
            <div class="card-body border border-primary shadow">
                <h5 class="card-title">${idee.titre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Approuvé/Rejeté</h6>
                <p class="card-text">${idee.suggestion}</p>
            <div class="d-flex justify-content-around">
                <i class="bi bi-check-circle btn "
                id=${boutonValide}
                style="color: green ;font-size: 2rem;"></i>                 
                <i class="bi bi-x-circle btn"
                id=${boutonValide}
                style="color: #CE0033;font-size: 2rem;"></i>   
            </div>
            </div>
        </div>

        

`        
    )
}
// PARCOURIR LE TABLEAU DES IDEES
    liste_idee.forEach( (idee) => {
    creerCarte(idee)

})
// Recuperation des info du formulaire
var valider = document.querySelector(".validation")

valider.addEventListener ('click', (e) => {
    const inputtitre = document.querySelector(".titre").value
    const inputsuggestion = document.querySelector(".suggestion").value
    

    const newidee = {
        suggestion: inputsuggestion,
        titre: inputtitre,
        statue: false
    }

    liste_idee.push(newidee)
    creerCarte(newidee)

    fetch(API_URL, {
        method: "POST",
        headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newidee),
    })

})
//  // on vide les champs
// document.querySelector(".form").reset()
//  //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
// creerCarte(nouvelleIdee)

// // AFFICHAGE DE LA DES IDEES

// window.addEventListener("DOMContentLoaded", (event) => {
//     //RECUPERATION DES DONNEES VIA API
//     fetch(API_URL, {
//     method: "GET",
//     headers: {
//         apikey: API_KEY,
//     },
//     }) .then((response) => response.json())
//     .then((idees) => {
//     idees.forEach((idee) => {
//         creerUneCarte(idee)
//     })
//     })
// })





