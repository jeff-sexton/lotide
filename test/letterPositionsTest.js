const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it(`should return a object { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for the input 'hello'`, () => {
    const input = 'hello';
    const expectedResult = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
    const result = letterPositions(input);

    assert.deepEqual(result, expectedResult);
  });

  it(`should return a object 
  { l: [ 0 ],
    i: [ 1, 11 ],
    g: [ 2 ],
    h: [ 3, 5, 15, 18 ],
    t: [ 4, 14 ],
    o: [ 6, 19 ],
    u: [ 7, 20 ],
    s: [ 8, 21 ],
    e: [ 9, 16, 22 ],
    n: [ 12 ] } 
    for the input 'lighthouse in the house'`, () => {
    
    const input = 'lighthouse in the house';
    const expectedResult = { l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ] };
    const result = letterPositions(input);

    assert.deepEqual(result, expectedResult);
  });
});