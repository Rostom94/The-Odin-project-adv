// choisir parmi 9 emplacement 1 emplacement
// je pense la meilleure solution c de créer une liste
// je vais la nommé plateforme

const plateform = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* ============================================== */

function PlayerTurn(board) {
  // 2 joueurs, un npc et un humain, l'humain dois choisir un chiffre
  // inclus entre 1 et 9, cela sera son choix d'emplacement sur la plateforme
  const player_choice = Number(prompt("veuillez choisir un numéro de 1 a 9"));
  console.log(board.indexOf(player_choice) >= 0);
  if (board.indexOf(player_choice) >= 0) {
    // cherchez la valeur du premier joueur, pour le moment c'est l'humain
    // et l'enlever de la liste
    const player_choice_index = board.indexOf(player_choice);

    // enlever la valeur choisis de la liste par index
    board.splice(player_choice_index, 1);

    //marquer le chiffre choisis dans une liste que j'ai nommé player_win_list
    player_win_list.push(player_choice);
  } else {
    console.log(
      `Please choose a number between ${board[0]} and ${
        board[board.length - 1]
      } `
    );
    PlayerTurn(board);
  }

  return board;
}
/* ============================================== */

function NpcTurn(board) {
  // l'npc fera son choix aléatoirement du reste de la liste 'plateform' retourné
  // d'ou plateform.length -1 pour avoir la liste des index
  const npc_choice = Math.floor(Math.random() * (board.length - 1)) + 1;

  //mettre le choix du npc dans la liste npc_win_list
  npc_win_list.push(board[npc_choice]);

  board.splice(npc_choice, 1);

  console.log(npc_choice);

  return npc_choice;
}

/* ============================================== */

//créer une liste qui va inscrire les mouvement des 2 joueurs
const player_win_list = [];
const npc_win_list = [];

//mettre 3 round et enregister dans des variable turn afin d'assurer la comparaison
const turn1 = PlayerTurn(plateform);
NpcTurn(turn1);

const turn2 = PlayerTurn(turn1);
NpcTurn(turn2);

const turn3 = PlayerTurn(turn2);
NpcTurn(turn3);

// ordonner la liste afin de la comparer avec l'objet
const sorted_PlayerWinList = player_win_list.sort((a, b) => a - b);

// créer un object de liste des cas de wins,
// en ordre croissant pour diminuer les cas
const winning_list = {
  1: [1, 2, 3],
  2: [4, 5, 6],
  3: [7, 8, 9],
  4: [1, 5, 9],
  5: [3, 5, 7],
  6: [1, 4, 7],
  7: [2, 5, 8],
  9: [3, 6, 9],
};

// faire une boucle for in afin de comparer chaque element de l'objet
// avec la liste winning
for (const id in winning_list) {
  let winning_array = winning_list[id];
  let WL_to_str = winning_array.toString();
  let PL_to_str = sorted_PlayerWinList.toString();

  // si ya correspondance sortir de la boucle et mettre reussite
  if (WL_to_str === PL_to_str) {
    console.log("you win");
    break;
  } else {
    console.log("you lose!");
  }
}
