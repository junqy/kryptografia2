let intervalId

function randomDigit() {
    return Math.floor(Math.random() * Math.floor(2));
  }
  
  function generateRandomBinary(binaryLength) {
    let binary = "0b";
    for(let i = 0; i < binaryLength; ++i) {
      binary += randomDigit();
    }
    return binary;
  }


function stopLfsr(){
    clearInterval(intervalId);
}

function lfsr(){
    let power = document.getElementById("polynominal").value;
    let arr = power.split(',').map(Number);
    let newbit = 0
    arr = arr.sort();
    console.log(arr)
    let state = generateRandomBinary(arr[arr.length-1] + 1)
    state = Number(state)
    if(arr.length == 2){
        intervalId = setInterval(function(){
            let res = (state.toString(2))
            res = res.charAt(res.length - 1)
            document.getElementById("result").value += res;
            console.log(state.toString(2))
            newbit = ((state >> arr[0]) ^ (state >> arr[1])) & 1
            state = (state >> 1) | (newbit << arr[arr.length-1]) }, 1000)  
    }
    if(arr.length > 2){
        intervalId = setInterval(function(){            
            let res = (state.toString(2))
            res = res.charAt(res.length - 1)
            document.getElementById("result").value += res;
            console.log(state.toString(2))
            newbit = (state >> arr[arr.length-1]-arr[0]) ^ (state >> arr[arr.length-1]-arr[1])
            for(j=2; j<arr.length; j++){
                newbit = newbit ^ (state >> arr[arr.length-1]-arr[j])
                if(j == arr.length - 1){
                    newbit = newbit & 1
                } 
            } 
            state = (state >> 1) | (newbit << arr[arr.length-1]) }, 1000)
    }
}

// if(arr.length == 2){
//     for(i=0; i<20; i++){
//         console.log(state.toString(2))
//         newbit = ((state >> arr[0]) ^ (state >> arr[1])) & 1
//         state = (state >> 1) | (newbit << arr[arr.length-1])  
//     }     
// }
// if(arr.length > 2){
//     for(i=0; i<20; i++){
//         console.log(state.toString(2))
//         newbit = (state >> arr[arr.length-1]-arr[0]) ^ (state >> arr[arr.length-1]-arr[1])
//         for(j=2; j<arr.length; j++){
//             newbit = newbit ^ (state >> arr[arr.length-1]-arr[j])
//             if(j == arr.length - 1){
//                 newbit = newbit & 1
//             } 
//         } 
//         state = (state >> 1) | (newbit << arr[arr.length-1]) 
//     }
// }



// for(i=0; i<20; i++){
    // let res = (state.toString(2))
    // res = res.charAt(res.length - 1)
//     console.log(res)
//     newbit = ((state >> 3) ^ (state>>2) ^ state) & 1
//     state = (state >> 1) | (newbit << 3)
//     console.log(state.toString(2))
// }

// function lfsr(){
//     let power = document.getElementById("polynominal").value;
//     let arr = power.split(',').map(Number);
//     let newbit = 0
//     arr = arr.sort();
//     console.log(arr)
//     let state = generateRandomBinary(arr[arr.length-1] + 1)
//     state = Number(state)
//     if(arr.length == 2){
//         while(true){
//             let res = (state.toString(2))
//             res = res.charAt(res.length - 1)
//             console.log(state.toString(2))
//             newbit = ((state >> arr[0]) ^ (state >> arr[1])) & 1
//             state = (state >> 1) | (newbit << arr[arr.length-1])  
//         }     
//     }
//     if(arr.length > 2){
//         while(true){
//             let res = (state.toString(2))
//             res = res.charAt(res.length - 1)
//             document.getElementById("result").value += res;
//             console.log(state.toString(2))
//             newbit = (state >> arr[arr.length-1]-arr[0]) ^ (state >> arr[arr.length-1]-arr[1])
//             for(j=2; j<arr.length; j++){
//                 newbit = newbit ^ (state >> arr[arr.length-1]-arr[j])
//                 if(j == arr.length - 1){
//                     newbit = newbit & 1
//                 } 
//             } 
//             state = (state >> 1) | (newbit << arr[arr.length-1]) 
//         }
//     }
// }