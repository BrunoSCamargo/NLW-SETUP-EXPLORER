const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const buttons = document.querySelector("header button");

buttons.addEventListener("click", () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExiste = nlwSetup.dayExists(today);

  if (dayExiste) {
    alert("Dia já incluso 🔴");
    return;
  }

  alert("Dia incluso com sucesso ✅");
  nlwSetup.addDay(today);
});

form.addEventListener("change", () => {
  localStorage.setItem("nlwHanots", JSON.stringify(nlwSetup.data));
});

const data = JSON.parse(localStorage.getItem("nlwHanots")) || {};
nlwSetup.setData(data);
nlwSetup.load();
