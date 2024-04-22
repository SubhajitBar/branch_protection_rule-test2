const add = require("../app/index");

test('Adds 1 + 2 to equal 3', ()=>{
    expect(add(1,2)).toBe(3);
});

test('Adds 5 + 9 to equal 14', ()=>{
    expect(add(5,9)).toBe(14);
});
