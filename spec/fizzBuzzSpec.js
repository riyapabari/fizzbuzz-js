describe("it returns a number when neither a multiple of 3 or 5", function() {
	it("returns 1 when passed 1", function() {
		expect(fizzBuzz(1)).toEqual(1); 
	});
	it("returns 2 when passed 2", function() {
		expect(fizzBuzz(2)).toEqual(2);
	});
});

describe("it returns fizz when passed a multiple of 3", function() {
	it("returns buzz when passed 3", function() {
		expect(fizzBuzz(3)).toEqual('fizz');
	});
});