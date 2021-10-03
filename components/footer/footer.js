function footerComponent(el) {
    const footerEl = document.createElement("div");

    footerEl.innerHTML = `
    <footer class="footer">
    <div class="footer__container">
        <div class="footer__logo-container">
            <a href="./index.html">
                <span class="footer__logo-link">Lucas</span>
                <!-- <img src="./images/logo.png" alt="Logo" class="footer__logo" /> -->
                <!-- <img src="./images/logo.png" alt="Logo" class="footer__logo" /> -->
            </a>
        </div>

        <nav class="footer__contact-social-media">
            <div class="footer__social-media-container">
                <a href="#" class="footer__social-media-link">
                    <span class="footer__social-media-name">Instagram</span>
                    <img class="footer__social-media-logo" src="./images/instagram.svg" alt="" />
                </a>
            </div>

            <div class="footer__social-media-container">
                <a href="https://www.linkedin.com/in/StradaLucas/" target="_blank" class="footer__social-media-link">
                    <span class="footer__social-media-name">Linkedin</span>
                    <img class="footer__social-media-logo" src="./images/linkedin.png" alt="" />
                </a>
            </div>

            <div class="footer__social-media-container">
                <a href="https://github.com/stradalucas/" target="_blank" class="footer__social-media-link">
                    <span class="footer__social-media-name">GitHub</span>
                    <img class="footer__social-media-logo" src="./images/github.png" alt="" />
                </a>
            </div>
        </nav>
    </div>
</footer>
`;

    el.appendChild(footerEl);
}