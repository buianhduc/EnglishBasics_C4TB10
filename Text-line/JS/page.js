document.addEventListener('DOMContentLoaded', function(){
    var properties = document.getElementById("ReadMode");
    var propertiesBool = false;
    properties.addEventListener("click",function(){
        var foo = document.getElementById("change-menu");
        if(propertiesBool == false)
        {
            foo.style.display = "block";
            propertiesBool = true;
        }
        else{
            foo.style.display = "none";
            propertiesBool = false;
        }
    })
    var PlusAaBtn = document.getElementById("AaPlus");
    PlusAaBtn.addEventListener("click", function() {
        var obj = document.getElementById("text");
        style = window.getComputedStyle(obj, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        obj.style.fontSize = (currentSize + 1) +'px';
    })
    var MinusAaBtn = document.getElementById("AaMinus");
    MinusAaBtn.addEventListener("click", function() {
        var obj = document.getElementById("text");
        style = window.getComputedStyle(obj, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        obj.style.fontSize = (currentSize - 1) +'px';
    })
    var whiteBtn = document.getElementById("White");
    whiteBtn.addEventListener("click",function() {
        var obj = document.getElementsByTagName("body")[0];
        obj.style.backgroundColor = "white";
        obj.style.color = "black";
        for(var i=0; i<=4; i+=1)
        {
            document.getElementsByTagName("button")[i].style.borderColor = "white";
        }
        
    })
    var blackBtn = document.getElementById("Black");
    blackBtn.addEventListener("click",function() {
        var obj = document.getElementsByTagName("body")[0];
        obj.style.backgroundColor = "black";
        obj.style.color = "white";
        for(var i=0; i <= 4; i+=1)
        {
            document.getElementsByTagName("button")[i].style.borderColor = "black";
        }
    })
    var SepiaBtn = document.getElementById("Sepia");
    SepiaBtn.addEventListener("click",function() {
        var obj = document.getElementsByTagName("body")[0];
        obj.style.backgroundColor = "rgb(252,241,214)";
        obj.style.color = "rgb(98,75,45)";
        for(var i=0; i <= 3; i+=1)
        {
            document.getElementsByTagName("button")[i].style.borderColor = "rgb(252,241,214)";
        }
    })

    // var lineSpacing = document.getElementById("lineSpacing");
    // console.log(lineSpacing)
    // lineSpacing.addEventListener("click", function(){
    //     var obj = document.getElementById("text");
    //     style = window.getComputedStyle(obj, null).getPropertyValue('line-height');
    //     currentSize = parseFloat(style);
    //     console.log(currentSize);
    //     obj.style.lineHeight = currentSize*(lineSpacing.value/1000);
    //     console.log(obj.style.lineHeight)

    // })
})