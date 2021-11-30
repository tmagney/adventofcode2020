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

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
//      If cm, the number must be at least 150 and at most 193.
//      If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

function isPassport(record) {
        
    
    var byr = record.split(' ').find(element => {
        return element.toString().includes('byr:');
    });

    var iyr = record.split(' ').find(element => {
        return element.toString().includes('iyr:');
    });

    var eyr = record.split(' ').find(element => {
        return element.toString().includes('eyr:');
    });

    var hgt = record.split(' ').find(element => {
        return element.toString().includes('hgt:');
    });

    var hcl = record.split(' ').find(element => {
        return element.toString().includes('hcl:');
    });

    var ecl = record.split(' ').find(element => {
        return element.toString().includes('ecl:');
    });

    var pid = record.split(' ').find(element => {
        return element.toString().includes('pid:'); 
    });

    var cid = record.split(' ').find(element => {
        return element.toString().includes('cid:');
    });

    return hasValidByr(byr)
}

function hasValidByr(bry)
{

}

function hasValidIyr(iyr)
{

}

function hasValidEyr(eyr){

}

function hasValidHgt(hgt){

}

function hasValidHcl(hcl){

}

function hasValidEcl(ecl){

}

function hasValidPid(pid){

}

function hasAllAttributes()
{
    return record.includes('byr:') &&
        record.includes('iyr:') &&
        record.includes('eyr:') &&
        record.includes('hgt:') &&
        record.includes('hcl:') &&
        record.includes('ecl:') &&
        record.includes('pid:');
}