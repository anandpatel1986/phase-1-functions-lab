// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    return Math.abs(pickUpLocation-42);        // returns distance from Hq in blocks
}

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264;    // returns distance in feet
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    return (Math.abs(destinationBlock-startBlock) * 264);   // returns distance travelled in feet after converting block to feet
}

function calculatesFarePrice(startBlock, destinationBlock){

    const distanceTravelled = distanceTravelledInFeet(startBlock, destinationBlock); // will get distance in feet from invoking above function
    if(distanceTravelled < 400){
        return 0;               // will return 0 dollar if distance in feet is below 400 feet
    }  
    else if (distanceTravelled >= 400 && distanceTravelled < 2000){
        return ((distanceTravelled-400) * 0.02);    // charges 2 cents per foot when total feet travelled is between 400 and 2000, excluding first 400 feet as it is free 
    }  
    else if (distanceTravelled >= 2000 && distanceTravelled < 2500){
        return 25;              // charges 25 dollars for a distance over 2000 feet but below 2500 feet
    }
    else if (distanceTravelled >= 2500) {
        return 'cannot travel that far';     // does not allow rides over 2500 feet
    }

}