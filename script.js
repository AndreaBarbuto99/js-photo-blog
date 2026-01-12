const myCards = document.querySelectorAll(".my-card");
const myBody = document.getElementById("my-body");
const myDiv = document.querySelector(".main-div")
const zoomOverlay = document.getElementById("zoom-container");
let cardData = [];
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
.then(response => {
    const apiDatas = response.data;
    
    myCards.forEach((card, i) => {
        if(apiDatas[i]) {
            cardData[i] = apiDatas[i];
            card.innerHTML += `<img class="col-12 mt-3" src="${apiDatas[i].url}">
                              <figcaption class="text-center">${apiDatas[i].title} ${apiDatas[i].date}`;
        }
    });
});

myCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        showZoomCard(index); 
    });
});

function showZoomCard(index) {
    
    document.getElementById("zoom-container").innerHTML = `
        <div class="zoom-overlay">
            <button class="btn btn-light" onclick="closeZoom()">Chiudi</button>
            <img src="${cardData[index].url}" alt="${cardData[index].title}">
        </div>
    `;
}


function closeZoom() {
    zoomOverlay.innerHTML = "";
    myBody.classList.remove("body-black");
}

function addBlack() {
myBody.classList.add("body-black");
}
