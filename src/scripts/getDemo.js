const handleOnClick = () => {
  const button = document.getElementById("getDemo");
  const title = button.getAttribute("data-title");

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("event", "click", {
    event_category: "Demo",
    event_label: title,
  });

  const element = document.querySelector("#demoWidget");
  element.classList.toggle("hidden");
};

document.getElementById("getDemo").addEventListener("click", handleOnClick);
