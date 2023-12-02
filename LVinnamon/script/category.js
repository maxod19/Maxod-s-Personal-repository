const button = document.getElementById("drinkLink");
button.addEventListener("click", hideFood)

const button1 = document.getElementById("foodLink");
button1.addEventListener("click", hideDrink)

const button2 = document.getElementById("allLink");
button2.addEventListener("click", hideDrink)

function hideFood(){

    console.log("test");
    var a = document.getElementById("food-con");
    a.style.display = "none";

    var b = document.getElementById("drink-con");
    b.style.display = "block";
    
}

function hideDrink(){ 

    console.log("test");
    var a = document.getElementById("drink-con");
    a.style.display = "none";

    var b = document.getElementById("food-con");
    b.style.display = "block";
    
}

function showAll(){
    var a = document.getElementById("food-con");
    a.style.display = "block";
    
    var a = document.getElementById("drink-con");
    a.style.display = "block";

}