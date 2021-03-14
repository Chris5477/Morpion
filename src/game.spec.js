const { getWinner, newBoard } = require('./game');

describe('Game Functions', () => {
    describe('newBoard', () => {
        it('should create an empty new board', () => {
            expect(newBoard()).toEqual([
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ])
        });
    });

    describe('getWinner', () => {
        it('should return player number if a row has been filled with the same symbol', () => {
            expect(getWinner([
                [1, 1, 1],
                [null, null, null],
                [null, null, null]
            ])).toBe(1);

            expect(getWinner([
                [null, null, null],
                [2, 2, 2],
                [null, null, null]
            ])).toBe(2);

            expect(getWinner([
                [null, null, null],
                [null, null, null],
                [1, 1, 1],
            ])).toBe(1);
        });

        it.todo('should return player number if a column has been filled with the same symbol');
        it.todo('should return player number if a diagonal has been filled with the same symbol');
    });
});
