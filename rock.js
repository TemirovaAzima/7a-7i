function playGame(userChoice){

    const computerOne=  computerMove()

     if(userChoice === 'tosh'){
         let result = ''

         if(computerOne === 'Tosh'){
             result = 'Teng'
         }
         else if(computerOne === 'Qog\'oz'){
             result = ' Yutqazdingiz'
         }
         else if(computerOne === 'Qaychi'){
             result = 'G\'alaba qozondingiz'
         }
         alert(
             `Siz ${userChoice} tanladingiz. Komputer esa ${computerOne} tanladi.Natijada esa ${result}`
         )
     }else if(userChoice === 'qaychi'){
         let result = ''
         if(computerOne === 'Tosh'){
             result = 'Yutqazdingiz'
         }
         else if(computerOne === 'Qog\'oz'){
             result = 'G\'alaba qozondingiz'
         }
         else if(computerOne === 'Qaychi'){
             result = 'Teng'
         }
         alert(
             `Siz  ${userChoice} tanladingiz. Komputer esa ${computerOne} tanladi.Natijada esa ${result}`
         )
     }else if(userChoice === 'qog\'oz'){
         let result = ''
         if(computerOne === 'Tosh'){
             result = 'G\'alaba qozondingiz'
         }
         else if(computerOne === 'Qog\'oz'){
             result = 'Teng'
         }
         else if(computerOne === 'Qaychi'){
             result = 'Yutqazdingiz'
         }
         alert(
             `Siz  ${userChoice} tanladingiz. Komputer esa ${computerOne} tanladi.Natijada esa ${result}`
         )
     }
}

function computerMove(){
    const randomNumber = Math.random()
    let computer = ''

    if(randomNumber >= 0 && randomNumber <1/3){
        computer = ('Tosh')
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computer = ('Qog\'oz')
    }else if (randomNumber >= 2/3 && randomNumber < 1){
        computer = ('Qaychi')
    }
    return computer
}