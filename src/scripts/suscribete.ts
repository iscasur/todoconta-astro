import { SENDY_API_URL, SENDY_LIST_ID, SENDY_API_KEY } from "astro:env/client";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const email = params.get("email");

if (email) {
  const messageSection = document.querySelector(".message") as HTMLElement;

  const data = {
    api_key: SENDY_API_KEY,
    list: SENDY_LIST_ID,
    name: name || "",
    email: email || "",
    boolean: "true",
  };

  fetch(`${SENDY_API_URL}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data),
  })
    .then((res) => res.text())
    .then((result) => {
      if (result === "1") {
        messageSection.innerHTML = `
          <h1>Te has suscrito con éxito 🎉</h1>
          <p>Revisa tu bandeja de entrada, que te he dejado un regalito</p>
        `;
      } else if (result === "Already subscribed.") {
        messageSection.innerHTML = `
          <h1>Parece que ya te habías suscrito antes 🤔</h1>
        `;
      } else {
        const heading = document.createElement("h2");
        heading.textContent = "Ups, algo salió mal… 🫣";

        const paragraph = document.createElement("p");
        paragraph.textContent =
          "No pudimos completar tu suscripción. Por favor, inténtalo nuevamente.";

        const fragment = document.createDocumentFragment();
        fragment.appendChild(heading);
        fragment.appendChild(paragraph);

        messageSection.insertBefore(fragment, messageSection.firstChild);
      }
    })
    .catch((error) => {
      console.log("Error subscribing ", error);
    });
}
