//https://adventofcode.com/2020/day/3
var fs = require('fs');
 
var input = fs.readFileSync('day3-input.txt', 'utf8').split('\r\n');
//var input = fs.readFileSync('day3-input-test.txt', 'utf8').split('\r\n');

var treesHit = 0;
var position = 1;
var maxLength = input[0].length;

input.forEach(line => {
    if(input[0] == line)
    {
        console.log(line);
        return;
    }
    
    position = position + 3;

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
    return;
});

console.log("Trees hit: " + treesHit);