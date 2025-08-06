function executarPush() {
  const array = ['🍎', '🍌'];
  array.push('🍇') // ele adiciona um intem no fianl do array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();  // ele remove o último
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();  // ele remove o primeiro
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓'); // ele adicionan no inicio da array
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝');  //ele verifica se possui esse elemento 
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse(); // ele inverte a ordem dos elementos
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a, b) => a - b); // ele ordena os números em ordem crescente
  // para ordem decrescente, seria (b - a)
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse(); // ele ordena em ordem alfabetica. e para colocar em ordem decrescente, basta usar o método reverse()
  // para ordem crescente, basta usar apenas o método sort()
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1, 3); // ele retorna uma parte do array, do índice 1 ao 3 (não inclui o 3)
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(1, 2, '🍓', '🍉'); // ele adiciona os elementos '🍓' e '🍉' a partir do índice , sem remover nenhum elemento
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf('🍇'); // ele indica em qual posição a uva esta 
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join(' - '); // ele junta todos os elementos do array em uma string, separando por ' - '
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach((pegaItem, index) => console.log(`O item ${index + 1} é ${pegaItem}`)) // ele executa uma função para cada elemento do array, sem retornar um novo array
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map( (pegaItem) => `✅ ${pegaItem}`); // ele cria um novo array com os resultados da chamada da função para cada elemento do array original
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem) => {`<h1> item em promoção </h1> <p> ${pegaItem}</p>`});
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter((pegaItem) => pegaItem === '🍎'); // ele cria um novo array com todos os elementos que passam no teste implementado pela função fornecida
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find((pegaItem) => pegaItem === '🍇'); // ele retorna o primeiro elemento do array que satisfaz a função de teste fornecida
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex((pegaItem) => pegaItem === '🍇'); // ele retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total, valorAtual)=> { return total + valorAtual} , 0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}

