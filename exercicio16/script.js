/*
## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/ 

// array armazenar 
let desenvolvedores = [];
let technologyCounter = 0;

function addTechnology() {
    const stackInputs = document.getElementById("stackInputs");
    const createDiv = document.createElement("div");
    createDiv.classList.add("technology");

    const createInput = document.createElement("input");
    createInput.type = "text";
    createInput.placeholder = "Nome da tecnologia";
    createDiv.appendChild(createInput);

    const experienceGroup = document.createElement("div");
    const expLabels = ["0-2 anos", "3-4 anos", "5+ anos"];
    expLabels.forEach((label) => {
        const expInput = document.createElement("input");
        expInput.type = "radio";
        expInput.name = "experience_" + technologyCounter; // Adicionando identificador único
        expInput.value = label;
        experienceGroup.appendChild(expInput);

        const expLabel = document.createElement("label");
        expLabel.textContent = label;
        experienceGroup.appendChild(expLabel);
    });
    createDiv.appendChild(experienceGroup);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remover";
    removeBtn.addEventListener("click", () => {
        createDiv.remove();
    });
    createDiv.appendChild(removeBtn);

    stackInputs.appendChild(createDiv);

    technologyCounter++; // Incrementando o contador para o próximo identificador único
}

const addTechBtn = document.getElementById("addTechBtn");
addTechBtn.addEventListener("click", addTechnology);

const form = document.getElementById("devForm");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const technologies = [];
    const technologyDivs = document.querySelectorAll(".technology");

    technologyDivs.forEach((technologyDiv) => {
        const techName = technologyDiv.querySelector("input[type='text']").value;
        const experiencia = technologyDiv.querySelector("input[type='radio']:checked")?.value;

        if (techName && experiencia) {
            technologies.push({ technology: techName, experience: experiencia });
        }
    });

    desenvolvedores.push({ name: fullName, technologies: technologies });

    document.getElementById("devForm").reset();
    document.getElementById("stackInputs").innerHTML = "";
    console.log(desenvolvedores);
});
