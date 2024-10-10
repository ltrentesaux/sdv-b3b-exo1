const dataUrl = 'https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/5b57e9cbb809c6ac531345309cc0a5febb5f141e/restaurants.json'

function getData() {
    return fetch(dataUrl)
        .then( response => response.json() )
        .then( restaurants => restaurants )
        .catch(error => error )
};

// async function getData() {
//     try {
//         const response = await fetch(dataUrl);
//         const restaurants = await response.json();
//         return restaurants;
//     } catch (error) {
//         return error;
//     }

// }

getData().then(
    (restaurants) => {
        const restaurantsContainer = document.getElementById('restaurants');

        const restaurantsLength = restaurants.length;
        for ( let i = 0; i < restaurantsLength; i++ ) {
            const article = document.createElement('article');

            // const restoLink = document.createElement('a');
            // restoLink.setAttribute('href', `/restaurant?id=${i}`);
            // restoLink.innerText = restaurants[i].name;

            // article.append(restoLink);

            article.innerHTML = `
                <a href='/restaurant?id=${i}'>
                    <div>
                        ${restaurants[i].name}
                    </div>
                </a>
            `;

            restaurantsContainer.append(article);
        }

    }
);
