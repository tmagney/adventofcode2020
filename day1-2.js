//https://adventofcode.com/2020/day/1
const { Console } = require('console');
var fs = require('fs');
 
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
//var input = [1721,979,366,299,675,1456];

const expected = 2020;
var actual = 0;
var product = 0;

var last = 0;

var entry1 = 0;
var entry2 = 0;
var entry3 = 0;

for(var i = 0; i < input.length; i++)
{
    entry1 = parseInt(input[i]); 
    for(var j = 0; j < input.length; j++)
    {
        entry2 = parseInt(input[j]);
        for(var k = 0; k < input.length; k++)
        {
            last = k;

            entry3 = parseInt(input[k]);
            actual = entry1 + entry2 + entry3;
            
            if(actual < 2500)
            {
                console.log("Sum: " + actual);
            }

            if(actual == expected)
            {
                product = entry1 * entry2 * entry3;
                console.log("Product: " + product);
                return;
            }
        }
    }
}

console.log("Expected value never found.");



