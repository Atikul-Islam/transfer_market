const selectedPlayerArray = [];


function playerList(player){
    // console.log(player)
    const selectedList = document.getElementById('selected-list');
    selectedList.innerText = '';

    if (player.length < 6) {
        for(let i = 0; i < player.length; i++){
            // console.log(selectedPlayerArray[0])
            const li = document.createElement('li');
            li.innerText = selectedPlayerArray[i];
            selectedList.appendChild(li);
            
        }
    } 
    else {
        alert('no')
    }
}

function getSelected(element){
    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[1].innerText);

    const playerName = element.parentNode.children[1].innerText;
    
    selectedPlayerArray.push(playerName);
    // console.log(selectedPlayerArray)
    // console.log(selectedPlayerArray.length)
    
    document.getElementById('player-count').innerText = selectedPlayerArray.length;

    playerList(selectedPlayerArray);
}

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
})


/*document.getElementById('select1').addEventListener('click',function(){
    const pl = document.getElementById("leo");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    
    let playerList = [];
    playerList.push(list1);
    console.log(playerList.length);
    if(playerList.length<=4){
        const li = document.createElement('li');
        li.innerText = pl1;
        list1.appendChild(li); 
    }
    else{
        alert('you can not add more than 5 players');
    }
    const select = document.getElementById('select1');
    select.setAttribute('disabled',true);
})




document.getElementById('select2').addEventListener('click',function(){
    const pl = document.getElementById("cr7");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select2');
    select.setAttribute('disabled',true);
})
document.getElementById('select3').addEventListener('click',function(){
    const pl = document.getElementById("neymar");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select3');
    select.setAttribute('disabled',true);
})
document.getElementById('select4').addEventListener('click',function(){
    const pl = document.getElementById("dembele");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select4');
    select.setAttribute('disabled',true);
})
document.getElementById('select5').addEventListener('click',function(){
    const pl = document.getElementById("mbappe");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select5');
    select.setAttribute('disabled',true);
})
document.getElementById('select6').addEventListener('click',function(){
    const pl = document.getElementById("lewa");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select6');
    select.setAttribute('disabled',true);
})
document.getElementById('select7').addEventListener('click',function(){
    const pl = document.getElementById("fati");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select7');
    select.setAttribute('disabled',true);
})
document.getElementById('select8').addEventListener('click',function(){
    const pl = document.getElementById("ramos");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    const select = document.getElementById('select8');
    select.setAttribute('disabled',true);
})
document.getElementById('select9').addEventListener('click',function(){
    const pl = document.getElementById("paredes");
    const pl1 = pl.innerText;

    const list1 = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerText = pl1;
    list1.appendChild(li);
    
    const select = document.getElementById('select9');
    select.setAttribute('disabled',true);   
})
*/
