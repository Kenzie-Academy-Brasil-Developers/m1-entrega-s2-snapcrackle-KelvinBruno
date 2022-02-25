// function snapCrackle(maxValue){
//     let a = ''
//     for(let i = 1; i <= maxValue; i++){
//         if(i % 2 != 0){
//         a += ' Snap,'
//     }
//         if(i % 5 == 0){
//         a += ' Crackle,'
//     }
//         if(i % 2 != 0 && i % 5 == 0){
//         a += ' SnapCrackle,'
//     }
//         if(i % 2 == 0 && i % 5 != 0){
//         a += ' '+ i + ','
//     }
//     }
//     return a
// }
// console.log(snapCrackle(12))

// function snapCracklePrime(maxValue){
//     let a = ''
//     for(let i = 1; i <= maxValue; i++){
        
//         if(i % 2 != 0){
//         a += ' Snap,'
//     }
//         if(i== 2 || (i%2!=0 && i%3!=0 && i%5!=0)){
//         a += ' Prime,'
//         }
//         if(i % 5 == 0){
//         a += ' Crackle,'
//     }
//         if(i % 2 != 0 && i % 5 == 0 && i%3!= 0){
//         a += ' SnapCracklePrime,'
//     }
//         if(i % 2 != 0 && i % 5 == 0 && i%3==0){
//         a += ' SnapCrackle,'
//     }
//         if(i % 2 == 0 && i % 5 != 0 && i%3!=0){
        
//         a += ' '+ i + ','
//     }
//     }
//     return a
// }
function isPrime(a){  
    for (let i = 2; i < a; i++)
      if (a % i === 0) {
        return false;
      }
    return a > 1;
  };
  
  function snapCrackle(maxValue){
      let result = ''
      for(let i = 1; i <= maxValue; i++){
          if(i % 2 != 0 && i % 5 != 0){
          result += ' Snap,'
      }
          if(i % 5 == 0 && i%2==0){
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
  function snapCracklePrime(maxValue){
      let primo = null;
      let result = ''
      for(let i = 1; i <= maxValue; i++){
         primo = isPrime(i)
          if(i % 2 != 0 && i % 5 != 0){
          if(primo == true){
            result += ' SnapPrime,'
          }
          else{
          result += ' Snap,'
        }
      }
          if(i % 5 == 0 && i%2==0){
          result += ' Crackle,'
        }
          if(i % 2 != 0 && i % 5 == 0){
             if(primo == true){
            result += ' SnapCracklePrime,'
          }
          else{
          result += ' SnapCrackle,'
        }
          
      }
          if(i % 2 == 0 && i % 5 != 0){
            if(primo == true){
            result += ' Prime,'
          }
          else{
          result += ' '+ i + ','
        }
          
          
      }
      }
      return result
  }
  