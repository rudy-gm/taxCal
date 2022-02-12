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

    //Arkansas State



    //Arizona State

    if(state = "AZ"){

        if(grossIncome <= 27808){

            stateTax = .0259;
        }
        else if((grossIncome >27808)&&(grossIncome <= 55615)){

            stateTax = .0334;
        }
        else if((grossIncome > 55615)&&(grossIncome <= 166843)){

            stateTax = .0417;
        }
        else if((grossIncome >166843)&&(grossIncome <= 250000)){

            stateTax = .045;
        }
        else{ stateTax = .01;}
    }

    //California State

    if(state = "CA"){

        if(grossIncome <= 9325){

            stateTax = 0.01;
        }
        else if((grossIncome >9325)&&(grossIncome <= 22107)){

            stateTax = 0.02; 
        }
        else if((grossIncome > 22107)&&(grossIncome <=34892)){

            stateTax = 0.04; 
        }
        else if((grossIncome > 34892)&&(grossIncome <=48435)){

            stateTax = 0.06;
        }
        else if((grossIncome > 48435)&&(grossIncome <=61214)){

            stateTax = 0.08; 
        }
        else if((grossIncome >61214)&&(grossIncome <=312686)){

            stateTax = 0.093;
        }
        else if((grossIncome >312686)&&(grossIncome <=375221)){

            stateTax = 0.103;
        }
        else if((grossIncome >375221)&&(grossIncome <= 625369)){

            stateTax = 0.113;
        }
        else{ stateTax = 0.123; }
    }

    return stateTax


}


///////////////////////////////////
//Federal Tax Function

let netIncome = ""

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

    console.log(grossIncome +" and "+ state);


    return netIncome;

 
}



calculateButton.addEventListener('click', taxation);
