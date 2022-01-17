function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function getColAndRow(squareID) {
    let row, col
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]
    const coloms = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    
    for (let i=0; i < rows.length; i++) {
      if (rows[i].includes(squareID)) {
        row = i + 1;
      }
      if (coloms[i].includes(squareID)) {
        col = i+ 1;
      }
    }
    
    return [row, col]
  }


export {calculateWinner, getColAndRow}