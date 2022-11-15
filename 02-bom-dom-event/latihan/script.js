const button = document.querySelector("button");

button.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url(https://picsum.photos/400/300/?random&rnd" +
    new Date().getTime() +
    ")";
});
