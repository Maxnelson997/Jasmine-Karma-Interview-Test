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
    describe("SumOfMultiples", function() {
        it("should have a sum of 23 for multiples of 3 and 5 below 10", function() {
            const END_RANGE = 10;
            expect(codeTest.sumOfMultiples(3, 5, END_RANGE)).toEqual(23);
        })
        it("should have a sum of 233168 for multiples of 3 and 5 below 1000", function() {
            const END_RANGE = 1000;
            expect(codeTest.sumOfMultiples(3, 5, END_RANGE)).toEqual(233168);
        })
    })
})