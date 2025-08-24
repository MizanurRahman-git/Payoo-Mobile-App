

const validPin = 3201;


// function Create for parseInt//

function getInputValueNumber (id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)

    return inputFieldValueNumber
}



// function create for value//

function getInputValue (id){
    const bank = document.getElementById(id).value
    return bank;
}



// Function Create for InnerText //

function getInputValueText(id){
    const insideText = parseInt(document.getElementById(id).innerText)

    return insideText;
}




// Function Create for innerText set without parseInt //

function setInnerText(value){
    const setInnerTexts = document.getElementById('balance');
    setInnerTexts.innerText = value
}





// -------DOM for Add money---------//


document.getElementById('add-money-btn').addEventListener('click', function (e){
    e.preventDefault()
    
    const bank = getInputValue('bank')

    const accountNumber = getInputValue('bank-account-number')

    const addAmount = getInputValueNumber ('amount')

    const pinNumber = getInputValueNumber ('pin-number')

    const availableBalance = getInputValueText('balance')





// Somethink is here 



    if(accountNumber.length < 11){
        alert("Provide the correct account Number")
        return;
    }
    

    if(pinNumber !== validPin){
        alert("Invalid Pin")
        return;
    }





    const afterAddMoney = addAmount + availableBalance;
    
    setInnerText(afterAddMoney)

})




// -------------DOM for Cash Out----------------//

document.getElementById("withdraw-btn").addEventListener('click', function (e){
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")

    const cashOutAmount = getInputValueNumber('cash-out-amount')

    const cashOutPin = getInputValueNumber('cash-pin-number')

    const availableBalance = getInputValueText('balance')


    if(agentNumber.length < 11){
        alert("Invalid Agent Number")
        return;
    }

    if(cashOutPin !== validPin){
        alert("Invalid Pin")
        return;
    }

    const afterCashOutMoney = availableBalance - cashOutAmount;

    setInnerText(afterCashOutMoney)
})



// Toggling Method


document.getElementById("click-add-money").addEventListener('click', function(){
    document.getElementById("cash-out-section").style.display = "none"

    document.getElementById('add-money-section').style.display = "block"
})


document.getElementById("click-cash-out").addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = "none"

    document.getElementById("cash-out-section").style.display = "block"
})