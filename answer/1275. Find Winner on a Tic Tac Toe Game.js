/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let chess = [['', '', ''], ['', '', ''], ['', '', '']]
  function checkRes(x, y, val) {
    return [0, 1, 2].every(i => chess[x][i] == val) ||
      [0, 1, 2].every(i => chess[i][y] == val) ||
      (x == y && [0, 1, 2].every(i => chess[i][i] == val)) ||
      ((Math.abs(x - y) == 2 || x == 1 && y == 1) && [2, 1, 0].every((i, idx) => chess[idx][i] == val))
  }
  if (moves.length < 5) return 'Pending'
  for (let i = 0; i < moves.length; i++) {
    const role = i % 2 == 0 ? 'A' : 'B', move = moves[i]
    chess[move[0]][move[1]] = role
    if (i >= 4) {
      console.log(chess);
      if (checkRes(move[0], move[1], role)) return role
    }
  }
  return moves.length==9?'Draw':'Pending'
};
[[[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]],
[[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]],
[[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]],
[[0, 0], [1, 1]],
[[1, 0], [2, 2], [2, 0], [0, 1], [1, 1]]].forEach(item => {
  console.log(tictactoe(item));
})