//https://adventofcode.com/2020/day/1
var fs = require('fs');
 
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n');

const expected = 2020;
var actual = 0;
var product = 0;

for(var i = 0; i < input.length; i++)
{
    entry1 = parseInt(input[i]); 
    for(var j = i+1; j < input.length - i; j++)
    {
        entry2 = parseInt(input[j])
        actual = entry1 + entry2;
        console.log("Sum: " + actual);
        if(actual == expected)
        {
            product = entry1 * entry2;
            console.log("Product: " + product);
            return;
        }
    }
}



