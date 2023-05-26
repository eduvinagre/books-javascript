async function CEPSearch(cep) {
  try {
    const findCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const convertedCEP = await findCEP.json();
    if (convertedCEP.erro) {
      throw Error("Que vacilo! Você preencheu um CEP que não existe!");
    }
    console.log(convertedCEP);
    return convertedCEP;
  } catch (erro) {
    console.log(erro);
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => CEPSearch(cep.value));
