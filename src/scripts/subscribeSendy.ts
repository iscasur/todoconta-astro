import { SENDY_API_URL, SENDY_API_KEY } from "astro:env/client";

const form = document.getElementById("subscribeForm") as HTMLFormElement;
const messageContainer = document.getElementById("message") as HTMLElement;

const listId = form.dataset.listId || "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    api_key: SENDY_API_KEY,
    list: listId,
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    boolean: "true",
  };

  try {
    const response = await fetch(`${SENDY_API_URL}/subscribe`, {
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
