document.addEventListener("DOMContentLoaded",()=>{
    console.log("Chargé.")

    let solde, retrait, somme, print_out
    solde = 1000
    print_out = document.querySelector("section p")
    retrait = Number(prompt("Faites votre retrait :"))

    if(retrait >= 20 && retrait <= 100){
        confirmer = confirm("Confirmer votre retrait")
        somme = solde - retrait
        if (confirmer){
        print_out.innerHTML = `Votre retrait est de ${retrait}€. <br> Votre nouveau solde est de ${somme}€.`
        }
        else{
        print_out.innerHTML = `Opération annulé.`
        print_out.classList.add("alert_warning")
        }
    }

    else if(!retrait){
    alert("Veuillez saisir un chiffre.")
    document.location.reload()
    }

    else if(retrait == ""){
    alert("Veuillez saisir une somme.")
    document.location.reload()
    }

    else{
    alert("Vous ne pouvez retirer une somme comprise entre 20 et 100 €. Merci de votre compréhension.")
    document.location.reload()
    }

})