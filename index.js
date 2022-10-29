var selectedNumber = "0";

for (var i = 0; i < document.querySelectorAll(".div-buttons button").length; i++){
    document.querySelectorAll(".div-buttons button")[i].addEventListener("click", clickNumber);
}

function clickNumber(){
    selectedNumber = this.innerHTML;
    for (var i = 0; i < document.querySelectorAll(".div-buttons button").length; i++){
        document.querySelectorAll(".div-buttons button")[i].style.backgroundColor = "hsl(216, 12%, 22%)";
        document.querySelectorAll(".div-buttons button")[i].style.color = "hsl(217, 12%, 63%)";
    }
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "white";
}

document.querySelector(".submit-button").addEventListener("click",clickSubmit);

function clickSubmit(){
    /*console.log("Submit clicked!");*/
    if (selectedNumber != 0){
        document.querySelector(".you-selected").innerHTML = "<p>You selected " + selectedNumber + " out of 5</p>";
        document.querySelector("#rating-state").style.display = "none";
        document.querySelector("#thank-you-state").style.display = "block";
    }

}