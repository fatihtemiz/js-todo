const CLOSE = document.getElementsByClassName("close");

for (i = 0; i < CLOSE.length; i++ ) {
    CLOSE[i].onclick = function () {

    const PARENTELEMENT = this.parentElement;
    PARENTELEMENT.style.display = "none";

    }
}

const LIST = document.querySelector("ul");

LIST.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } 

}, false)


function newElement() {
    const li = document.createElement("li");
    const inputValue = document.querySelector("#task").value;
    li.innerHTML = inputValue;

    if (inputValue === "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        LIST.append(li);
    }

    document.querySelector('#task').value = "";

    const SPAN = document.createElement('span');
    SPAN.classList = "close";
    SPAN.innerHTML = "x";
    li.append(SPAN);


    for ( i = 0; i < CLOSE.length; i++) {
        CLOSE[i].onclick = function () {
        const pLI = this.parentElement;
        pLI.style.display = "none"
    }
}

    localStorage.setItem("last To-Do", inputValue);

}



