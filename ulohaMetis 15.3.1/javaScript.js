function searchText(){
  
    let sWord = document.getElementById("searchW");
    sWord = sWord.value;
  
    let searchingOutput = document.getElementById("searchingOutput")
  
    let text = document.getElementById("text");
    text = text.value;
    text = text.toLowerCase();
  
  if (text.includes(sWord)) {
      searchingOutput.innerText = "nachadza sa"
  } else {
    searchingOutput.innerText = "nenachadza sa"
  }
} 




function analyz(){
  
    let text = document.getElementById("text");
    let textLength = (text.value).length;
    let text2 = text.value.split(" ").join("").length;
    
    console.log(text)       
   
    function getCountOfNumbers(str) {
      return str.replace(/[^0-9]/g, '').length;
    }
  
    numberCount = getCountOfNumbers(text.value)

      let novySTR = text.value.replaceAll(',', '');
      novySTR = novySTR.replaceAll('.', '');
      novySTR = novySTR.replaceAll('!', '');
      novySTR = novySTR.replaceAll('?', '');
  
      let splitText = novySTR.split(' ');
      let longestWCount = 0;
  
      for(var i = 0; i < splitText.length; i++){
        if(splitText[i].length >longestWCount){ 
            longestWCount = splitText[i].length; 
         }
      }

    let listWords = [];
    for(let i = 0; i < splitText.length; i++){
      if(splitText[i].length == longestWCount){
        if(splitText.length == 1){
            listWords.push(splitText[i]);
        }
        else{
            listWords += splitText[i] + ", ";
        }
      }
    }
  
    console.log(listWords)
    
    let textOutput = document.getElementById("textOutput");
    textOutput.value = "Dĺžka textu: " + textLength
  
    textOutput.value += "\nDĺžku bez medzier: " + text2;
  
    textOutput.vahladajlue += "\nčíslic v texte: " + numberCount;
  
    textOutput.value += "\nNajdlhšie slovo: " + listWords;
    textOutput.value += "\npísmena najdlhšieho slova: " + longestWCount;
  }
  

  


function hash(){
    let text = document.getElementById("text");
    let numSwap = document.getElementById("numSwap");
  
    textChanged = text.value.replaceAll(/o/ig, "0");
    textChanged = textChanged.replaceAll(/I/ig, "1");
    textChanged = textChanged.replaceAll(/E/ig, "3");
    textChanged = textChanged.replaceAll(/A/ig, "4");
    textChanged = textChanged.replaceAll(/S/ig, "5");
    textChanged = textChanged.replaceAll(/B/ig, "8");
    numSwap.value = textChanged;
  }