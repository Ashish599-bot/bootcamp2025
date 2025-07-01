function reverseString(str){
    return str.split("").reverse().join("");
}

function replace(str,charToReplace,strReplacement){
    let result = "";
    for(let i = 0; i < str.length; i += 1){
        if(str[i] === charToReplace){
            result += strReplacement;
        } else{
            result += str[i]
        }
    }
    return result
}
// console.log(replace("apple","p","123"))

function strLnegthEven(str){
    if(str.length %2 === 0){
        return "even"
    }else{
        return "odd"
    }
}
// console.log(strLnegthEven("hellop"))

function FindRabbit(arr){
    return arr.indexOf("rabbit")
}
// console.log(FindRabbit(["monkey","cat","rabbit","dog"]))

function filter_list(l) {
  return l.filter(function(item) {
    return typeof item === "number";
  });
}
// console.log(filter_list([1,"a",2,"b"]))

function accum(s) {
  return s
    .split('')
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join('-');
}
// console.log(accum("abcd"))

function simpleMultiplication(number){
    if(number % 2 === 0){
        return number * 8;
    } else{
        return number * 9;
    }
}
console.log(simpleMultiplication(6))
console.log(simpleMultiplication(5))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(9))