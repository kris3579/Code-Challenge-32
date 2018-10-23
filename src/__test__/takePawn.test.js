'use strict';

const TwoDArray = require('../takePawn');

const testNorthWestPawn = new TwoDArray();
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 'pawn', 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 'bishop', 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);

const testNorthEastPawn = new TwoDArray();
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 'bishop', 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 'pawn', 3, 4, 5, 6, 7, 8]);
testNorthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);

const testSouthWestPawn = new TwoDArray();
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 'pawn', 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 'bishop', 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthWestPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);

const testSouthEastPawn = new TwoDArray();
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 'bishop', 6, 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 'pawn', 7, 8]);
testSouthEastPawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);

const testUntakeablePawn = new TwoDArray();
testUntakeablePawn.chessboard.push(['bishop', 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push(['pawn', 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);
testUntakeablePawn.chessboard.push([1, 2, 3, 4, 5, 6, 7, 8]);

const testEmptyBoard = new TwoDArray();

describe('takePawn.js', () => {
  test('Returned true if you can take a pawn up and left', () => {
    const result = testNorthWestPawn.takePawn();
    expect(result).toEqual(true);
  });
  test('Returned true if you can take a pawn up and right', () => {
    const result = testNorthEastPawn.takePawn();
    expect(result).toEqual(true);
  });
  test('Returned true if you can take a pawn down and left', () => {
    const result = testSouthWestPawn.takePawn();
    expect(result).toEqual(true);
  });
  test('Returned true if you can take a pawn down and right', () => {
    const result = testSouthEastPawn.takePawn();
    expect(result).toEqual(true);
  });
  test('Returned false if the 2dArray is not the right shape', () => {
    const result = testEmptyBoard.takePawn();
    expect(result).toEqual(false);
  });
  test('Returned false if you cannot take the pawn with the bishop', () => {
    const result = testUntakeablePawn.takePawn();
    expect(result).toEqual(false);
  });
});
