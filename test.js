// import the function sum from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('converts 2 dollars in 213.16 yen', () => {
    expect(fromDollarToYen(2)).toBe(213.16666666666669)
})

test('converts 10232 yens in 80 gbp', () => {
    expect(fromYenToPound(10232)).toBe(64)
})

test('converts 120 euros in 144 dollars', () => {
    expect(fromEuroToDollar(3.5)).toBe(4.2)
})