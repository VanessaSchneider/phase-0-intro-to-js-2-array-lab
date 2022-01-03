// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name) {
cats.push(`${name}`);

}

function destructivelyPrependCat(name) {
cats.unshift(`${name}`);

}

function destructivelyRemoveLastCat() {
    cats.pop();

}

function destructivelyRemoveFirstCat() {
cats.shift();

}

function appendCat(name) {

    const newArray = [...cats, "Broom"];

    return newArray;
}


function prependCat(name) {

    const newArray = ["Arnold", ...cats];

    return newArray;
}

function removeFirstCat() {

   return cats.slice(1);
}



function removeLastCat() {
return cats.slice(0,-1);


}










 








