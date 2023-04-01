// Code your solution in this file!
//argument street === streetnumber of destination
function distanceFromHqInBlocks(street){
        if (street >= 42) {
        //calculate the distance from 42nd street 
        return street - 42;
    }
    // If destination street number is less than 42
    // Calculates the distance by subtracting the destination street number from 42
    else {
        return 42 - street;
    }
}
function distanceFromHqInFeet(blocks){
    //Assuming that each block is 264 feet long
    const feetPerBlock = 264;
    //calculate distance from the headquarters to the destination in feet by multiplying the number of blocks by 264
    const distance = Math.abs(blocks - 42) * feetPerBlock;
    //return blocks * feetPerBlock;
    return distance;
}
function distanceTravelledInFeet(startBlock, endBlock){
    // one New York City block is equal to 264 feet
    const blockLength = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * blockLength;
}
function  calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    let farePrice;
    if(distance < 400){
        farePrice = 0;
    }else if(distance > 400 && distance <= 2000){
        farePrice = (distance - 400) * 0.02;
    }else if(distance > 2000 && distance <= 2500){
        farePrice = 25;
    }else{
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}