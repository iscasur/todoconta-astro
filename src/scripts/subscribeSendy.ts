import { API_URL_SENDY, API_KEY_SENDY } from "astro:env/client";

const form = document.getElementById("subscribeForm") as HTMLFormElement;
const messageContainer = document.getElementById("message") as HTMLElement;

const listId = form.dataset.listId || "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    api_key: API_KEY_SENDY,
    list: listId,
    email: formData.get("email")?.toString() || "",
    boolean: "true",
  };

  try {
    const response = await fetch(`${API_URL_SENDY}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    if (response.ok) {
      const responseText = await response.text();

      if (responseText === "1") {
        form.textContent = "Te has suscrito con éxito 🎉";
        if (form instanceof HTMLFormElement) {
          form.reset();
        } else {
          console.error("The provided element is not a valid form.");
        }
      } else if (responseText === "Already subscribed.") {
        messageContainer.textContent =
          "Parece que ya te habías suscrito antes 🤔";
      } else {
        messageContainer.textContent = `Error: ${responseText}`;
      }
    }
  } catch (e) {
    console.error("Error subscribing user:", e);
    alert("Ocurrió un error al suscribirte, intenta mas tarde");
  }
});
