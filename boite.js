let API_URL = "https://bmpiqremuvqolvmpvpfz.supabase.co/rest/v1/boite"
let API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA0MzE4OCwiZXhwIjoxOTU0NjE5MTg4fQ.fmJNY-6CG7UhTDb_ImLRI96RGSEc46oJ43bbYAjVOoE'

// RECUPERATION DES ELEMENTS DU DOM
var elements = document.getElementById("proposition")

// FONCTION CREER CARTE
const creerCarte = (idee) => { 
    let URL_PATCH =`https://bmpiqremuvqolvmpvpfz.supabase.co/rest/v1/boite?id=eq.${idee.id}`
    const idboutonValide ="btn_valide-"+idee.id
    const idboutonRefuse ="btn_refuser-"+idee.id
    const idcarteValide = "id_carteValide-"+idee.id
    const idcarteRefuser = "id_carteRefuser-"+idee.id
    const idcardBody = "numeroCard-"+idee.id
    const idTextstatue = "statu_Text-"+ idee.id
    // CREER UNE CARTE DANS LE HTML AVES JS
    elements.insertAdjacentHTML(
    "afterbegin", 
    
    `   <div class ="d-flex justify-content-between mt-5 p-4 rounded-3 shadow-lg "id=${idcardBody}>
        <div class="card-body ">
            <h5 class="card-title fs-3">${idee.titre}</h5>
            <h6 class="card-subtitle mb-2 " id=${idTextstatue} >Approuvé/Rejeté</h6>
            <p class="card-text">${idee.suggestion}</p>
        <div class="d-flex justify-content-around">
            <i class="bi bi-check-circle btn "
            id=${idboutonValide}
            style="color: green ;font-size: 2rem;"></i>                 
            <i class="bi bi-x-circle btn"
            id=${idboutonRefuse}
            style="color: #CE0033;font-size: 2rem;"></i>   
        </div>
        </div>
    </div>        

    `        
    )
    
    // RECUPERATION DES BOUTONS
    let btnR = document.getElementById(idboutonRefuse)
    let btnV = document.getElementById(idboutonValide)
    let textStatu = document.getElementById(idTextstatue)
    // ECOUTER LES BOUTONS APPROUVÉ ET REJETÉ
    btnR.addEventListener('click', ()=>{
        document.getElementById(idcardBody).style.border= "3px solid #CE0033"
        btnR.style.visibility= "hidden"
        textStatu.textContent = "Rejeté"
        textStatu.style.color = "#ce0033"
    
        fetch(URL_PATCH, {
            method: "PATCH",
            headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
            Authorization:`"Bearer" ${API_KEY}`,
            Prefer: "return=representation" 
            },
            body: JSON.stringify({statue:false}),
            })
    })
    
    btnV.addEventListener('click', ()=>{
        document.getElementById(idcardBody).style.border= "3px solid green"
        btnV.style.visibility= "hidden"
        textStatu.textContent = "Approuvé"
        textStatu.style.color = "green"
    
        //MODIFICATION DANS SUPABASE
        fetch(URL_PATCH, {
        method: "PATCH",
        headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        Authorization:`"Bearer" ${API_KEY}`,
        Prefer: "return=representation" 
        },
        body: JSON.stringify({statue:true}),
        })
    })
    // if(statue == true){

    // }
    // else if (statue == false){

    // }
}

// RECUPERATION DES INFORMATIONS DU FORMULAIRE
var valider = document.querySelector(".validation")

// ECOUTER LE BOUTON VALIDER
valider.addEventListener ('click', (e) => {
    // RECUPERATION DES DONNEES SAISI
    const inputtitre = document.querySelector(".titre").value
    const inputsuggestion = document.querySelector(".suggestion").value
    
    // OBJET CONTENANT LES DONNEES SAISI
    const newidee = {
        suggestion: inputsuggestion,
        titre: inputtitre,
        statue: null
    }
    document.querySelector(".form").reset()
    creerCarte(newidee)
    
    // INSERTION DES DONNÉES DANS SUPABASE
    fetch(API_URL, {
        method: "POST",
        headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newidee),
    })
    // ON VIDE LES CHAMPS
    document.querySelector(".form").reset()
})

window.addEventListener("load", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
    method: "GET",
    headers: {
        apikey: API_KEY,
    },
    }).then((response) => response.json())
    .then((idees) => {
        idees.forEach((idee) => {
            creerCarte(idee)
            
        })
    })
})

var btnListeRejete = document.getElementById("listeAccepte")
var btnListeRejete = document.getElementById("listeRefuse")
var btnListe = document.getElementById("listeIdee")



