async function CEPSearch(cep) {
  const errorMessage = document.getElementById("erro");
  errorMessage.innerHTML = "";
  try {
    const findCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const convertedCEP = await findCEP.json();
    if (convertedCEP.erro) {
      throw Error("Que vacilo! Você preencheu um CEP que não existe!");
    }
    const city = document.getElementById("cidade");
    const address = document.getElementById("endereco");
    const state = document.getElementById("estado");
    const neighborhood = document.getElementById("bairro");

    city.value = convertedCEP.localidade;
    address.value = convertedCEP.logradouro;
    state.value = convertedCEP.uf;
    neighborhood.value = convertedCEP.bairro;

    console.log(convertedCEP);
    return convertedCEP;
  } catch (erro) {
    errorMessage.innerHTML = `<p class="erro__texto">Hummmm, isso não parece bom! O CEP digitado é inválido!</p>`;
    console.log(erro);
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => CEPSearch(cep.value));
