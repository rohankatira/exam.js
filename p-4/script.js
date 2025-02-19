function Grade_calculate(avg){

    if(avg >= 90 && avg <= 100){
        console.log("Your grade is:- Grade A");

    }
    else if(avg >= 80 && avg <= 89){
        console.log("Your grade is:- Grade B");
    }
    else if(avg >= 70 && avg <= 79){
        console.log("Your grade is:- Grade C");
    }
    else if (avg >= 60 && avg <= 69){
        console.log("Your grade is:- Grade D");
    }
    else {
        console.log("You are Fail Better luck next time");
        
    }

}

let grade = prompt("enter the value: ");
console.log("The grade enterd by the usear is:-",grade+" %");
let result = Grade_calculate(grade);

