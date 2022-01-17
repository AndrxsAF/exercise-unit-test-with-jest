let oneEuroIs = {
    JPY : 127.9, // japan yen
    USD: 1.2, // us dollar
    GBP: 0.8, // british pound
}

const fromEuroToDollar = (eur) => eur * oneEuroIs.USD

const fromDollarToYen = (dollar) => (dollar / 1.2) * oneEuroIs.JPY

const fromYenToPound = (yen) => (yen / 127.9) * oneEuroIs.GBP

console.log(fromDollarToYen(2), fromEuroToDollar(2), fromYenToPound(300))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };