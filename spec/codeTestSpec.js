describe("CodeTest", function() {
    var codeTest = require('../src/codeTest');
    describe("MatchingBrackets", function() {
        expect(codeTest.checkForMatchingBrackets('{}')).toBeTrue();
        expect(codeTest.checkForMatchingBrackets('}{')).toBeFalse();
        expect(codeTest.checkForMatchingBrackets('{{}')).toBeFalse();
        expect(codeTest.checkForMatchingBrackets('')).toBeFalse();

    })
    describe("SumOfMultiples", function() {
        const BELOW_10 = 10
        expect(codeTest.sumOfMultiples(3, 5, BELOW_10)).toEqual(23)
    })
})