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

// First Name displayer function

function firstNameDisplay() {

    const customerNameModal = document.querySelector("#customerName");

    const firstName = document.querySelector("#fname");

    if (firstName) {
        customerNameModal.textContent = `${firstName.value.toUpperCase()}`;
    }
    else {
        customerNameModal.textContent = "Username";
    }

}

const calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener('click', firstNameDisplay);


//////Tax substraction functions//////

//State Tax Function



function stateTaxPercentage(state, grossIncome) {

    //Alabama State

    if (state = "AL") {

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

    return stateTax
}

//Federal Tax Function

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


    return netIncome;

}




