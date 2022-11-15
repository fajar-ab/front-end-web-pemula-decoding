function increment() {
  const count = document.getElementById("count");
  count.innerText++;

  if (count.innerText == 5) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";

    const image = document.createElement("img");
    image.src = "https://i.ibb.co/0V49VRZ/catto.jpg";

    const content = document.querySelector(".contents");
    content.appendChild(hiddenMessage);
    content.appendChild(image);
  }
}

function welcome() {
  alert("muncullah halaman HTML!");
  const content = document.querySelector(".contents");
  content.removeAttribute("hidden");
}

window.addEventListener("load", welcome);

document.getElementById("incrementButton").addEventListener("click", increment);
