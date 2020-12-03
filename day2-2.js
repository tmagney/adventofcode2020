//https://adventofcode.com/2020/day/2#part2
var fs = require('fs');
 
var input = fs.readFileSync('day2-input.txt', 'utf8').split('\r\n');
//var input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

var validCount = 0;

input.forEach(item => {
    var occurences = item.split(' ')[0];
    var first = parseInt(occurences.split('-')[0]) - 1;
    var second = parseInt(occurences.split('-')[1]) - 1;

    var letter = item.split(' ')[1].charAt(0);
    var password = item.split(' ')[2].split('');

    var position1 = password[first];
    var position2 = password[second];
    
    if ((position1 == letter || position2 == letter) && (position1 != position2))
    {
        validCount = validCount + 1;
        console.log('Valid password: ' + item);
    }
    else{
        console.log('Invalid password: ' + item);
    } 
});

console.log("Valid password count: " + validCount);