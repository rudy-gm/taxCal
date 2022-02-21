//JQuery

$(function () {

    //Tax Modal

    $("#calculateButton").click(function () {
        $("#taxResultModal").modal("show")
    });


    // Test login modal -- delete soon 
    $("#loginButton").click(function () {
        $("#loginModal").modal("show")
    });

});

//Tabs

$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
});

// First Name displayer function

function firstNameDisplay() {

    const customerNameModal = document.querySelector("#customerName");
    const customerNamePop = document.querySelector("#customerNamePop");


    const firstName = document.querySelector("#fname");

    if (firstName) {
        customerNameModal.textContent = `${firstName.value.toUpperCase()}`;
        customerNamePop.textContent = `${firstName.value.toUpperCase()}`;
    }
    else {
        customerNameModal.textContent = "Username";
        customerNamePop.textContent = "Username";

    }

}

const calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener('click', firstNameDisplay);
calculateButton.addEventListener('click', popUpDisplayer);

//Tax result Pop-up Displayer

function popUpDisplayer() {

    document.querySelector("#taxResultPopUp").style.display = "block";
}



//////Tax substraction functions//////

//State Tax Function

let stateTax = "";

function stateTaxPercentage(state, grossIncome) {

    //Alabama State

    if (state === "AL") {

        if (grossIncome <= 500) {

            stateTax = .02;
        }
        else if ((grossIncome > 500) && (grossIncome <= 2500)) {

            stateTax = .04;
        }
        else {
            stateTax = .05;
        }
    }

    //Alaska State (No State Tax)

    if (state === "AK") {

        stateTax = 0;
    }

    //Arkansas State



    //Arizona State

    if (state === "AZ") {

        if ((grossIncome >= 0) && (grossIncome <= 27808)) {

            stateTax = .0259;
        }
        else if ((grossIncome > 27808) && (grossIncome <= 55615)) {

            stateTax = .0334;
        }
        else if ((grossIncome > 55615) && (grossIncome <= 166843)) {

            stateTax = .0417;
        }
        else if ((grossIncome > 166843) && (grossIncome <= 250000)) {

            stateTax = .045;
        }
        else { stateTax = .01; }
    }

    //California State

    if (state === "CA") {

        if (grossIncome <= 9325) {

            stateTax = 0.01;
        }
        else if ((grossIncome > 9325) && (grossIncome <= 22107)) {

            stateTax = 0.02;
        }
        else if ((grossIncome > 22107) && (grossIncome <= 34892)) {

            stateTax = 0.04;
        }
        else if ((grossIncome > 34892) && (grossIncome <= 48435)) {

            stateTax = 0.06;
        }
        else if ((grossIncome > 48435) && (grossIncome <= 61214)) {

            stateTax = 0.08;
        }
        else if ((grossIncome > 61214) && (grossIncome <= 312686)) {

            stateTax = 0.093;
        }
        else if ((grossIncome > 312686) && (grossIncome <= 375221)) {

            stateTax = 0.103;
        }
        else if ((grossIncome > 375221) && (grossIncome <= 625369)) {

            stateTax = 0.113;
        }
        else { stateTax = 0.123; }
    }

    //Florida State (No State Tax)

    if (state === "FL") {

        stateTax = 0;
    }

    //Nevada State (No State Tax)

    if (state==="NV"){

        stateTax = 0; 
    }

    //New Hampshire State (No State Tax)

    if(state ==="NH"){

        stateTax = 0;
    }

    //South Dakota State (No State Tax)

    if(state==="SD"){

        stateTax = 0; 
    }

    //Tennessee State (No State Tax)

    if(state==="TN"){

        stateTax = 0;
    }

    //Texas State (No State Tax)

    if (state === "TX"){

        stateTax = 0; 
    }

    //Washington State (No State Tax)

    if (state ==="WA"){

        stateTax = 0;
    }

    //Wyoming State (No State Tax)

    if(state ==="WY"){

        stateTax= 0;
    }

    return stateTax


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Federal Tax Function

let netIncome = "";
let totalTax = "";


function taxation(state, grossIncome) {

    //Federal Tax Brackets 

    if ((grossIncome >= 0) && (grossIncome <= 9950)) {

        federalTaxBracket = .10;
    }
    else if ((grossIncome > 9950) && (grossIncome <= 40525)) {

        federalTaxBracket = .12;
    }
    else if ((grossIncome > 40525) && (grossIncome <= 86375)) {

        federalTaxBracket = .22;
    }
    else if ((grossIncome > 86375) && (grossIncome <= 164925)) {

        federalTaxBracket = .24;
    }
    else if ((grossIncome > 164925) && (grossIncome <= 209425)) {

        federalTaxBracket = .32;
    }
    else if ((grossIncome > 209425) && (grossIncome <= 523600)) {

        federalTaxBracket = .35;
    }
    else {
        federalTaxBracket = .37;
    }



    //Federal Tax Formula
    let totalTax = (grossIncome * (federalTaxBracket + stateTaxPercentage(state, grossIncome)));


    //Net Income Formula
    let netIncome = grossIncome - totalTax;

    //results array
    let taxResults = [totalTax, federalTaxBracket, stateTax]

    return taxResults;



}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Display Taxes on Modal and PopUp Function

let statesList = document.querySelector("#statesList");

function taxationDisplay() {

    let state = statesList.value;

    let grossIncome = document.querySelector("#annualIncome").value;

    let taxOwedModal = document.querySelector("#taxOwedModal");
    let taxOwedPop = document.querySelector("#taxOwedPop");

    let federalPercentagePop = document.querySelector("#federalPercentagePop");

    let statePercentagePop = document.querySelector("#statePercentagePop");


    let taxationResultsArray = taxation(state, grossIncome);

    taxOwedModal.textContent = "$" + Math.floor(taxationResultsArray[0]);
    taxOwedPop.textContent = "$" + Math.floor(taxationResultsArray[0]);

    federalPercentageModal.textContent = taxationResultsArray[1] * 100;
    federalPercentagePop.textContent = taxationResultsArray[1] * 100;

    statePercentageModal.textContent = taxationResultsArray[2] * 100;
    statePercentagePop.textContent = taxationResultsArray[2] * 100;

    console.log(taxation(state, grossIncome));


}

//State Selected Display function

function showState() {

    let stateChosed = statesList.options[statesList.selectedIndex].text;

    let fullNameStateModal = document.querySelector("#fullNameStateModal");
    let fullNameStatePop = document.querySelector("#fullNameStatePop");

    fullNameStateModal.textContent = stateChosed;
    fullNameStatePop.textContent = stateChosed;
}



//Event Listeners 

calculateButton.addEventListener('click', taxationDisplay);
calculateButton.addEventListener('click', showState);



