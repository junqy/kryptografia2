let intervalId
let image_data
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



function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function binaryToText(binary) {

     binary = binary.split(' ');

    return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
    }


function Szyfrowanie(){
    let text = document.getElementById("text").value;
    let key = document.getElementById("key").value;
    let  text_bin =  text2Binary(text)
    let arr = text_bin.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length != 7){
            arr[i] = "0" + arr[i]
        }
    }
    text_bin = arr.join(' ')
    let result = ''
    let j = 0
    let k = 0
    for(i = 0; i< text_bin.length;i++){
        if(text_bin[k] == ' '){
          k++
          result += ' '
        }else{      
        if(j == key.length){
            j = 0
        }
        result += (key[j++] ^ text_bin[k++])
        }
    }
    console.log("text " + text_bin)
    console.log("key " + key)
    console.log("result " + result)
    document.getElementById("resultSCB").value = result
    return result
    
  }

  function deszyfrowanie(){
    let text_bin = document.getElementById("resultSCB").value;
    let key = document.getElementById("key").value;
    let j = 0;
    let k = 0
    let result = ''
  for(i = 0; i< text_bin.length;i++){
        if(text_bin[k] == ' '){
          
          k++
          result += ' '
        }else{     
         
        if(j== key.length){
            j = 0
        }
        result += (key[j++] ^ text_bin[k++])
        }
    }
      let converted_result = binaryToText(result)
      console.log("deszyfr " + result)
      console.log(converted_result)
      document.getElementById("text").value = converted_result
      return converted_result
    
}

function Szyfrowanie1(){
    let text = image_data;
    let key = document.getElementById("key1").value;
    let  text_bin =  text2Binary(text)
    let arr = text_bin.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length != 7){
            arr[i] = "0" + arr[i]
        }
    }
    text_bin = arr.join(' ')
    let result = ''
    let j = 0
    let k = 0
    for(i = 0; i< text_bin.length;i++){
        if(text_bin[k] == ' '){
          k++
          result += ' '
        }else{      
        if(j == key.length){
            j = 0
        }
        result += (key[j++] ^ text_bin[k++])
        }
    }
    console.log("text " + text_bin)
    console.log("key " + key)
    console.log("result " + result)
    
    document.getElementById("textarea").value = result
    return result
    
  }

  function deszyfrowanie1(){
    let text_bin = document.getElementById("textarea").value;
    let key = document.getElementById("key1").value;
    let j = 0;
    let k = 0
    let result = ''
  for(i = 0; i< text_bin.length;i++){
        if(text_bin[k] == ' '){
          
          k++
          result += ' '
        }else{     
         
        if(j== key.length){
            j = 0
        }
        result += (key[j++] ^ text_bin[k++])
        }
    }
      let converted_result = binaryToText(result)
      console.log("deszyfr " + result)
      console.log(converted_result)
      document.getElementById("textarea1").value = converted_result
      return converted_result
    
}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}
function binaryToText(binary) {

    binary = binary.split(' ');

   return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
   }

   function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // image to base64
      preview.src = reader.result;
      
      let arr = preview.src.split(",")
      
      image_data = arr[1]
      document.getElementById("textarea1").value = image_data
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }

  }

