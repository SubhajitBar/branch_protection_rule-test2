const cal = require("../app/index");

test('Adds 1 + 2 to equal 3', ()=>{
    expect(cal.add(1,2)).toBe(3);
});

test('Substract 5 - 3 to equal 2', ()=>{
    expect(cal.sub(5,3)).toBe(2);
});

test('Multiply 7 * 6 to equal 42', ()=>{
    expect(cal.mul(7,6)).toBe(42);
});

test('Divide 21 / 3 to equal 7', ()=>{
    expect(cal.div(21,3)).toBe(7);
});
