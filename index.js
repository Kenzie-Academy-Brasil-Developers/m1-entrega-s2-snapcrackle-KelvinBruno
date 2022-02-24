function snapCrackle(maxValue){
    let result = ''
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 != 0){
        result += ' Snap,'
    }
        if(i % 5 == 0){
        result += ' Crackle,'
    }
        if(i % 2 != 0 && i % 5 == 0){
        result += ' SnapCrackle,'
    }
        if(i % 2 == 0 && i % 5 != 0){
        result += ' '+ i + ','
    }
    }
    return result
}
console.log(snapCrackle(12))