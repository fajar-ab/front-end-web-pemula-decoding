// const button = document.getElementsByName("ok");
// console.log(button);

// membuat element baru
// const paragraf = document.createElement("p");
// paragraf.textContent = "hello world";

const gambar = document.getElementById("gambar");

gambar.width = "300";
gambar.height = 200;

const button = document.querySelectorAll(".button");
const playButton = button[3];
const playButtonElement = playButton.children[0];

playButtonElement.setAttribute("type", "submit");
playButtonElement.setAttribute("disabled", true);

const links = document.getElementById("links");
// console.log(links.innerText);

const decoding = document.getElementById("dicodingLink");
decoding.innerText = "Belajar Coding di Decoding";

const google = document.getElementById("googleLink");
google.innerHTML = "<i>Mencari sesuatu di Google</i>";

const buttons = document.getElementsByClassName("button");
for (const btn of buttons) {
  btn.children[0].style.borderRadius = "50px";
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

const newList = document.createElement("li");
newList.innerText = "Selamat menikmati";

const daftar = document.getElementById("daftar");
daftar.appendChild(newList);

const elementAwal = document.createElement("li");
elementAwal.innerHTML = "Hidupkan kompor";

const itemAwal = document.getElementById("awal");

daftar.insertBefore(elementAwal, itemAwal);
