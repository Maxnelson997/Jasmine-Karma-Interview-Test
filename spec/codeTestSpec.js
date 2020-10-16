describe("CodeTest", function() {
    var codeTest = require('../src/codeTest');
    describe("MatchingBrackets", function() {
        it("should have matching brackets", function() {
            expect(codeTest.checkForMatchingBrackets('{}')).toBeTrue();
            expect(codeTest.checkForMatchingBrackets('}{')).toBeFalse();
            expect(codeTest.checkForMatchingBrackets('{{}')).toBeFalse();
            expect(codeTest.checkForMatchingBrackets('')).toBeTrue();
        })
    })
    xdescribe("SumOfMultiples", function() {
        it("should have a sum of 23 for multiples of 3 and 5 below 10", function() {
            const BELOW_10 = 10
            expect(codeTest.sumOfMultiples(3, 5, BELOW_10)).toEqual(23)
        })
    })
})