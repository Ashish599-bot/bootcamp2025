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
console.log(replace("apple","p","e"))

function strLnegthEven(str){
    if(str.length %2 === 0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(strLnegthEven("hellop"))

function FindRabbit(arr){
    return arr.indexOf("rabbit")
}
console.log(FindRabbit(["monkey","cat","rabbit","dog"]))