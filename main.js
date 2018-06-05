// Challenge & Advanced Challenge in 1 Function

const parentArticle = document.querySelector("#my-stuff");
const divContainer = document.createElement("div");
const fragment = document.createDocumentFragment();

// Block of code that excecutes for each category if/else statement

const displayCategory = x => {
    const dataTable = HomeInventoryDB[x];
    dataTable.forEach(item => {
        const secEl = document.createElement("section");
        secEl.setAttribute("class", "all-sections");
        for (let key in item) {
            const pEl = document.createElement("p");
            pEl.innerHTML = `${key}: ${item[key]}`;
            secEl.appendChild(pEl);
        }
        fragment.appendChild(secEl);
    })
}

// Block of code that excecutes if all other arguments do not match

const displayAllCategories = () => {
    for (let table in HomeInventoryDB) {
        const invTable = HomeInventoryDB[table];
        invTable.forEach(item => {
            const secEl = document.createElement("section");
            secEl.setAttribute("class", "all-sections");
            for (let key in item) {
                const pEl = document.createElement("p");
                pEl.innerHTML = `${key}: ${item[key]}`;
                secEl.appendChild(pEl);
            }
            fragment.appendChild(secEl);
        })
        parentArticle.appendChild(fragment);
    }
}

// Function is execture; above function blocks are added to below function

const displayText = category => {
    if (category === "furniture") {
        displayCategory("furniture");
    } else if (category === "electronics") {
        displayCategory("electronics");
    } else if (category === "crafts") {
        displayCategory("crafts");
    } else {
        displayAllCategories();
    }
    parentArticle.appendChild(fragment);
}

displayText("electronics");