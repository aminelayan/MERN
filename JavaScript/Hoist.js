console.log(hello);
var hello = 'world';

// the variable is declared after the console.log so it will not read it in ES5

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// it will read the needle till function test will stay haystack after it will change the needle to magnet so when the function called magent will print out


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

 // it will call out just super cool beacuse the function was never called out


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// it will print out chicken then call out the eat function which will print out half-chicken and the last food was not read or printed

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean is not a function in ES5 if we run on ES6 it will print out Chicken and Fish but in ES5 mean is not function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// it will console log rock then r&b then disco beacuse disco was declared after the first console log


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// it will print all the variable san jose then seattle then dojo was changed to burbank then it will print out san jose again because last console log outside the function

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

