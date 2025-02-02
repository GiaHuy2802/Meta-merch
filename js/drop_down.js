
  const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menuu");
  const options = document.querySelectorAll(".menuu li");
  const selected = document.querySelector(".selected");
  select.addEventListener("click", () => {
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menuu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.classList.remove("placeholder");
      selected.innerText = option.innerText;
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menuu-open");
      options.forEach((option) => option.classList.remove("active"));
      option.classList.add("active");
    });
  });
});

