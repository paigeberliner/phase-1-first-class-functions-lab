
const returnFirstTwoDrivers = function(){
   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
   return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2)
 }

 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ]

 function createFareMultiplier(){
    let fareAmount = 5;
    const fareMultiplier = fareAmount
    return function(){
        return fareAmount * fareMultiplier
    }
 }

 function fareDoubler(createFareMultiplier){
    let fareAmount = 10;
    const fareDoubler = 2;
    return fareAmount * fareDoubler
}
function fareTripler(){
    let fareAmount = 12;
    const fareTripler = 3;
    return fareAmount * fareTripler;
}

function selectDifferentDrivers(drivers, selectingDrivers){
    if(selectingDrivers === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    }
    else {
        return drivers.slice(-2)
    }
}


    

  

