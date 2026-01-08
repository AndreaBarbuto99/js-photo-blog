// const myCard = document.querySelectorAll(".my-card");

// const endpoint = "https://lanciweb.github.io/demo/api/pictures/";


// axios.get(endpoint)
// .then (response => {
//     const apiDatas = response.data;
//     myCard.forEach((element, index) => {
//         if(apiDatas[index]) {
//         element.innerHTML += `<img class="col-10" src="${apiDatas[index].url}">`
//         }
//     });

// })

const myCards = document.querySelectorAll(".my-card");

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(endpoint)
.then(response => {
    const apiDatas = response.data;
    
    myCards.forEach((card, index) => {
        if(apiDatas[index]) {
            card.innerHTML = `<img class="col-12 mt-3" src="${apiDatas[index].url}">
                              <figcaption class="text-center">${apiDatas[index].title} ${apiDatas[index].date}`;
        }
    });
});
