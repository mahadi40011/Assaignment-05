// global variable
// const callHistoryList = []

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
function call(id, message){
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
    })
}

call('emergency-number-call', "Calling National Emergency Service 999... ")
call('police-helpline-call', 'Calling Police Helpline Number 999...')
call('fire-service-call', 'Calling Fire Service Number 999...')
call('ambulance-service_call', "Calling Ambulance Service 1994-999999...")
call("women-child-call", "Calling Women and Child Helpline 109...")
call('anti-corruption-helpline-call', 'Calling Anti Corruption Helpline 106...',)
call('electricity-helpline-call', 'Calling Electricity Helpline 16216...')
call("brac-helpline-call", 'Calling Brac Helpline 16445...')
call('railway-helpline-call', 'Calling Railway Helpline Number 163...')

// call history card all
const btns = document.querySelectorAll('.call-btn')
for(const btn of btns){
    btn.addEventListener('click', function(e){
        const card = e.currentTarget.closest('.card')
        const firstH2Text = card.querySelector("h2").innerText;
        const firstH1Text = card.querySelector("h1").innerText;

        const obj = {
            title: firstH2Text,
            number: firstH1Text,
            date: new Date().toLocaleTimeString()
        }
        // callHistoryList.push(obj)
        callHistory(obj)
        // console.log(callHistoryList)
    })
}

//call history card function
let demo = 100
function callHistory(obj){
    if(demo >= 20){
        const cardContainer = document.getElementById('card-container')
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="flex justify-between items-center bg-gray-50 shadow-md px-4 py-2 mt-3 rounded-lg">
                <div>
                    <h1 class="font-bold text-xs xl:text-lg">${obj.title}</h1>
                    <p class="text-gray-500 text-[10px] xl:text-base">${obj.number}</p>
                </div>
                <p class="text-gray-500 text-[10px] xl:text-base">${obj.date}</p>
            </div>
        `
        cardContainer.appendChild(div)
        demo = demo - 20
        console.log(demo)
    }
    
}


// call history clear js
document.getElementById("call-history-clear-btn").addEventListener("click", function(){
    alert('You want to delete all History ?')
    document.getElementById("card-container").innerHTML = ''
})