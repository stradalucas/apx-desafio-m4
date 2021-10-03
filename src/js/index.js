function addWelcomeData(params = {}) {
    document.querySelector(".section-welcome__title").textContent = params.title;

    document.querySelector(".subtitle").textContent = params.subtitle;
}

function getWelcomeData() {
    fetch(
            "https://cdn.contentful.com/spaces/utq7pv6oscdx/environments/master/entries?access_token=KxL_QRMwk-6F8vwqx4ohBA-pIPHv7eOjBxQ4lLIcgWE&content_type=welcome"
        )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const item = json.items["0"].fields;
            const params = {
                title: item.title,
                subtitle: item.subtitle,
            };
            addWelcomeData(params);
        });
}

function addAboutMeData(params = {}) {
    document.querySelector(".section-about-me__title").textContent = params.title;

    document.querySelector(".section-about-me__paragraph").textContent = params.description;

    document.querySelector(".section-about-me__image").src = params.image;
}

function getAboutMeData() {
    fetch(
            "https://cdn.contentful.com/spaces/utq7pv6oscdx/environments/master/entries?access_token=KxL_QRMwk-6F8vwqx4ohBA-pIPHv7eOjBxQ4lLIcgWE&content_type=aboutMe"
        )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const item = json.items["0"].fields;

            const imgURL = json.includes.Asset["0"].fields.file.url;

            const params = {
                title: item.title,
                description: item.description,
                image: imgURL,
            };

            addAboutMeData(params);
        });
}

function addServiceCard(params = {}) {
    const templateEl = document.querySelector("#section-services__template");
    const containerCards = document.querySelector(".section-services__container");

    templateEl.content.querySelector(
        ".section-services__card-title"
    ).textContent = params.title;

    templateEl.content.querySelector(
        ".section-services__card-description"
    ).textContent = params.description;

    templateEl.content.querySelector(".section-services__card-image").src =
        params.image;

    const clone = document.importNode(templateEl.content, true);
    containerCards.appendChild(clone);
}

function getServiceData() {
    return fetch(
            "https://cdn.contentful.com/spaces/utq7pv6oscdx/environments/master/entries?access_token=KxL_QRMwk-6F8vwqx4ohBA-pIPHv7eOjBxQ4lLIcgWE&content_type=services"
        )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const fieldsColl = json.items.map((item) => {
                return {
                    title: item.fields.title,
                    description: item.fields.description,
                    imageID: item.fields.image.sys.id,
                    includes: json.includes.Asset,
                };
            });
            // console.log(fieldsColl);

            //Agregar la URL a fieldCollection
            fieldsColl.forEach((item) => {
                // console.log((item.imageID));
                // console.log((item.includes));
                const id = searchImage(item.imageID, item.includes);

                item.image = "https:" + id.fields.file.url;
                // console.log(id.fields.file.url);
                // console.log(item.image);
            });

            return fieldsColl;
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

    getWelcomeData();

    getAboutMeData();

    getServiceData().then((cards) => {
        cards.forEach(card => {
            addServiceCard(card);
        });
    });

    contactComponent(document.querySelector(".section-contact"));

    footerComponent(document.querySelector(".section-footer"));
}

main();