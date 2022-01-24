document.addEventListener('DOMContentLoaded',()=>{ // cria um listener quando o documento todo for carregado.

  // vai pegar todos os 'squares' do HTML, vai varrer o array dos squares, vai pegar cada square dentro dele e vai adicionar o addEeventListener em cada um e usar o handleClick para tratar o evento de click.
  let squares = document.querySelectorAll(".square");
  squares.forEach((square)=>{
    square.addEventListener('click', handleClick);
  })


})

function handleClick(event){
  console.log(event.target);

  let square = event.target; // elemento que recebeu o evento.
  let position = square.id; //pegou o id e chamou de position.

  if (handleMove(position)){

    setTimeout (() => {

      alert("Fim de jogo!");
    }, 10);
 };
 updateSquare(position);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}
