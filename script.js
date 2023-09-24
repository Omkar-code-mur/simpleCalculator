(function() {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    console.log("not clicked")

    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            console.log("clicked")
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ""){
            screen.value = ""
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value = "";
    })
    
})();