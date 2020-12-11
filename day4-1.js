//https://adventofcode.com/2020/day/4
var fs = require('fs');
 
var input = fs.readFileSync('day4-input.txt', 'utf8').split('\r\n');
//var input = fs.readFileSync('day4-input-test.txt', 'utf8').split('\r\n');
input.push(''); //Forces the last record to process

var validPassports = 0;

var record = "";

input.forEach(line => {
    if(line == '')
    {   
        console.log(record);
        var valid = isPassport(record);

        validPassports += valid ? 1 : 0;
        record = '';
    }
    else{
        record += line + " ";
    }
});

console.log("Valid passports: " + validPassports);

function isPassport(record) {
    return record.includes('byr:') &&
        record.includes('iyr:') &&
        record.includes('eyr:') &&
        record.includes('hgt:') &&
        record.includes('hcl:') &&
        record.includes('ecl:') &&
        record.includes('pid:');
}