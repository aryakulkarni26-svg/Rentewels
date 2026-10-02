function chooseColour(colour) {

    localStorage.setItem("selectedColour", colour);

    alert("You selected " + colour + " jewellery.");

    window.location.href = "booking.html";
}


window.onload = function() {

    let selectedColour = localStorage.getItem("selectedColour");


    let colourBox = document.getElementById("colour");

    if (selectedColour && colourBox) {
        colourBox.value = selectedColour;
    }

};


function bookNow() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let colour = document.getElementById("colour").value;
    let date = document.getElementById("date").value;
    let days = document.getElementById("days").value;

    if (name == "" || mobile == "" || colour == "" || date == "") {

        alert("Please fill all the details.");

        return;
    }

    if (mobile.length != 10 || isNaN(mobile)) {

        alert("Please enter a valid 10 digit mobile number.");

        return;
    }

    days = Number(days);

    let rental = days * 100;
    let security = 100;
    let total = rental + security;

    alert(
        "Booking Confirmed!\n\n" +
        "Name: " + name +
        "\nColour: " + colour +
        "\nDays: " + days +
        "\nRental: ₹" + rental +
        "\nRefundable Security: ₹" + security +
        "\nTotal Advance: ₹" + total
    );

}


function loginUser() {

    let mobile = document.getElementById("loginMobile").value;
    let password = document.getElementById("password").value;

    if (mobile == "" || password == "") {

        alert("Please enter mobile number and password.");

        return;
    }

    if (mobile.length != 10 || isNaN(mobile)) {

        alert("Please enter a valid 10 digit mobile number.");

        return;
    }

    alert("Login successful!");

}