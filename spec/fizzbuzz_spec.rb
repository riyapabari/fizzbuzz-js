require 'fizzbuzz'

describe "FizzBuzz" do
    it "returns 'fizz' when passed a multiple of 3" do
        expect(fizzbuzz(3)).to eq "fizz"
        expect(fizzbuzz(6)).to eq "fizz"
        expect(fizzbuzz(24)).to eq "fizz"
        expect(fizzbuzz(3930963)).to eq "fizz"
        expect(fizzbuzz(303)).to eq "fizz"
    end
    
    it "returns 'buzz' when passed a multiple of 5" do
        expect(fizzbuzz(5)).to eq "buzz"
        expect(fizzbuzz(10)).to eq "buzz"
        expect(fizzbuzz(20)).to eq "buzz"
        expect(fizzbuzz(500540)).to eq "buzz"
    end
    
    it "returns 'fizzbuzz' when passed a multiple of 3 and 5" do
        expect(fizzbuzz(15)).to eq "fizzbuzz"
        expect(fizzbuzz(30)).to eq "fizzbuzz"
        expect(fizzbuzz(150000)).to eq "fizzbuzz"
    end
    
    it "returns the number when passed a number that is neither a multiple of 3 or 5" do
        expect(fizzbuzz(1)).to eq "1"
        expect(fizzbuzz(2)).to eq "2"
        expect(fizzbuzz(19)).to eq "19"
    end
    
    it "returns an error message when passed an parameter that is not an integer" do
        expect(fizzbuzz("a")).to eq "Please enter an integer."
        expect(fizzbuzz("&")).to eq "Please enter an integer."
        expect(fizzbuzz("483642")).to eq "Please enter an integer."
    end
        
end