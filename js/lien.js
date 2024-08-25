document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector("#reminder-checkbox");
  const link = document.querySelector(".link");

  link.addEventListener("click", function (event) {
    // Empêche le lien de naviguer
    event.preventDefault();
    // Inverse l'état de la checkbox
    checkbox.checked = !checkbox.checked;
  });
});
