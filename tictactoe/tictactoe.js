let plateform = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const winning_list = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

/*
 */

function checkSubset(selectedArr, winningArr) {
  return winningArr.every((el) => {
    return selectedArr.includes(el);
  });
}

const player_win_list = [];
const npc_win_list = [];

const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const box1 = document.querySelector(".box._1");
const box2 = document.querySelector(".box._2");
const box3 = document.querySelector(".box._3");
const box4 = document.querySelector(".box._4");
const box5 = document.querySelector(".box._5");
const box6 = document.querySelector(".box._6");
const box7 = document.querySelector(".box._7");
const box8 = document.querySelector(".box._8");
const box9 = document.querySelector(".box._9");

box1.addEventListener("click", () => {
  checkGame(1);
});
box2.addEventListener("click", () => {
  checkGame(2);
});
box3.addEventListener("click", () => {
  checkGame(3);
});
box4.addEventListener("click", () => {
  checkGame(4);
});
box5.addEventListener("click", () => {
  checkGame(5);
});
box6.addEventListener("click", () => {
  checkGame(6);
});
box7.addEventListener("click", () => {
  checkGame(7);
});
box8.addEventListener("click", () => {
  checkGame(8);
});
box9.addEventListener("click", () => {
  checkGame(9);
});
reset.addEventListener("click", () => {
  location.reload();
});

function checkGame(n) {
  let sorted_PlayerWinList = player_win_list.sort((a, b) => a - b);
  let sorted_NpcWinList = npc_win_list.sort((a, b) => a - b);

  Game(plateform, n);

  for (let arr of winning_list) {
    if (checkSubset(sorted_PlayerWinList, arr)) {
      result.textContent = "MARIA !YOU WON !";
      for (let i = 0; i < 3; i++) {
        document
          .querySelector(`.box._${arr[i]}`)
          .setAttribute("style", "background-color: #1aaa454b");
      }
      result.setAttribute("style", "font-size : 2rem; color :green;");
      break;
    } else if (checkSubset(sorted_NpcWinList, arr)) {
      result.textContent = "MARIA, YOU LOST TO A PC !";
      for (let i = 0; i < 3; i++) {
        document
          .querySelector(`.box._${arr[i]}`)
          .setAttribute("style", "background-color: #9caa1a4b");
      }
      result.setAttribute("style", "font-size : 2rem; color :red;");
    }
  }
}

function Game(board, click) {
  if (board.includes(click)) {
    document.querySelector(`.box._${click}`).textContent = "X";
    const turn = PlayerTurn(plateform, click);
    NpcTurn(turn);
  } else {
    result.textContent = "Choose another box";
    result.setAttribute("style", "font-size : 2rem; color :red;");
  }
}

function PlayerTurn(board, click) {
  const player_choice_index = board.indexOf(click);

  board.splice(player_choice_index, 1);

  player_win_list.push(click);

  return board;
}

function NpcTurn(board) {
  if (board.length !== 0) {
    const npc_choice = Math.floor(Math.random() * (board.length - 1)) + 1;

    npc_win_list.push(board[npc_choice]);

    document.querySelector(`.box._${board[npc_choice]}`).textContent = "O";

    board.splice(npc_choice, 1);
  }

  return board;
}

/* function playGame(board, number) {
  if (board.includes(number)) {
    document.querySelector(`.box._${number}`).textContent = "X";
    Game(number);
  } else {
    console.log("this case was already taken");
  }
}
 */
