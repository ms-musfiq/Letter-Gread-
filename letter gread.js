// @ms-musfiq

var num = prompt("Enter Your Marks Here :");

if(num < 0 || num > 100)
    alert("Enter number 1-100, void negative number");

else if(num >= 80)
    document.write("A+");

else if(num >= 70)
    document.write("A");

else if(num >= 60)
    document.write("A-");

else if(num >= 50)
    document.write("B");

else if(num >= 40)
    document.write("C");

else if(num >= 33)
    document.write("D");

else
    document.write("Fail");

    