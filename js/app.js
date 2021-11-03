document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");
    //objet date

    //console.log(document.getElementsByClassName("vote").length)


    let time = {
        copy_date: new Date(),
        el: document.querySelector("footer p")
    };
    time.el.innerText += ` ${time.copy_date.getFullYear()}`;
    console.log(time.copy_date.getFullYear());

    let rating = {
        vote: document.getElementsByClassName("vote"),
        btn: document.querySelector("figure figcaption button"),
        compt: 0
    };

    //For like schema
    rating.vote.innerText = rating.compt;
    sessionStorage.setItem("rating", rating.compt);

    rating.btn.addEventListener("click", () => {
        rating.vote[0].innerText = rating.compt += 1;
        rating.compt == 1 ? rating.btn.setAttribute("disabled", "true") : false;
        localStorage.setItem("Vote", rating.compt);
    });

    /*pour recupérer implémenter localStorage.getItem("vote")
    	Pour supprimer localStorage.removeItem('vote');
    	Effacer les éléments localStorage.clear();
       
       phase de structure objet*/
    /*
    root :[
        {
        image: string,
        title: string,
        content: string
       
        }
    ]
      */
    let city = [{
        title: "Paris",
        photo: "./",
        content: "lorem pour ça",
        alt: "paris",
        like: false
    }, {
        title: "NY",
        photo: "https://cdn.getyourguide.com/img/location/533597d7653a9.jpeg/88.jpg",
        content: "lorem pour ça...",
        like: "thumb_up",
        alt: "NY"
    }];
    console.log(city[1].title + '\n' + city[0].title);
    /*for(let i = 0; i < city.length; i++){
        console.log(city[i].title+' '+city[i].photo+' '+city[i].like);
    }*/
    console.table(city);
    /*city.forEach((el, key) => {
        console.log(key+' '+el.title)
    });*/

    /*let ref = document.querySelector("aside")
    let ellist = document.createElement("ul")
    ref.appendChild(ellist)
    let liste = document.querySelector("aside ul")
    
    for(data of city){
        console.log(data.title)
    let liste = document.querySelector("aside ul")
    liste.innerHTML += `<li>${data.title}</li>
                        <li><img src="${data.photo}" alt="${data.alt}"></li>
                        <li>${data.content}</li>
                        `
    }*/
});