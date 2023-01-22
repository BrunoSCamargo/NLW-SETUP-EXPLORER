const from = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(from);

const data = {
  study: ["01-01", "01-02", "01-06"],
};

nlwSetup.setData(data);
nlwSetup.load();
