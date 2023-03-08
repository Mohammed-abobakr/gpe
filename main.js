

// Variables
let contentContainer = document.getElementById("content-container");
let bgStyles = document.getElementById("bg-styles");
let picPro = document.getElementById("profile-socials");
let theContentContainer = document.querySelector(".content-container");

    picPro.onchange = function () {
        let meas = picPro[picPro.selectedIndex].innerHTML;
        console.log(meas);
    }
    
document.getElementById("upload").onchange = function(ele){ 
    var theImage = document.getElementById("outputimage");
    theImage.setAttribute("src", URL.createObjectURL(ele.target.files[0])),
    theImage.onload=function(){URL.revokeObjectURL(theImage.style)}},


    document.getElementById("create-img").onclick = function() {
        html2canvas(theContentContainer).then(element=> {
        document.getElementById("canvas").appendChild(element);
    }),
    document.querySelector(".tombol-download").style.display = "block",
    document.querySelector("#sucessImage").style.display = "block"},
    document.getElementById("reset-image").onclick=function() {
        document.getElementById("canvas").innerHTML = "",
    document.querySelector(".tombol-download").style.display= "none",
    document.querySelector("#sucessImage").style.display="none"
    
},


    // download pic
    document.getElementById("download-image").onclick = function() {

        var e = "Expert Profile Picture";
        console.log(e);
        var t = document.createElement("a");
            t.download = e +".png",
            t.href=document.querySelector("canvas").toDataURL(),
            // console.log(t)
            t.click()
        };

    // change lavels
        $("#bg-styles").data("oldVal", $("#bg-styles").val());
        $("#bg-styles").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#content-container").removeClass(c).addClass(b);
        });

    //change socials
        $("#profile-socials").data("oldVal", $("#profile-socials").val());
        $("#profile-socials").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#background").removeClass(c).addClass(b);
        });

    //change shapes
        $("#shapes").data("oldVal", $("#shapes").val());
        $("#shapes").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#content-container").removeClass(c).addClass(b);
            $("#background").removeClass(c).addClass(b);
        });
        // scale image
        let theScales = document.getElementById("scales");
        $("#scales").data("oldVal", $("#scales").val());
        $("#scales").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#outputimage").removeClass(c).addClass(b);
        });

        // translate image
        $("#translates").data("oldVal", $("#translates").val());
        $("#translates").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $(".img-container").removeClass(c).addClass(b);
        });

        theShape = document.getElementById("shapes");
        theShape.onchange = function() {

            if (theShape[theShape.selectedIndex].value === "shape1"){
                console.log("d");
                var rade = "50%"
                document.querySelector("#content-container::after").style.borderRadius=rad;
            }
        }

    //details
    let theDeta = document.getElementById("deta");
    let theLevelHere = document.getElementById("level-here");
    let theSocailsHere = document.getElementById("socails-here");
    bgStyles.onchange = function(){
        document.querySelector(".responsive-img .info").style.display="block"
        theLevelHere.innerHTML = bgStyles[bgStyles.selectedIndex].innerHTML;
    }
    picPro.onchange = function() {
        theSocailsHere.innerHTML = "ل" + picPro[picPro.selectedIndex].innerHTML;
    }

let theRang = document.getElementById("vol");
theRang.onchange = function (){
        var x0 = theRang.value;
        var x1 = x0 / 10;
        var x = `scale(${x1})`;
        console.log(x1);
        document.getElementById("outputimage").style.transform = x;
    }

  let theIncrease = document.getElementById("increase");
  theIncrease.onclick = function() {
    theDecVal = document.getElementById("number").value++;
    var x = `${theDecVal}%`;
    document.getElementById("outputimage").style.top = x;
  }

let theDecrease = document.getElementById("decrease");
theDecrease.onclick = function(){
    theDecVal = document.getElementById("number").value--;
    var x = `${theDecVal}%`;
    document.getElementById("outputimage").style.top = x; 
}

document.getElementById("increase-but").onclick = function () {
    theVal = document.getElementById("thenumber").value++;
    let Y = `${theVal}%`
    document.querySelector("img#outputimage").style.left = Y;
}
document.getElementById("decrease-but").onclick = function () {
    theInc = document.getElementById("thenumber").value--;
    let Y = `${theInc}%`;
    document.querySelector("img#outputimage").style.left = Y;
}
let theUpImages = document.getElementById("upimages");
let theBgImg = document.getElementById("bgimg");

theBgImg.onchange = function() {
    theUpImages.setAttribute("src", theBgImg[theBgImg.selectedIndex].value)
}