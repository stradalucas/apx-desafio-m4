function addPortfolioCard(card) {

    const templateEl = document.querySelector("#section-portfolio__template");

    const containerCards = document.querySelector(".section-portfolio__container");

    templateEl.content.querySelector(".portfolio-card__title").textContent = card.title;

    templateEl.content.querySelector(".portfolio-card__description").textContent = card.description;

    templateEl.content.querySelector(".portfolio-card__image").src = card.image;

    const clone = document.importNode(templateEl.content, true);
    containerCards.appendChild(clone);
}

function getPortfolioData() {
    return fetch(
            "https://cdn.contentful.com/spaces/utq7pv6oscdx/environments/master/entries?access_token=KxL_QRMwk-6F8vwqx4ohBA-pIPHv7eOjBxQ4lLIcgWE&content_type=portfolio"
        )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const fieldsCollection = data.items.map((item) => {
                return {
                    title: item.fields.title,
                    description: item.fields.description,
                    url: item.fields.url,
                    imageID: item.fields.image.sys.id,
                    includes: data.includes.Asset,
                };
            });
            //Agregar la URL a fieldCollection
            fieldsCollection.forEach((item) => {
                const id = searchImage(item.imageID, item.includes);
                item.image = "https:" + id.fields.file.url;
            });

            return fieldsCollection;
        });
}

function searchImage(imageID, includes) {
    const located = includes.find((i) => {
        return i.sys.id == imageID;
    });

    // console.log(located);
    return located;
}

function main() {
    headerComponent(document.querySelector(".section-header"));
    headerMobileInteraction();

    getPortfolioData().then((cards) => {
        cards.forEach(card => {
            addPortfolioCard(card);
        });
    })

    footerComponent(document.querySelector(".section-footer"));
};

main();