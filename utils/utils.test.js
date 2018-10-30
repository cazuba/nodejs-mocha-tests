const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    const rs = utils.add(33, 11);
    expect(rs).toBe(44);
    // if (rs !== 44) {
    //     throw new Error(`Expected 44, but got ${rs}`);
    // }
});

// SQUARE
it('should square a number', () => {
    const rs = utils.square(12);
    expect(rs).toBe(144);
    // if (rs !== 144) {
    //     throw new Error(`Expected 144, but got ${rs}`);
    // }
});


// ASYNC ADD
it('should a sync add two number', (done) => {
    utils.asyncData(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
    });
});