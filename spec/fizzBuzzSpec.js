describe('FizzBuzz', function() {
	var fizzbuzz;

	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});
	
	describe('knows when a number is', function() {
		it('divisible by 3', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});
	});

	describe('knows when a number is NOT', function() {
		it('divisible by 3', function() {
			expect(fizzbuzz.isDivisibleByThree(2)).toBe(false);
		});
	});

	describe('knows when a number is', function() {
		it('divisible by 5', function() {
			expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
		});
	});

	describe('knows when a number is NOT', function() {
		it('divisible by 5', function() {
			expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);
		});
	});

	describe('knows when a number is', function() {
		it('divisible by 15', function() {
			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});

	describe('knows when a number is NOT', function() {
		it('divisible by 15', function() {
			expect(fizzbuzz.isDivisibleByFifteen(20)).toBe(false);
		});
	});

	describe('when playing says', function() {
		it('fizz when a number is divisible by 3', function() {
			expect(fizzbuzz.says(3)).toEqual('fizz');
		});
	});

	describe('when playing says', function() {
		it('buzz when a number is divisible by 5', function() {
			expect(fizzbuzz.says(5)).toEqual('buzz');
		});
	});

	describe('when playing says', function() {
		it('fizzbuzz when a number is divisible by 15', function() {
			expect(fizzbuzz.says(15)).toEqual('fizzbuzz')
		});
	});

	describe('when playing says', function() {
		it('the number when not divisible by 3 or 5', function() {
			expect(fizzbuzz.says(2)).toEqual(2)
		});
	});

});