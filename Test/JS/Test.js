function myFunction(x) {
    x.classList.toggle("change");
}
function check(){
    var answers = {"1","2","3","4","5","6","7","8","9",'10','11','12','13','14','15','16','17','18','19','20'};
    var usersanswers = {
        getElementById("question1").value,
        getElementById("question2").value,
        getElementById("question3").value,
        getElementById("question4").value,
        getElementById("question5").value,
        getElementById("question6").value,
        getElementById("question7").value,
        getElementById("question8").value,
        getElementById("question9").value,
        getElementById("question10").value,
        getElementById("question11").value,
        getElementById("question12").value,
        getElementById("question13").value,
        getElementById("question14").value,
        getElementById("question15").value,
        getElementById("question16").value,
        getElementById("question17").value,
        getElementById("question18").value,
        getElementById("question19").value,
        getElementById("question20").value,
    }
    var trueFlase;
    for(var i = 0; i<=20; i+=1)
    {
        trueFalse[i] = false;
    }
    for(var i = 0; i<=20; i+=1){
        if(answers[i] == usersanswers[i]){
            trueFalse[i] = true;
        }
    }
    var count = 0;
    for(var i = 0; i<=20; i++)
    {
        if(trueFalse == true)
        {
            count+=1;
        }
    }
    alert("You have got ${count} out of 20 questions right!")

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
        document.getElementById("loi-chao").innerHTML = "Good Evening"
    }
    document.getElementById("Date").innerHTML = date;
    document.getElementById("Time").innerHTML = time;
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
