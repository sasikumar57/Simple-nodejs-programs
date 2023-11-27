function removeDuplicates(inputString){
    return Array.from(new Set(inputString)).join('');
}
let inputString="Blockckckuih";
let result=removeDuplicates(inputString);
console.log(result);