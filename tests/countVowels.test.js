const countVowels = require('../countVowels.js');

describe("countVowels", () => {

    test("Should return vowel count of word", () => {
        expect(countVowels("Hello world")).toBe(3);
    });
});