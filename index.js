// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
if ((blocks) < 42) {
    return (42-blocks);
} else {
    return (blocks-42);
}
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(x,y) {
    if (x >y) {
        return ((x-y)*264);
    } else {
        return ((y-x) *264);
    }
}

function calculatesFarePrice(x,y) {
let feet = distanceTravelledInFeet(x,y);

if (feet <= 400) {
    return 0
} else if (feet > 400 && feet <= 2000 ) {
    return (feet-400)*.02
} else if (feet > 2000 && feet <= 2500) {
    return 25
}
else ( feet > 2500)
return "cannot travel that far";
}