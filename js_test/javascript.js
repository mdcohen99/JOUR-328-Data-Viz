//define the variables
var headlineArray = ["next headline", "another headline", "yet another headline", "final headline"];
var headlineIndex = 0;
var headlineLength = headlineArray.length;
var myLoop = setInterval(changeHeadline, 1000);

//write function
function changeHeadline() {
    var headlineElement = document.getElementById("headline"); // Fixed typo
    var newHeadline = headlineArray[headlineIndex];
    headlineElement.innerHTML = newHeadline;
    headlineIndex++;
    if (headlineIndex >= headlineLength) {
        headlineIndex = 0; // Reset to loop indefinitely
    }
}

//run function
window.onload = function() {
    myLoop; // Start the interval
};