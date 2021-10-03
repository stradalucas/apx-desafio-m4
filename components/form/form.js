function contactComponent(el) {
    const contactEl = document.createElement("div");

    contactEl.innerHTML = `
  <form class="form">

        <h2 class="form__title">Escribime</h2>

        <div class="form__container">
            <!--Name-->
            <label class="form__label" for="user-name">NOMBRE</label>
            <input class="form__input" type="text" name="userName" id="user-name" required />
            <!--Email-->
            <label class="form__label" for="email">EMAIL</label>
            <input class="form__input" type="email" name="userEmail" id="email" required />
            <!--Message-->
            <label class="form__label" for="message">MENSAJE</label>
            <textarea class="form__input form__textarea" name="message" id="message"></textarea>
            <!--Button-->
            <div class="form__submit-container">
                <button class="form__submit-button">Enviar</button>
            </div>
        </div>
    </form>
  `;

    const form = contactEl.querySelector(".form");
    const inputs = contactEl.querySelectorAll(".form__input");

    sendData(form, inputs);

    el.appendChild(contactEl);
}

function sendData(formEl, inputs) {
    formEl.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const object = Object.fromEntries(formData.entries());
        // console.log(object);

        const message = `
      Nombre del usuario: ${object.userName} <br>
      Mail: ${object.userEmail} <br>
      Mensaje: ${object.message} <br>
      Gracias por comunicarte con nosotros!
    `;

        fetch("https://apx-api.vercel.app/api/utils/dwf", {
                headers: {
                    "Content-Type": "application/json",
                },

                method: "POST",

                body: JSON.stringify({
                    to: "stradalucas@hotmail.com",

                    message: message,
                }),
            })
            .then(() => {
                alert(
                    `Mensaje enviado. Gracias ${object.userName} por cominucarte!`
                );
                // Reset inputs 
                inputs.forEach((input) => {
                    input.value = "";
                });
            })
            .catch(() => {
                alert(
                    "Error al enviar, revise haber completado los campos correctamente"
                );
            });
    });
}