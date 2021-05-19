function convertFahrToCelsius(F){
    if(typeof(F) === "object" & Array.isArray(F) === false){
        let ret = JSON.stringify(F)
        console.log(ret + 'is not')
        // console.log(typeof(F))
        // console.log(F)
    }else if(Array.isArray(F) === true){
        console.log(`[${F}] is not a valid number but an an Array`)
    }
   let C = ((+F - 32) * 5/9).toFixed(4)
//    console.log(C)
   
}
convertFahrToCelsius({time: 0});


//Second Question
function checkYuGiOh(n){
    let ans = ''
    for(let i = 1; i<=n; i++){
        if(i % 2 == 0 & i % 3 == 0 & i % 5 == 0){
            ans += ' yu-gi-oh'
            // console.log('yu-gi-oh')
        }else if(i % 2 == 0 & i % 3 == 0){
            ans += ' yu-gi'
            // console.log('yu-gi')
        }else if(i % 2 == 0 & i % 5 == 0){
            ans += ' yu-oh'
            // console.log('yu-oh')
        }else if(i % 2 == 0){
            ans += ' yu'
            // console.log('yu')
        }else if(i % 3 == 0){
            ans += ' gi'
            // console.log('gi')
        }else if(i % 5 == 0){
            ans += ' oh'
            // console.log('oh')
        }else{/*console.log(i)*/ ans += ` ${i}`}
    } 
    let finAns = ans.split(' ')
    let fAns =finAns.slice(1)
    console.log(fAns)
    // console.log(typeof(fAns))
    
}
checkYuGiOh(30)