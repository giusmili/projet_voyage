document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");
    //objet date
    let vote = document.querySelector(".vote");
    let btn = document.querySelector("figure figcaption img");
    let compt = 0;

    let time = {
        copy_date: new Date(),
        el: document.querySelector("footer p")
    };
    time.el.innerText += ` ${time.copy_date.getFullYear()}`;
    console.log(time.copy_date.getFullYear());

    //For like
    vote.innerText = compt;

    sessionStorage.setItem("rating", compt);

    btn.addEventListener("click", () => {
        vote.innerText = compt += 1;
        localStorage.setItem("Vote", compt);
        //pour recupérer implémenter localStorage.getItem("vote")
        //pour supprimer localStorage.removeItem('vote');
        //effacer les éléments localStorage.clear();
    });
});