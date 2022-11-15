const formAction = document.getElementById("formDataDiri");

formAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;

  const hiddenMessage = `Hello ${inputNama}, bagaimana cuaca di ${inputDomisili}?`;

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault();
});
