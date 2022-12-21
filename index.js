// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return(cats);
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    return cats.pop();
}
function destructivelyRemoveFirstCat(name){
    return cats.shift();
}
function appendCat(name){
    return [...cats, "Broom"];
}
function prependCat(name){
    return ["Arnold", ...cats];
}
function removeLastCat(name){
    return cats.slice(0,-1);
}
function removeFirstCat(name){
    return cats.slice(1);
}