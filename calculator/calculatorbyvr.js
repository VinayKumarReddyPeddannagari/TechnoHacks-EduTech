let resultsEl = document.getElementById("results");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                resultsEl.value = string;
            } catch (error) {
                resultsEl.value = "Error";
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            resultsEl.value = "0";
        } else if (e.target.innerHTML === "DEL") {
            string = string.slice(0, -1);
            resultsEl.value = string;
        } else {
            string += e.target.innerHTML;
            resultsEl.value = string;
        }
    });
});