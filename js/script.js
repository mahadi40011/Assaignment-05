// global variable
const callHistoryList = []

// function to copy number and paste
function copy(id, value){
    document.getElementById(id).addEventListener('click', function(){
        navigator.clipboard.writeText(value).then(function(){
            alert('copied')
            return
        })
        .catch(function(){
            alert('Failed to Copy')
            return
        })
    })
}

copy('emergency-number-copy', '999')
copy('police-helpline-number-copy', '999')
copy('fire-service-number-copy', '999')
copy('ambulance-service-number-copy', '1994-999999')
copy('women-child-helpline-copy', '109')
copy('anti-corruption-helpline-copy', '106')
copy('electricity-helpline-copy', '16216')
copy('brac-helpline-copy', '16445')
copy('railway-helpline-copy', '163')

// copy button count 
const copyButtons = document.getElementsByClassName('copy-btn')
let copyCount = 0
for(const copybtn of copyButtons ){
    copybtn.addEventListener("click", function(){
        copyCount++
        document.getElementById('copy-count').innerText = copyCount
    })
}

// heart button count 
const heartButtons = document.getElementsByClassName('heart')
let heartCount = 0
for(const heartbtn of heartButtons ){
    heartbtn.addEventListener("click", function(){
        heartCount++
        document.getElementById('heart-count').innerText = heartCount
    })
}

// fanction to call alert
function call(id, message, cardTitle, number){
    const callBtns = document.getElementById(id)
    callBtns.addEventListener('click', function(){
        let availableCoin = parseInt(document.getElementById('coin-count').innerText)
        if(availableCoin >= 20){
            alert(message)
            newAvailableCoin = availableCoin - 20
            document.getElementById('coin-count').innerText = newAvailableCoin
        } 
        else{
            alert('You have not enough coin for the Call')
        }

        const callCard = {
            name: cardTitle,
            service: number,
            date: new Date().toLocaleTimeString()
        } 

        callHistoryList.unshift(callCard)
    })
}

call('emergency-number-call', "Calling National Emergency Service 999... ", "National Emergency Service", '999')
call('police-helpline-call', 'Calling Police Helpline Number 999...', 'Police Helpline', '999')
call('fire-service-call', 'Calling Fire Service Number 999...', 'Fire Service', "999")
call('ambulance-service_call', "Calling Ambulance Service 1994-999999...", 'Ambulance Service', '1994-999999')
call("women-child-call", "Calling Women and Child Helpline 109...", "Women and Child Helpline", '109')
call('anti-corruption-helpline-call', 'Calling Anti Corruption Helpline 106...', 'Anti-Corruption Helpline', '106')
call('electricity-helpline-call', 'Calling Electricity Helpline 16216...', 'Electricity Helpline', "16216")
call("brac-helpline-call", 'Calling Brac Helpline 16445...', "Brac Helpline", "16445")
call('railway-helpline-call', 'Calling Railway Helpline Number 163...', 'Bangladesh Railway Helpline', '163')





