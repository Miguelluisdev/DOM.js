// função responsavel pelo calculo
export default function calculate() {
  const resultInput = document.getElementById("result");
  try {
    const result = eval(input.value);
    if (isNaN(result)) {
      resultInput.value = "ERROR";
      resultInput.classList.add("error");
    } else {
      resultInput.value = result;
      resultInput.classList.remove("error");
    }
  } catch (error) {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
  }
}