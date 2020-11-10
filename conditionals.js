
var  clickCounter =0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard);

    function countClick(event) {
        event.preventDefault();


        //function countClick() {
        // Increment a variable that tracks the
        // number of button clicks

        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"

        // When the count gets to 10, reset it to 0


        clickCounter++;

        $("#clickCountOutput").text(clickCounter);

        if(clickCounter === 10 )
        {

            clickCounter = 0;
        }

    }



    function checkAge(event) {
        event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"

        var year = parseInt($("#birthYear").val());

        var age = 2020 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        if(age<18){
            $("#birthYearOutput").text("Child");
        }
        else{
            $("#birthYearOutput").text("Adult");
        }

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchase = parseFloat($("#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        var state = ($("#state").val());

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        switch (state) {
            case 'WI':
                $("#salesTaxOutput").text(purchase*.05);
                break;
            case 'IL':
                $("#salesTaxOutput").text(purchase*.08);
                break;
            case 'MN':
                $("#salesTaxOutput").text(purchase*.075);
                break;
            case 'MI':
                $("#salesTaxOutput").text(purchase*.055);
                break;
            default:
                alert('error');
        }

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();
        // Get the cat's age from the text box with
        // ID of "catAge"
        var cat = parseInt($("#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(cat <2 ) {
            $("#catAgeOutput").text("kitten chow");
        }
        if(cat >= 2 && cat <= 10){
            $("#catAgeOutput").text("adult chow");
        }
        else {
            $("#catAgeOutput").text("senior chow");
        }

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

         var card = ($("#drawCardButton").val(faceValue));

        switch (card) {
            case 1:
                $("drawCardOutput").text("ACE");
                break;
            case 2:
                $("drawCardOutput").text("2");
                break;
            case 3:
                $("drawCardOutput").text("3");
                break;
            case 4:
                $("drawCardOutput").text("4");
                break;
            case 5:
                $("drawCardOutput").text("5");
                break;
            case 6:
                $("drawCardOutput").text("6");
                break;
            case 7:
                $("drawCardOutput").text("7");
                break;
            case 8:
                $("drawCardOutput").text("8");
                break;
            case 13:
                $("drawCardOutput").text("9");
                break;
            case 9:
                $("drawCardOutput").text("10");
                break;
            case 10:
                $("drawCardOutput").text("Jack");
                break;
            case 11:
                $("drawCardOutput").text("Queen");
                break;
            case 12:
                $("drawCardOutput").text("King");
                break;
            default:
                alert('error');
        }



        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});