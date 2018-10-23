'use strict';

module.exports = class TwoDArray {
  constructor() {
    this.chessboard = [];
  }

  findPieces() {
    let pawn = [];
    let bishop = [];
    for (let x = 1; x < 8; x++) {
      for (let y = 1; y < 8; y++) {
        if (this.chessboard[x][y] === 'pawn') {
          pawn = [x, y];
        }
        if (this.chessboard[x][y] === 'bishop') {
          bishop = [x, y];
        }
      }
    }
    return { pawn, bishop };
  }

  checkLeftUp(pieceLocations) {
    const pawnLocation = [pieceLocations.pawn[0], pieceLocations.pawn[1]];
    let y = pieceLocations.bishop[1];
    for (let x = pieceLocations.bishop[0] - 1; x > 1; x--) {
      y -= 1;
      console.log('pawnlocations', pawnLocation);
      console.log('chessboard position', [x, this.chessboard[x][y]]);
      if (this.chessboard[x][y] === pawnLocation) {
        return true;
      }
    }
    return false;
  }

  checkRightUp(pieceLocations) {
    const pawnLocation = [pieceLocations.pawn[0], pieceLocations.pawn[1]];
    let y = pieceLocations.bishop[1];
    for (let x = pieceLocations.bishop[0] + 1; x < 8; x++) {
      y -= 1;
      if (this.chessboard[x][y] === pawnLocation) {
        return true;
      }
    }
    return false;
  }

  checkLeftDown(pieceLocations) {
    const pawnLocation = [pieceLocations.pawn[0], pieceLocations.pawn[1]];
    let y = pieceLocations.bishop[1];
    for (let x = pieceLocations.bishop[0] - 1; x > 1; x--) {
      y += 1;
      if (this.chessboard[x][y] === pawnLocation) {
        return true;
      }
    }
    return false;
  }

  checkRightDown(pieceLocations) {
    const pawnLocation = [pieceLocations.pawn[0], pieceLocations.pawn[1]];
    let y = pieceLocations.bishop[1];
    for (let x = pieceLocations.bishop[0] + 1; x < 1; x++) {
      y += 1;
      if (this.chessboard[x][y] === pawnLocation) {
        return true;
      }
    }
    return false;
  }

  takePawn() {
    if (this.chessboard.length !== 8) {
      return false;
    }
    const pieceLocations = this.findPieces(this.chessboard);
    const leftUp = this.checkLeftUp(pieceLocations);
    const rightUp = this.checkRightUp(pieceLocations);
    const leftDown = this.checkLeftDown(pieceLocations);
    const rightDown = this.checkRightDown(pieceLocations);
    if (leftUp === true || rightUp === true || leftDown === true || rightDown === true) {
      return true;
    }
    return false;
  }
};
