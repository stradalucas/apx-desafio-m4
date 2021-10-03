function headerMobileInteraction() {
    const burgerButtonEl = document.querySelector(".burger__button");
    const burgerDropdownEl = document.querySelector(".burger__dropdown");
    const burgercloseButtonEl = document.querySelector(".burger__close-button");

    burgerButtonEl.addEventListener("click", () => {
        burgerDropdownEl.style.display = "grid";
    });

    burgercloseButtonEl.addEventListener("click", () => {
        burgerDropdownEl.style.display = "";
    });

}

function headerComponent(el) {
    const headerEl = document.createElement("div");

    headerEl.innerHTML = `
    <header class="header">
            <div class="header__container">

                <!-- Logo -->
                <a href="./index.html" class="header__logo">Lucas</a>

                <!-- Menu -->
                <nav class="header__nav">
                    <a href="./index.html" class="header__nav-item">Inicio</a>
                    <a href="./portfolio.html" class="header__nav-item">Portfolio</a>
                    <a href="./servicios.html" class="header__nav-item">Servicios</a>
                    <a href="./contacto.html" class="header__nav-item">Contacto</a>
                </nav>

                <!-- Burger-menu -->
                <div class="burger">
                    <img src="./images/burger.svg" alt="Menu" class="burger__button" />

                    <div class="burger__dropdown">
                        <div class="burger__close-button">
                            <img src="./images/close.png" alt="X" class="burger__close-button-image"/>
                        </div>

                        <nav class="burger__nav">
                            <a href="./index.html" class="burger__nav-item">Inicio</a>
                            <a href="./portfolio.html" class="burger__nav-item">Portfolio</a>
                            <a href="./servicios.html" class="burger__nav-item">Servicios</a>
                            <a href="./contacto.html" class="burger__nav-item">Contacto</a>
                        </nav>
                    </div>
                </div>

            </div>
        </header>

  `;

    el.appendChild(headerEl);
}