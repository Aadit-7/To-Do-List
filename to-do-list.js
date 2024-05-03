let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){

    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add(".delete")

    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = " ";
    item.appendChild(delBtn);

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;  //****************
        listItem.remove();
        console.log("Deleted");
    };
    
});


let ip2 = document.querySelector(".ip2");
let btn2 = document.querySelector(".btn2");
let ul2 = document.querySelector(".ul2");

btn2.addEventListener("click", function(){
    let item2 = document.createElement("li");
    item2.innerText = ip2.value;

    let delBtn2 = document.createElement("button");
    delBtn2.innerText = "Delete";
    delBtn2.classList.add(".delete2");


    ul2.appendChild(item2);
    item2.appendChild(delBtn2);
    ip2.value = " " ;
})

ul2.addEventListener("click", function(event){

    if(event.target.nodeName == "BUTTON"){

        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted !")

    }

})


