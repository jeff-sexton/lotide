const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe('#eqObjects', () => {
  it(`should return true when two objects with the same values and keys are input { a: "1", b: "2" }, { b: "2", a: "1" }`, () => {
    const input1 = { a: "1", b: "2" };
    const input2 = { b: "2", a: "1" };
    const result = eqObjects(input1, input2);

    assert.deepEqual(result, true);
  });

  it(`should return falase when two different objects are input { a: "1", b: "2" }, { a: "1", b: "2", c: "3" }`, () => {
    const input1 = { a: "1", b: "2" };
    const input2 = { a: "1", b: "2", c: "3" };
    const result = eqObjects(input1, input2);

    assert.deepEqual(result, false);
  });

  it(`should return true when two objects with the same values and keys are input and the values are not primitive types { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }`, () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { d: ["2", 3], c: "1" };
    const result = eqObjects(input1, input2);

    assert.deepEqual(result, true);
  });

  it(`should return false when two different objects and input and the values are not primitive types { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }`, () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { c: "1", d: ["2", 3, 4] };
    const result = eqObjects(input1, input2);

    assert.deepEqual(result, false);
  });


  it(`should return true when two objects with the samve values and keys are imput and some of them are objects { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }`, () => {
    const input1 = { a: { z: 1 }, b: 2 };
    const input2 =  { a: { z: 1 }, b: 2 };
    const result = eqObjects(input1, input2);

    assert.deepEqual(result, true);
  });


});
