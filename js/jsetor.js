document.querySelector('.splachScreen span').onclick=function(){

  let PlayerName=prompt("what is your name");

  if(PlayerName==null || PlayerName==" "){
    document.querySelector(".name span").innerHTML='Unknown'; 
  }else{
    document.querySelector(".name span").innerHTML=PlayerName;
    document.querySelector(".splachScreen").remove();
  }

}
let duration =1000

let blocksContainer=document.querySelector('.memory-game-block')

let blocks=Array.from(blocksContainer.children)

//create array of keys 
let newarr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let orderRange=[...Array(blocks.length).keys()]

// shuffle array
shufflefunc(orderRange);
// Add order Css Property to Blocks Game

 blocks.forEach((block,index) => {
 
 //add css order styling 
  block.style.order = orderRange[index];

//add event to block cart game 
block.addEventListener('click',function(){
  
  //flip card when click on the card
  flipBlock(block);
});

});



// Shuffle function 
function shufflefunc(array){
  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let current=array.length
    ,temp
    ,randomNumber;

  while(current>0)
  {
    randomNumber=Math.floor(Math.random() * current);
    current--;
    temp=array[current];
    array[current]=array[randomNumber]
  }

  return array;
}


//shufflefunc(newarr);

//flip block function 
 function flipBlock(selectedBlock){
//rotate the card when clicked
  selectedBlock.classList.add('is-flipped');
// return only clicked card
let allFlippedCard=blocks.filter(flippedBlock=>flippedBlock.classList.contains('is-flipped'))
if (allFlippedCard.length===2){
  stopClicking()
  checkMatched(allFlippedCard[0],allFlippedCard[1])
  console.log(allFlippedCard[0],allFlippedCard[1])
}
}



function checkMatched(first,second){
  let triesElement=document.querySelector('.tries span')
  if(first.dataset.technology===second.dataset.technology){
    console.log('is matched')
    first.classList.remove('is-flipped');
    second.classList.remove('is-flipped');
    first.classList.add('is-match');
    second.classList.add('is-match');
    
  }else{
    triesElement.innerHTML=parseInt(triesElement.innerHTML)+1;
    
    setTimeout(()=>{
      //abilty of click after some time
      first.classList.remove('is-flipped');
      second.classList.remove('is-flipped');
    },duration)     
  }

}

function stopClicking(){
  // blocksContainer.classList.remove('is-flipped');
  blocksContainer.classList.add('disable-clik');
  setTimeout(()=>{
    //abilty of click after some time
    blocksContainer.classList.remove('disable-clik');
  },duration)
}




// // Shuffle function 
// function shufflefunc(array){
//   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// let shufflledArray=[],
//     usedIndex=[],
//     i=0;
//   while(i < array.length)
//   {
//     let randomNumber=Math.floor(Math.random() * array.length);
//     //3 
//     //check if array of indexe incude this random number or not 
//     if(!usedIndex.includes(randomNumber)){
//       //if not include add this random number to used index 
//       usedIndex.push(randomNumber)

//       shufflledArray.push(array[randomNumber])
//       i++
//     }
//   }

//   return shufflledArray;
// }
