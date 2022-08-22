const selectedPlayerArray = [];


function playerList(player){
    
    const selectedList = document.getElementById('selected-list');
    selectedList.innerText = '';

        for(let i = 0; i < player.length; i++){
            
            const li = document.createElement('li');
            li.innerText = selectedPlayerArray[i];
            selectedList.appendChild(li);
            
        }
    
}

function getSelected(element){
    const playerName = element.parentNode.children[1].innerText;
    if(selectedPlayerArray.length <5){
    selectedPlayerArray.push(playerName);
    document.getElementById('player-count').innerText = selectedPlayerArray.length;
    }
    else{
        alert('You can not add more than 5 players')
    }
    playerList(selectedPlayerArray);

}

document.getElementById('select1').addEventListener('click',function(){
    const disableBtn = document.getElementById('select1');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select2').addEventListener('click',function(){
    const disableBtn = document.getElementById('select2');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select3').addEventListener('click',function(){
    const disableBtn = document.getElementById('select3');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select4').addEventListener('click',function(){
    const disableBtn = document.getElementById('select4');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select5').addEventListener('click',function(){
    const disableBtn = document.getElementById('select5');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select6').addEventListener('click',function(){
    const disableBtn = document.getElementById('select6');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select7').addEventListener('click',function(){
    const disableBtn = document.getElementById('select7');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select8').addEventListener('click',function(){
    const disableBtn = document.getElementById('select8');
    disableBtn.setAttribute('disabled',true);
})
document.getElementById('select9').addEventListener('click',function(){
    const disableBtn = document.getElementById('select9');
    disableBtn.setAttribute('disabled',true);
})
   

document.getElementById('total-player-cost').addEventListener('click',function(){
    const playerCountField = document.getElementById('player-count');
    const totalCount = playerCountField.innerText;
    
    const perPlayerField = document.getElementById('per-player-amount');
    const perPlayerAmount = perPlayerField.value;
    
    const totalPlayerCost = totalCount*perPlayerAmount;

    const totalPlayerexpensesField = document.getElementById('total-player-expenses');
    const totalplayerexpenses = totalPlayerexpensesField.innerText;
    totalPlayerexpensesField.innerText = totalPlayerCost;
    
})

document.getElementById('calculate-total').addEventListener('click',function(){
    const totalPlayerexpensesField = document.getElementById('total-player-expenses');
    const totalplayerexpenses = totalPlayerexpensesField.innerText;
    const totalplayerexpensesInt = parseInt(totalplayerexpenses);

    const managerInput = document.getElementById('manager-amount');
    const managerAmount = managerInput.value;
    const managerAmountInt = parseInt(managerAmount);
    
    
    const coachInput = document.getElementById('coach-amount');
    const coachAmount = coachInput.value;
    const coachAmountInt = parseInt(coachAmount);

    const totalInput = document.getElementById('total');
    const totalAmount = totalInput.innerText;

    totalInput.innerText = totalplayerexpensesInt + managerAmountInt + coachAmountInt;

    inputValidation();

    
})

function inputValidation() {
    const inputFields = document.getElementsByClassName("input");
    for (const inputField of inputFields) {
      const inputValue = inputField.value;
      if (isNaN(inputValue)) {
        alert("Input Numbers Only");
        return true;
      } else if (inputValue < 0) {
        alert("Invalid Input");
        return true;
      } else if (inputValue === "") {
        alert("Input Field Can not Be Empty");
        return true;
      }
    }
  }
  
 
    
      