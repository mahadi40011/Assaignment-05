// global variable
const callHistory = []

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

