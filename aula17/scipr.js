const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica1","Musica3", "musica boa"])

musicas.add("musica muito legal")
musicas.add("musica after dark")
console.log(musicas)

const mySet = new Set();

// Adicionando elementos ao Set
mySet.add(1);
mySet.add('apple');
mySet.add(true);
mySet.add('apple'); // A segunda tentativa de adicionar 'apple' é ignorada (não há duplicatas)

console.log(mySet); // Saída: Set { 1, 'apple', true }

// Verificando se um valor está presente no Set
console.log(mySet.has(true)); // Saída: true
console.log(mySet.has(5));    // Saída: false

// Removendo um valor do Set
mySet.delete(1);
console.log(mySet); // Saída: Set { 'apple', true }

// Tamanho do Set
console.log(mySet.size); // Saída: 2
