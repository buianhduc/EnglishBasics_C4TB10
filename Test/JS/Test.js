function myFunction(x) {
    x.classList.toggle("change");
}
function checkAnswers(){
    var questions = [
        {
            "question":document.getElementById("question-1"),
            "answer":"1",
            "userAnswer":document.getElementById("question1").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-2"),
            "answer":"2",
            "userAnswer":document.getElementById("question2").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-3"),
            "answer":"3",
            "userAnswer":document.getElementById("question3").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-4"),
            "answer":"4",
            "userAnswer":document.getElementById("question4").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-5"),
            "answer":"5",
            "userAnswer":document.getElementById("question5").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-6"),
            "answer":"6",
            "userAnswer":document.getElementById("question6").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-7"),
            "answer":"7",
            "userAnswer":document.getElementById("question7").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-8"),
            "answer":"8",
            "userAnswer":document.getElementById("question8").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-9"),
            "answer":"9",
            "userAnswer":document.getElementById("question9").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-10"),
            "answer":"10",
            "userAnswer":document.getElementById("question10").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-11"),
            "answer":"11",
            "userAnswer":document.getElementById("question11").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-12"),
            "answer":"12",
            "userAnswer":document.getElementById("question12").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-13"),
            "answer":"13",
            "userAnswer":document.getElementById("question13").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-14"),
            "answer":"14",
            "userAnswer":document.getElementById("question14").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-15"),
            "answer":"15",
            "userAnswer":document.getElementById("question15").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-16"),
            "answer":"16",
            "userAnswer":document.getElementById("question16").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-17"),
            "answer":"17",
            "userAnswer":document.getElementById("question17").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-18"),
            "answer":"18",
            "userAnswer":document.getElementById("question18").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-19"),
            "answer":"19",
            "userAnswer":document.getElementById("question19").value,
            "check":false,
        },
        {
            "question":document.getElementById("question-20"),
            "answer":"20",
            "userAnswer":document.getElementById("question20").value,
            "check":false,
        },
        
    ];
    for(var i = 0; i<questions.length; i++)
    {
        console.log(questions[i]);
    }

    for(var i=0; i<questions.length; i++){
        var question = questions[i];
        if(question.answer == question.userAnswer){
            question.check = true;
        }
    }
    var count = 0;
    for(var i=0; i<questions.length; i++){
        var question = questions[i];
        if(question.check==true){
            count++;
        }
    }
    alert(`You have got ${count} out of 20 questions right!`)

}
function ShowDateAndTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = Date();

    time = JSON.stringify(time);
    time = time.slice(17,26)
    
    if(today.getHours()>5 && today.getHours()<12){
        document.getElementById("loi-chao").innerHTML = "Good Morning";
    }
    else if(today.getHours>12 && today.getHours<3){
        document.getElementById("loi-chao").innerHTML = "Good Noon";
    } 
    else{
        document.getElementById("loi-chao").innerHTML = "Good Evening";
    }

    setTimeout(ShowDateAndTime,1000)
}
ShowDateAndTime()

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var check = false;

function myFunction(x) {
    x.classList.toggle("change");
    if (check == true){
        closeNav();
        check = false
    }
    else{
        openNav();
        check = true;
    }
}
console.log('done')