// Function for add element in Selected List

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

// Function for select a element, alert & disabled

function getSelected(element){
    const playerName = element.parentNode.children[1].innerText;
    if(selectedPlayerArray.length <5){
    selectedPlayerArray.push(playerName);
    document.getElementById('player-count').innerText = selectedPlayerArray.length;
    element.setAttribute("id","select");
    }
    else{
        alert('You can not add more than 5 players')
    }
    playerList(selectedPlayerArray);
    
    element.disabled = true;
    
}

// Code for calculate total Player expenses

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

// Code for calculate total cost 

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

// Function for input validation 

function inputValidation() {
    const inputFields = document.getElementsByClassName("input");
    for (const inputField of inputFields) {
      const inputValue = inputField.value;
      if (isNaN(inputValue)) {
        alert("Input Numbers Only");
        return true;
      } else if (inputValue < 0) {
        alert("Invalid Input, You Can't Add Negative Number");
        return true;
      } else if (inputValue === "") {
        alert("Input Field Can not Be Empty");
        return true;
      }
    }
  }
  
 
    
      