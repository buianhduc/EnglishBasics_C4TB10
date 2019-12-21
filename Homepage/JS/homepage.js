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
