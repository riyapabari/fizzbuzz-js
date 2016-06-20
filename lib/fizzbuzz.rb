def fizzbuzz(n)
    return "Please enter an integer." if !n.is_a? Integer
    case 0
    when n % 15
        "fizzbuzz"
    when n % 3
        "fizz"
    when n % 5
        "buzz"
    else
        "#{n}"
    end
end

