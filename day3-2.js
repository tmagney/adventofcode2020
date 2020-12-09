//https://adventofcode.com/2020/day/3#part2
var fs = require('fs');
 
var input = fs.readFileSync('day3-input.txt', 'utf8').split('\r\n');
//var input = fs.readFileSync('day3-input-test.txt', 'utf8').split('\r\n');

var total = checkSlope(1,1) * checkSlope(3,1) * checkSlope(5,1) * checkSlope(7,1) * checkSlope(1,2);

console.log("Trees hit: " + total);

function checkSlope(right, down)
{
    var treesHit = 0;
    var position = 1;
    var maxLength = input[0].length;

    for(var i = down; i < input.length; i = i + down)
    { 
        var line = input[i];
           
        position = position + right;
    
        if(position > line.length)
        {
            position = position - maxLength;
        }
    
        var marker = 'O'
        if(line.charAt(position - 1) == '#')
        {
            marker = 'X';
            treesHit = treesHit + 1;
        }
    
        console.log(line.substr(0, position - 1) + marker + line.substr(position));
   }

   console.log("Trees hit: " + treesHit);
   return treesHit;
}