

const validPin = 3201;

const transactionData = []


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




// Function Create for form Toggle ///

function handleToggle (id){
    const forms = document.getElementsByClassName('form')

    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById(id).style.display = "block"
}



// function create for btn toggle //


function handleBtnToggle(id){
    const formsbtn = document.getElementsByClassName('form-btn')

    for(const forms of formsbtn){
        forms.classList.remove("border-[#0874F2]", "bg-[#0874f20d]")
        forms.classList.add("border-gray-400")
    }

    document.getElementById(id).classList.remove("border-gray-400")

    document.getElementById(id).classList.add("border-[#0874F2]", "bg-[#0874f20d]")
}



// -------DOM for Add money---------//


document.getElementById('add-money-btn').addEventListener('click', function (e){
    e.preventDefault()
    
    const bank = getInputValue('bank')

    const accountNumber = getInputValue('bank-account-number')

    const addAmount = getInputValueNumber ('amount')

    if(addAmount<1){
        alert('Please Enter Right Amount')
        return;
    }

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


    const data = {
        name: "Add Money",
        date:new Date().toLocaleDateString()
    }

    transactionData.unshift(data)
})




// -------------DOM for Cash Out----------------//

document.getElementById("withdraw-btn").addEventListener('click', function (e){
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")

    const cashOutAmount = getInputValueNumber('cash-out-amount')

    const cashOutPin = getInputValueNumber('cash-pin-number')

    const availableBalance = getInputValueText('balance')

    if(cashOutAmount>availableBalance){
        alert('Type valid Amount')
        return;
    }

    if(cashOutAmount<1){
        alert('Type valid Amount')
        return;
    }

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


    const data = {
        name: "Cash Out",
        date:new Date().toLocaleDateString()
    }

    transactionData.unshift(data)
})






// Toggling Method


document.getElementById("click-add-money").addEventListener('click', function(e){
    handleToggle('add-money-section')
    
    handleBtnToggle("click-add-money")
})


document.getElementById("click-cash-out").addEventListener('click', function(e){
    handleToggle('cash-out-section')

    handleBtnToggle("click-cash-out")
})

document.getElementById("click-transfer-money").addEventListener('click', function(e){
    handleToggle('transfer-money-section')

    handleBtnToggle("click-transfer-money")
})


document.getElementById("click-get-bonus").addEventListener('click', function(e){
    handleToggle('get-bonus-section')

    handleBtnToggle("click-get-bonus")
})


document.getElementById("click-pay-bill").addEventListener('click', function(e){
    handleToggle('pay-bill-section')

    handleBtnToggle("click-pay-bill")
})


document.getElementById("click-transactions").addEventListener('click', function(e){
    handleToggle('transaction-section')

    handleBtnToggle("click-transactions")


    const transactionContainer = document.getElementById("transaction-card")

    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")

        div.innerHTML= `
        <div class="flex justify-between items-center p-4 rounded-2xl mt-3 border-1 solid border-gray-200 bg-white">
          <div class="flex items-center gap-3">

          <div class="p-3 rounded-full bg-[#08080815]">
            <img src="./assets/wallet1.png" alt="">
          </div>

          <div>
            <h2 class="font-semibold text-[16px]">${data.name}</h2>
            <p class="text-[#08080876] text-[12px]">${data.date}</p>
          </div>
          
        </div>
            <div><i class="fa-solid fa-ellipsis rotate-90"></i></div>
      </div>
        `

        transactionContainer.appendChild(div)
    }
})